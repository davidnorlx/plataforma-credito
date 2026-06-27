using Amazon.Lambda.Core;
using Amazon.StepFunctions;
using Amazon.StepFunctions.Model;
using System.Net;
using System.Text.Json;
using System.Text.Json.Serialization;

[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace Credit.StartWorkflowLambda;

public class Function
{
    private readonly AmazonStepFunctionsClient _stepFunctionsClient = new();

    private const string StateMachineArn =
        "arn:aws:states:us-east-1:150432926212:stateMachine:Credit_Application_Workflow";

    public async Task<object> FunctionHandler(JsonElement input, ILambdaContext context)
    {
        try
        {
            context.Logger.LogInformation("Raw input:");
            context.Logger.LogInformation(input.ToString());

            StartWorkflowRequest? request;

            if (input.TryGetProperty("body", out var bodyElement))
            {
                var body = bodyElement.GetString() ?? "{}";

                context.Logger.LogInformation("Body received:");
                context.Logger.LogInformation(body);

                request = JsonSerializer.Deserialize<StartWorkflowRequest>(
                    body,
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });
            }
            else
            {
                request = JsonSerializer.Deserialize<StartWorkflowRequest>(
                    input.GetRawText(),
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });
            }

            if (request == null ||
                string.IsNullOrWhiteSpace(request.CustomerId) ||
                request.Salary <= 0 ||
                request.RequestedAmount <= 0)
            {
                return new
                {
                    statusCode = (int)HttpStatusCode.BadRequest,
                    headers = CorsHeaders(),
                    body = JsonSerializer.Serialize(new
                    {
                        message = "Invalid request. customerId, salary and requestedAmount are required."
                    })
                };
            }

            var applicationId = request.ApplicationId == Guid.Empty
                ? Guid.NewGuid()
                : request.ApplicationId;

            var workflowInput = new
            {
                applicationId,
                customerId = request.CustomerId,
                salary = request.Salary,
                requestedAmount = request.RequestedAmount
            };

            var inputJson = JsonSerializer.Serialize(workflowInput);

            context.Logger.LogInformation("Workflow input:");
            context.Logger.LogInformation(inputJson);

            var response = await _stepFunctionsClient.StartExecutionAsync(
                new StartExecutionRequest
                {
                    StateMachineArn = StateMachineArn,
                    Name = $"credit-{applicationId}",
                    Input = inputJson
                });

            return new
            {
                statusCode = (int)HttpStatusCode.Accepted,
                headers = CorsHeaders(),
                body = JsonSerializer.Serialize(new
                {
                    applicationId,
                    executionArn = response.ExecutionArn,
                    status = "STARTED"
                })
            };
        }
        catch (Exception ex)
        {
            context.Logger.LogError(ex.ToString());

            return new
            {
                statusCode = (int)HttpStatusCode.InternalServerError,
                headers = CorsHeaders(),
                body = JsonSerializer.Serialize(new
                {
                    message = "Error starting credit workflow",
                    error = ex.Message
                })
            };
        }
    }

    private static Dictionary<string, string> CorsHeaders()
    {
        return new Dictionary<string, string>
        {
            { "Content-Type", "application/json" },
            { "Access-Control-Allow-Origin", "*" },
            { "Access-Control-Allow-Headers", "Content-Type" },
            { "Access-Control-Allow-Methods", "OPTIONS,POST,GET" }
        };
    }
}

public class StartWorkflowRequest
{
    [JsonPropertyName("applicationId")]
    public Guid ApplicationId { get; set; }

    [JsonPropertyName("customerId")]
    public string CustomerId { get; set; } = string.Empty;

    [JsonPropertyName("salary")]
    public decimal Salary { get; set; }

    [JsonPropertyName("requestedAmount")]
    public decimal RequestedAmount { get; set; }
}
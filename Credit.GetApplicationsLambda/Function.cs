using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.Model;
using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;
using System.Net;
using System.Text.Json;

[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace Credit.GetApplicationsLambda;

public class Function
{
    private readonly AmazonDynamoDBClient _dynamoDbClient = new();

    private const string TableName = "CreditApplications";

    public async Task<APIGatewayProxyResponse> FunctionHandler(
        APIGatewayProxyRequest request,
        ILambdaContext context)
    {
        try
        {
            var response = await _dynamoDbClient.ScanAsync(new ScanRequest
            {
                TableName = TableName,
                Limit = 50
            });

            var applications = response.Items.Select(item => new CreditApplicationResponse
            {
                ApplicationId = GetString(item, "ApplicationId"),
                CustomerId = GetString(item, "CustomerId"),
                Salary = GetDecimal(item, "Salary"),
                RequestedAmount = GetDecimal(item, "RequestedAmount"),
                Score = GetInt(item, "Score"),
                Status = GetString(item, "Status")
            }).ToList();

            return CreateResponse(HttpStatusCode.OK, applications);
        }
        catch (Exception ex)
        {
            context.Logger.LogError(ex.ToString());

            return CreateResponse(HttpStatusCode.InternalServerError, new
            {
                message = "Error getting credit applications",
                error = ex.Message
            });
        }
    }

    private static string GetString(Dictionary<string, AttributeValue> item, string key)
    {
        return item.TryGetValue(key, out var value) ? value.S ?? string.Empty : string.Empty;
    }

    private static decimal GetDecimal(Dictionary<string, AttributeValue> item, string key)
    {
        return item.TryGetValue(key, out var value) && decimal.TryParse(value.N, out var result)
            ? result
            : 0;
    }

    private static int GetInt(Dictionary<string, AttributeValue> item, string key)
    {
        return item.TryGetValue(key, out var value) && int.TryParse(value.N, out var result)
            ? result
            : 0;
    }

    private static APIGatewayProxyResponse CreateResponse(HttpStatusCode statusCode, object body)
    {
        return new APIGatewayProxyResponse
        {
            StatusCode = (int)statusCode,
            Headers = new Dictionary<string, string>
            {
                { "Content-Type", "application/json" },
                { "Access-Control-Allow-Origin", "*" },
                { "Access-Control-Allow-Headers", "Content-Type" },
                { "Access-Control-Allow-Methods", "OPTIONS,GET,POST" }
            },
            Body = JsonSerializer.Serialize(body)
        };
    }
}

public class CreditApplicationResponse
{
    public string ApplicationId { get; set; } = string.Empty;
    public string CustomerId { get; set; } = string.Empty;
    public decimal Salary { get; set; }
    public decimal RequestedAmount { get; set; }
    public int Score { get; set; }
    public string Status { get; set; } = string.Empty;
}
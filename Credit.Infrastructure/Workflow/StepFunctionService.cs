using Amazon.StepFunctions;
using Amazon.StepFunctions.Model;
using Credit.Application.Interfaces;
using System.Text.Json;

namespace Credit.Infrastructure.Workflow;

public class StepFunctionService : IStepFunctionService
{
    private readonly IAmazonStepFunctions _stepFunctions;

    // Reemplaza por el ARN de tu State Machine
    private const string StateMachineArn =
        "arn:aws:states:us-east-1:150432926212:stateMachine:Credit_Application_Workflow";

    public StepFunctionService(
        IAmazonStepFunctions stepFunctions)
    {
        _stepFunctions = stepFunctions;
    }

    public async Task<string> StartCreditWorkflowAsync(
    string customerId,
    decimal salary,
    decimal requestedAmount)
    {
        var applicationId = Guid.NewGuid();

        var input = new
        {
            applicationId,
            customerId,
            salary,
            requestedAmount
        };

        var request = new StartExecutionRequest
        {
            StateMachineArn = StateMachineArn,
            Input = JsonSerializer.Serialize(input)
        };

        var response =
            await _stepFunctions.StartExecutionAsync(request);

        return response.ExecutionArn;
    }
}
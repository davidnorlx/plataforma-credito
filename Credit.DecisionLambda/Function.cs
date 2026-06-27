using Amazon.Lambda.Core;
using Credit.Application.Services;
using Credit.DecisionLambda.Models;

[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace Credit.DecisionLambda;

public class Function
{
    public DecisionResponse FunctionHandler(
        DecisionRequest request,
        ILambdaContext context)
    {
        context.Logger.LogInformation($"ApplicationId: {request.ApplicationId}");
        context.Logger.LogInformation($"CustomerId: {request.CustomerId}");
        context.Logger.LogInformation($"Salary: {request.Salary}");
        context.Logger.LogInformation($"RequestedAmount: {request.RequestedAmount}");
        context.Logger.LogInformation($"Score recibido: {request.Score}");

        var service = new CreditDecisionService();

        var decision = service.Decide(request.Score);

        context.Logger.LogInformation($"Decisión tomada: {decision}");

        return new DecisionResponse
        {
            ApplicationId = request.ApplicationId,
            CustomerId = request.CustomerId,
            Salary = request.Salary,
            RequestedAmount = request.RequestedAmount,
            Score = request.Score,
            Status = decision
        };
    }
}
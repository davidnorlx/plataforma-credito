using Amazon.Lambda.Core;
using Credit.Application.Services;
using Credit.ScoreLambda.Models;

[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace Credit.ScoreLambda;

public class Function
{
    public ScoreResponse FunctionHandler(
        ScoreRequest request,
        ILambdaContext context)
    {
        context.Logger.LogInformation($"Calculando score para salario: {request.Salary}");

        var scoringService = new CreditScoringService();

        var score = scoringService.Calculate(request.Salary);

        context.Logger.LogInformation($"Score calculado: {score}");

        return new ScoreResponse
        {
            Score = score
        };
    }
}
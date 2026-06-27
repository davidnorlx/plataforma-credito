using Amazon.Lambda.Core;
using Credit.Application.Interfaces;
using Credit.Domain.Entities;
using Credit.Infrastructure.DependencyInjection;
using Credit.SaveLambda.Models;
using Microsoft.Extensions.DependencyInjection;

[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace Credit.SaveLambda;

public class Function
{
    private readonly ServiceProvider _serviceProvider;

    public Function()
    {
        var services = new ServiceCollection();

        services.AddInfrastructure();

        _serviceProvider = services.BuildServiceProvider();
    }

    public async Task<string> FunctionHandler(
        SaveCreditRequest request,
        ILambdaContext context)
    {
        var repository =
            _serviceProvider.GetRequiredService<ICreditRepository>();

        var application = new CreditApplication(
            Guid.NewGuid(),
            request.CustomerId,
            request.Salary,
            request.RequestedAmount,
            request.Status);

        await repository.SaveAsync(application);

        return "Saved successfully";
    }
}
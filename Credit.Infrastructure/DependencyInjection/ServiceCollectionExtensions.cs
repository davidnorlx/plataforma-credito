using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.Extensions.NETCore.Setup;
using Amazon.SimpleNotificationService;
using Amazon.StepFunctions;
using Credit.Application.Interfaces;
using Credit.Infrastructure.Notifications;
using Credit.Infrastructure.Persistence;
using Credit.Infrastructure.Workflow;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Credit.Infrastructure.DependencyInjection;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services,
        IConfiguration? configuration = null)
    {
        if (configuration != null)
        {
            services.AddDefaultAWSOptions(
                configuration.GetAWSOptions());

            services.AddAWSService<IAmazonDynamoDB>();
            services.AddAWSService<IAmazonSimpleNotificationService>();
            services.AddAWSService<IAmazonStepFunctions>();
        }
        else
        {
            services.AddSingleton<IAmazonDynamoDB>(
                new AmazonDynamoDBClient());

            services.AddSingleton<IAmazonSimpleNotificationService>(
                new AmazonSimpleNotificationServiceClient());

            services.AddSingleton<IAmazonStepFunctions>(
                new AmazonStepFunctionsClient());
        }

        services.AddScoped<IDynamoDBContext, DynamoDBContext>();

        services.AddScoped<ICreditRepository, DynamoCreditRepository>();

        services.AddScoped<INotificationService, SnsNotificationService>();

        services.AddScoped<IStepFunctionService, StepFunctionService>();

        return services;
    }
}
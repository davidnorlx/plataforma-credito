using Amazon.Lambda.Core;
using Credit.Application.Interfaces;
using Credit.Infrastructure.DependencyInjection;
using Credit.NotificationLambda.Models;
using Microsoft.Extensions.DependencyInjection;

[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace Credit.NotificationLambda;

public class Function
{
    private readonly IServiceProvider _serviceProvider;

    public Function()
    {
        var services = new ServiceCollection();

        services.AddInfrastructure();

        _serviceProvider = services.BuildServiceProvider();
    }

    public async Task<string> FunctionHandler(
        NotificationRequest request,
        ILambdaContext context)
    {
        var notificationService =
            _serviceProvider.GetRequiredService<INotificationService>();

        await notificationService.NotifyAsync(
            request.ApplicationId,
            request.CustomerId,
            request.Status);

        return "Notification sent successfully";
    }
}
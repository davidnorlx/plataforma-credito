using Amazon.SimpleNotificationService;
using Amazon.SimpleNotificationService.Model;
using Credit.Application.Interfaces;

namespace Credit.Infrastructure.Notifications;

public class SnsNotificationService
    : INotificationService
{
    private readonly IAmazonSimpleNotificationService _sns;

    private const string TopicArn =
        "arn:aws:sns:us-east-1:150432926212:credit-application-events";

    public SnsNotificationService(
        IAmazonSimpleNotificationService sns)
    {
        _sns = sns;
    }

    public async Task NotifyAsync(
        Guid applicationId,
        string customerId,
        string status)
    {
        var message = $"""
        Nueva solicitud de crédito

        ApplicationId: {applicationId}
        Cliente: {customerId}
        Estado: {status}
        """;

        await _sns.PublishAsync(
            new PublishRequest
            {
                TopicArn = TopicArn,
                Subject = "Credit Application",
                Message = message
            });
    }
}
using Amazon.EventBridge;
using Amazon.EventBridge.Model;
using Amazon.Lambda.Core;
using System.Text.Json;

[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace Credit.PublishEventLambda;

public class Function
{
    private readonly AmazonEventBridgeClient _eventBridgeClient = new();

    public async Task<PublishEventResponse> FunctionHandler(
        PublishEventRequest request,
        ILambdaContext context)
    {
        context.Logger.LogInformation($"Publishing event for ApplicationId: {request.ApplicationId}");

        var eventType = request.Status switch
        {
            "APPROVED" => "CreditApplicationApproved",
            "REJECTED" => "CreditApplicationRejected",
            "MANUAL_REVIEW" => "CreditApplicationManualReview",
            _ => "CreditApplicationProcessed"
        };

        var detail = JsonSerializer.Serialize(request);

        var result = await _eventBridgeClient.PutEventsAsync(new PutEventsRequest
        {
            Entries = new List<PutEventsRequestEntry>
            {
                new PutEventsRequestEntry
                {
                    EventBusName = "default",
                    Source = "credit.application",
                    DetailType = eventType,
                    Detail = detail
                }
            }
        });

        if (result.FailedEntryCount > 0)
        {
            throw new Exception("Error publishing event to EventBridge");
        }

        return new PublishEventResponse
        {
            ApplicationId = request.ApplicationId,
            Status = request.Status,
            EventType = eventType,
            Published = true
        };
    }
}

public class PublishEventRequest
{
    public Guid ApplicationId { get; set; }
    public string CustomerId { get; set; } = string.Empty;
    public decimal Salary { get; set; }
    public decimal RequestedAmount { get; set; }
    public int Score { get; set; }
    public string Status { get; set; } = string.Empty;
}

public class PublishEventResponse
{
    public Guid ApplicationId { get; set; }
    public string Status { get; set; } = string.Empty;
    public string EventType { get; set; } = string.Empty;
    public bool Published { get; set; }
}
using Amazon.Lambda.Core;
using System.Text.Json;
using System.Text.Json.Serialization;

[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace Credit.AuditLambda;

public class Function
{
    public void FunctionHandler(EventBridgeEvent<CreditApplicationEventDetail> input, ILambdaContext context)
    {
        context.Logger.LogInformation("===== CREDIT EVENT RECEIVED =====");
        context.Logger.LogInformation(JsonSerializer.Serialize(input));

        context.Logger.LogInformation($"Event Type: {input.DetailType}");
        context.Logger.LogInformation($"ApplicationId: {input.Detail.ApplicationId}");
        context.Logger.LogInformation($"CustomerId: {input.Detail.CustomerId}");
        context.Logger.LogInformation($"Status: {input.Detail.Status}");
        context.Logger.LogInformation($"Score: {input.Detail.Score}");
        context.Logger.LogInformation("===== AUDIT COMPLETED =====");
    }
}

public class EventBridgeEvent<TDetail>
{
    [JsonPropertyName("version")]
    public string Version { get; set; } = string.Empty;

    [JsonPropertyName("id")]
    public string Id { get; set; } = string.Empty;

    [JsonPropertyName("detail-type")]
    public string DetailType { get; set; } = string.Empty;

    [JsonPropertyName("source")]
    public string Source { get; set; } = string.Empty;

    [JsonPropertyName("account")]
    public string Account { get; set; } = string.Empty;

    [JsonPropertyName("time")]
    public DateTime Time { get; set; }

    [JsonPropertyName("region")]
    public string Region { get; set; } = string.Empty;

    [JsonPropertyName("detail")]
    public TDetail Detail { get; set; } = default!;
}

public class CreditApplicationEventDetail
{
    public Guid ApplicationId { get; set; }
    public string CustomerId { get; set; } = string.Empty;
    public decimal Salary { get; set; }
    public decimal RequestedAmount { get; set; }
    public int Score { get; set; }
    public string Status { get; set; } = string.Empty;
}
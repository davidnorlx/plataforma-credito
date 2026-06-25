using Amazon.DynamoDBv2.DataModel;

namespace Credit.Infrastructure.Persistence;

[DynamoDBTable("CreditApplications")]
public class CreditApplicationItem
{
    [DynamoDBHashKey("ApplicationId")]
    public string ApplicationId { get; set; } = string.Empty;

    public string CustomerId { get; set; } = string.Empty;

    public decimal Salary { get; set; }

    public decimal RequestedAmount { get; set; }

    public string Status { get; set; } = string.Empty;
}
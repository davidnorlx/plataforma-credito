namespace Credit.DecisionLambda.Models;

public class DecisionResponse
{
    public Guid ApplicationId { get; set; }

    public string CustomerId { get; set; } = string.Empty;

    public decimal Salary { get; set; }

    public decimal RequestedAmount { get; set; }

    public int Score { get; set; }

    public string Status { get; set; } = string.Empty;
}
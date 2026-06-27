namespace Credit.SaveLambda.Models;

public class SaveCreditRequest
{
    public string CustomerId { get; set; } = string.Empty;

    public decimal Salary { get; set; }

    public decimal RequestedAmount { get; set; }

    public int Score { get; set; }

    public string Status { get; set; } = string.Empty;
}
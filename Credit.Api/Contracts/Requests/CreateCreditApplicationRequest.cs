namespace Credit.Api.Contracts.Requests;

public class CreateCreditApplicationRequest
{
    public string CustomerId { get; set; }

    public decimal Salary { get; set; }

    public decimal RequestedAmount { get; set; }
}
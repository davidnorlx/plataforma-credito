namespace Credit.Domain.Entities;

public class CreditApplication
{
    public Guid Id { get; private set; }
    public string CustomerId { get; private set; }
    public decimal Salary { get; private set; }
    public decimal RequestedAmount { get; private set; }
    public string Status { get; private set; }

    public CreditApplication(
        string customerId,
        decimal salary,
        decimal requestedAmount)
    {
        Id = Guid.NewGuid();
        CustomerId = customerId;
        Salary = salary;
        RequestedAmount = requestedAmount;
        Status = "PENDING";
    }

    public CreditApplication(
        Guid id,
        string customerId,
        decimal salary,
        decimal requestedAmount,
        string status)
    {
        Id = id;
        CustomerId = customerId;
        Salary = salary;
        RequestedAmount = requestedAmount;
        Status = status;
    }



    public void UpdateStatus(string status)
    {
        Status = status;
    }

    private CreditApplication()
    {
    }
}
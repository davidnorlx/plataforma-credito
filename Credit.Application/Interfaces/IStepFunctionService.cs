namespace Credit.Application.Interfaces;

public interface IStepFunctionService
{
    Task<string> StartCreditWorkflowAsync(
        string customerId,
        decimal salary,
        decimal requestedAmount);
}
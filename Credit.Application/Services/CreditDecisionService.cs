//using Credit.Domain.Constants;

namespace Credit.Application.Services;

public class CreditDecisionService
{
    public string Decide(int score)
    {
        return score >= 700
            ? CreditStatus.Approved
            : CreditStatus.Rejected;
    }
}
namespace Credit.Application.Services;

public class CreditDecisionService
{
    public string Decide(int score)
    {
        if (score >= 750)
        {
            return "APPROVED";
        }

        if (score >= 650)
        {
            return "MANUAL_REVIEW";
        }

        return "REJECTED";
    }
}
namespace Credit.Application.Services;

public class CreditScoringService
{
    public int Calculate(decimal salary)
    {
        if (salary > 8000000)
            return 900;

        if (salary > 5000000)
            return 700;

        return 500;
    }
}
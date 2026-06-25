namespace Credit.Api.Contracts.Responses;

public class CreateCreditApplicationResponse
{
    public Guid ApplicationId { get; set; }

    public string Status { get; set; }

    public int Score { get; set; }
}


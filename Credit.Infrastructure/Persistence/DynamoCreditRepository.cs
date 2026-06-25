using Amazon.DynamoDBv2.DataModel;
using Credit.Application.Interfaces;
using Credit.Domain.Entities;

namespace Credit.Infrastructure.Persistence;

public class DynamoCreditRepository : ICreditRepository
{
    private readonly IDynamoDBContext _context;

    public DynamoCreditRepository(
        IDynamoDBContext context)
    {
        _context = context;
    }

    public async Task SaveAsync(CreditApplication application)
    {
        Console.WriteLine($"Guardando {application.Id}");

        var item = new CreditApplicationItem
        {
            ApplicationId = application.Id.ToString(),
            CustomerId = application.CustomerId,
            Salary = application.Salary,
            RequestedAmount = application.RequestedAmount,
            Status = application.Status
        };

        await _context.SaveAsync(item);

        Console.WriteLine("Guardado OK");
    }
    public async Task<CreditApplication?> GetByIdAsync(
        Guid id)
    {
        var item =
            await _context.LoadAsync<
                CreditApplicationItem>(
                id.ToString());

        if (item == null)
            return null;

        var application =
            new CreditApplication(
                item.CustomerId,
                item.Salary,
                item.RequestedAmount);

        application.UpdateStatus(
            item.Status);

        return new CreditApplication(
    Guid.Parse(item.ApplicationId),
    item.CustomerId,
    item.Salary,
    item.RequestedAmount,
    item.Status);
    }
}
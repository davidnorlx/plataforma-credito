using Credit.Application.Interfaces;
using Credit.Domain.Entities;

namespace Credit.Infrastructure.Repositories;

public class InMemoryCreditRepository : ICreditRepository
{
    private readonly List<CreditApplication> _applications = new();

    public Task SaveAsync(CreditApplication application)
    {
        _applications.Add(application);

        return Task.CompletedTask;
    }

    public Task<CreditApplication?> GetByIdAsync(Guid id)
    {
        return Task.FromResult(
            _applications.FirstOrDefault(x => x.Id == id));
    }
}
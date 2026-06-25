using Credit.Domain.Entities;

namespace Credit.Application.Interfaces;

public interface ICreditRepository
{
    Task SaveAsync(CreditApplication application);

    Task<CreditApplication?> GetByIdAsync(Guid id);
}
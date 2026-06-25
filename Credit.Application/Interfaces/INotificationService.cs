namespace Credit.Application.Interfaces;

public interface INotificationService
{
    Task NotifyAsync(
        Guid applicationId,
        string customerId,
        string status);
}
using Microsoft.AspNetCore.Mvc;
using Credit.Api.Contracts.Requests;
using Credit.Api.Contracts.Responses;
using Credit.Application.Interfaces;
using Credit.Application.Services;
using Credit.Domain.Entities;

namespace Credit.Api.Controllers;

[ApiController]
[Route("credit-applications")]
public class CreditApplicationsController : ControllerBase
{
    private readonly ICreditRepository _repository;
    private readonly INotificationService _notificationService;

    public CreditApplicationsController(ICreditRepository repository, INotificationService notificationService)
    {
        _repository = repository;
        _notificationService = notificationService;

    }

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> GetById(Guid id)
    {
        var application =
            await _repository.GetByIdAsync(id);

        if (application is null)
            return NotFound();

        return Ok(application);
    }


    [HttpPost]
    public async Task<IActionResult> Create(CreateCreditApplicationRequest request)
    {
       // Crear solicitud
        var application = new CreditApplication(
            request.CustomerId,
            request.Salary,
            request.RequestedAmount
        );

        // Calcular score
        var scoringService = new CreditScoringService();
        var score = scoringService.Calculate(request.Salary);

        // Tomar decisión
        var decisionService = new CreditDecisionService();
        var decision = decisionService.Decide(score);

        // Actualizar estado
        application.UpdateStatus(decision);

        // Guardar
        await _repository.SaveAsync(application);

        //Notificacion
        await _notificationService.NotifyAsync(
        application.Id,
        application.CustomerId,
        application.Status);

        // Respuesta
        var response = new CreateCreditApplicationResponse
        {
            ApplicationId = application.Id,
            Status = application.Status,
            Score = score
        };

        return Ok(response);
    }
}
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
    /*private readonly ICreditRepository _repository;
    private readonly INotificationService _notificationService;

    public CreditApplicationsController(ICreditRepository repository, INotificationService notificationService)
    {
        _repository = repository;
        _notificationService = notificationService;

    }*/

    private readonly IStepFunctionService _stepFunctionService;

    public CreditApplicationsController(
        IStepFunctionService stepFunctionService)
    {
        _stepFunctionService = stepFunctionService;
    }

   /* [HttpGet("{id:guid}")]
    public async Task<IActionResult> GetById(Guid id)
    {
        var application =
            await _repository.GetByIdAsync(id);

        if (application is null)
            return NotFound();

        return Ok(application);
    }*/


    [HttpPost]
    public async Task<IActionResult> Create(
    CreateCreditApplicationRequest request)
    {
        var executionArn =
            await _stepFunctionService.StartCreditWorkflowAsync(
                request.CustomerId,
                request.Salary,
                request.RequestedAmount);

        return Accepted(new
        {
            Message = "Solicitud recibida.",
            ExecutionArn = executionArn
        });
    }
}
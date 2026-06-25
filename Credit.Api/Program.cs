using Credit.Application.Interfaces;
using Credit.Infrastructure.Persistence;
using Credit.Infrastructure.Repositories;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.SimpleNotificationService;
using Credit.Infrastructure.Notifications;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

/*builder.Services.AddSingleton<
    ICreditRepository,
    InMemoryCreditRepository>();*/

builder.Services.AddAWSService<
    IAmazonDynamoDB>();

builder.Services.AddScoped<
    IDynamoDBContext,
    DynamoDBContext>();

builder.Services.AddScoped<
    ICreditRepository,
    DynamoCreditRepository>();

builder.Services.AddAWSService<
    IAmazonSimpleNotificationService>();

builder.Services.AddScoped<
    INotificationService,
    SnsNotificationService>();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();

app.Run();
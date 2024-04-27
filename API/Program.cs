// <copyright file="Program.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching",
};

app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index => // Removed unnecessary space to satisfy SA1025
        new WeatherForecast(
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast")
.WithOpenApi();

app.Run();

/// <summary>
/// Represents a weather forecast.
/// </summary>
/// <param name="date">The date of the forecast.</param>
/// <param name="temperatureC">The temperature in Celsius.</param>
/// <param name="summary">The summary of the weather condition.</param>
/// Added XML comments to satisfy SA1600.
record WeatherForecast(DateOnly date, int temperatureC, string? summary) // SA1313: Parameters renamed
{
    /// <summary>
    /// Gets the temperature in Fahrenheit.
    /// </summary>
    public int TemperatureF => 32 + (int)(this.temperatureC / 0.5556); // Use 'temperatureC' directly, assuming use of 'this' is not applicable here as it is a value generated property.
}

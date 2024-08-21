// <copyright file="ExceptionMiddleware.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace API.Middleware
{
    using System.Net;
    using System.Text.Json;
    using Application.Core;
    using Serilog.Context;

    /// <summary>
    /// Middleware for handling exceptions globally in the application.
    /// </summary>
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate next;
        private readonly ILogger<ExceptionMiddleware> logger;
        private readonly IHostEnvironment env;

        /// <summary>
        /// Initializes a new instance of the <see cref="ExceptionMiddleware"/> class.
        /// </summary>
        /// <param name="next">The next middleware in the pipeline.</param>
        /// <param name="logger">The logger used to log exceptions.</param>
        /// <param name="env">The hosting environment.</param>
        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger, IHostEnvironment env)
        {
            this.next = next;
            this.logger = logger;
            this.env = env;
        }

        /// <summary>
        /// Invokes the middleware to handle the HTTP context asynchronously.
        /// </summary>
        /// <param name="context">The HTTP context.</param>
        /// <returns>A task representing the asynchronous operation.</returns>
        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await this.next(context);
            }
            catch (Exception ex)
            {
                // Capture the correlation ID or other relevant context if available
                var correlationId = context.TraceIdentifier;

                // Log the exception with Serilog, including structured data
                LogContext.PushProperty("CorrelationId", correlationId);
                LogContext.PushProperty("RequestPath", context.Request.Path);

                this.logger.LogError(ex, "An unhandled exception occurred while processing the request. CorrelationId: {CorrelationId}", correlationId);

                context.Response.ContentType = "application/json";
                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

                var response = this.env.IsDevelopment()
                    ? new AppException(context.Response.StatusCode, ex.Message, ex.StackTrace)
                    : new AppException(context.Response.StatusCode, "Internal Server Error");

                var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };
                var json = JsonSerializer.Serialize(response, options);

                await context.Response.WriteAsync(json);
            }
        }
    }
}

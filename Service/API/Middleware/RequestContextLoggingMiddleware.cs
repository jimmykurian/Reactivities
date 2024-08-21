// <copyright file="RequestContextLoggingMiddleware.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace API.Middleware
{
    using Microsoft.Extensions.Primitives;
    using Serilog.Context;

    /// <summary>
    /// Middleware for adding correlation ID to the Serilog logging context.
    /// </summary>
    public class RequestContextLoggingMiddleware
    {
        /// <summary>
        /// The name of the HTTP header used to pass the correlation ID.
        /// </summary>
        private const string CorrelationIdHeaderName = "X-Correlation-ID";

        /// <summary>
        /// The next middleware in the pipeline.
        /// </summary>
        private readonly RequestDelegate next;

        /// <summary>
        /// Initializes a new instance of the <see cref="RequestContextLoggingMiddleware"/> class.
        /// </summary>
        /// <param name="next">The next middleware in the pipeline.</param>
        public RequestContextLoggingMiddleware(RequestDelegate next)
        {
            this.next = next;
        }

        /// <summary>
        /// Invokes the middleware to add the correlation ID to the logging context.
        /// </summary>
        /// <param name="context">The <see cref="HttpContext"/> for the current request.</param>
        /// <returns>A <see cref="Task"/> representing the asynchronous operation.</returns>
        public Task Invoke(HttpContext context)
        {
            string correlationId = GetCorrelationId(context);

            using (LogContext.PushProperty("CorrelationId", correlationId))
            {
                return this.next(context);
            }
        }

        /// <summary>
        /// Retrieves the correlation ID from the request headers or uses the trace identifier if not present.
        /// </summary>
        /// <param name="context">The <see cref="HttpContext"/> for the current request.</param>
        /// <returns>A string representing the correlation ID.</returns>
        private static string GetCorrelationId(HttpContext context)
        {
            context.Request.Headers.TryGetValue(CorrelationIdHeaderName, out StringValues correlationId);
            return correlationId.FirstOrDefault() ?? context.TraceIdentifier;
        }
    }
}

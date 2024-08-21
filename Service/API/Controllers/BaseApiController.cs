// <copyright file="BaseApiController.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace API.Controllers
{
    using FluentResults;
    using MediatR;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    /// <summary>
    /// Represents the base API controller providing common functionality to other API controllers.
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        private readonly ILogger<BaseApiController> logger;
        private IMediator mediator;

        /// <summary>
        /// Initializes a new instance of the <see cref="BaseApiController"/> class.
        /// </summary>
        /// <param name="logger">The logger instance to use for logging.</param>
        public BaseApiController(ILogger<BaseApiController> logger)
        {
            this.logger = logger;
        }

        /// <summary>
        /// Gets the Mediator instance used for handling requests.
        /// </summary>
        protected internal IMediator Mediator => this.mediator ??= this.HttpContext.RequestServices.GetService<IMediator>();

        /// <summary>
        /// Handles the result of an operation and returns the appropriate <see cref="ActionResult"/>.
        /// </summary>
        /// <typeparam name="T">The type of the result value.</typeparam>
        /// <param name="result">The result of the operation.</param>
        /// <param name="created">Indicates if the result corresponds to a created resource.</param>
        /// <param name="deleted">Indicates if the result corresponds to a deleted resource.</param>
        /// <returns>An <see cref="ActionResult"/> representing the HTTP response.</returns>
        protected internal ActionResult HandleResult<T>(Result<T> result, bool created = false, bool deleted = false)
        {
            if (result == null)
            {
                this.logger.LogWarning("HandleResult was called with a null result.");
                return this.NotFound();
            }
            else if (result.IsFailed && result.Errors.Any(e => e.Message.Contains("not found", StringComparison.OrdinalIgnoreCase)))
            {
                this.logger.LogWarning("Resource not found: {Errors}", result.Errors.Select(e => e.Message));
                return this.NotFound();
            }
            else if (result.IsSuccess && result.Value != null)
            {
                if (created)
                {
                    this.logger.LogInformation("Resource created successfully: {Value}", result.Value);
                    return this.Created(string.Empty, result.Value);
                }
                else if (deleted)
                {
                    this.logger.LogInformation("Resource deleted successfully: {Value}", result.Value);
                    return this.NoContent();
                }
                else
                {
                    this.logger.LogInformation("Operation successful: {Value}", result.Value);
                    return this.Ok(result.Value);
                }
            }
            else if (result.IsSuccess && result.Value == null)
            {
                this.logger.LogWarning("Operation succeeded, but no resource was found.");
                return this.NotFound();
            }
            else
            {
                this.logger.LogError("Operation failed: {Errors}", result.Errors.Select(e => e.Message));
                return this.BadRequest(result.Errors);
            }
        }
    }
}

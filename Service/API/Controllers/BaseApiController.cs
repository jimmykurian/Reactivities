// <copyright file="BaseApiController.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace API.Controllers
{
    using FluentResults;
    using MediatR;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Represents the base API controller providing common functionality to other API controllers.
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        private IMediator mediator;

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
                return this.NotFound();
            }
            else if (result.IsFailed && result.Errors.Any(e => e.Message.Contains("not found", StringComparison.OrdinalIgnoreCase)))
            {
                return this.NotFound();
            }
            else if (result.IsSuccess && result.Value != null && !created && !deleted)
            {
                return this.Ok(result.Value);
            }
            else if (result.IsSuccess && result.Value != null && created)
            {
                return this.Created(string.Empty, result.Value);
            }
            else if (result.IsSuccess && result.Value != null && deleted)
            {
                return this.NoContent();
            }
            else if (result.IsSuccess && result.Value == null)
            {
                return this.NotFound();
            }
            else
            {
                return this.BadRequest(result.Errors);
            }
        }
    }
}
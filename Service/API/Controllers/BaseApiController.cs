// <copyright file="BaseApiController.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace API.Controllers
{
    using MediatR;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Base API controller for common API functionalities.
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        private IMediator mediator;

        /// <summary>
        /// Gets the Mediator instance.
        /// </summary>
        protected internal IMediator Mediator => this.mediator ??= this.HttpContext.RequestServices.GetService<IMediator>();
    }
}
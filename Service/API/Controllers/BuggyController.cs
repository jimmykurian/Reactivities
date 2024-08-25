// <copyright file="BuggyController.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace API.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    /// <summary>
    /// Controller to simulate different types of HTTP responses for testing purposes.
    /// </summary>
    public class BuggyController : BaseApiController
    {
        private readonly ILogger<BuggyController> logger;

        /// <summary>
        /// Initializes a new instance of the <see cref="BuggyController"/> class.
        /// </summary>
        /// <param name="logger">The logger used for logging information.</param>
        public BuggyController(ILogger<BuggyController> logger)
            : base(logger)
        {
            this.logger = logger;
        }

        /// <summary>
        /// Returns a Not Found (404) response.
        /// </summary>
        /// <returns>An <see cref="ActionResult"/> representing the Not Found response.</returns>
        [HttpGet("not-found")]
        public ActionResult GetNotFound()
        {
            this.logger.LogWarning("NotFound endpoint was hit.");
            return this.NotFound();
        }

        /// <summary>
        /// Returns a Bad Request (400) response with a custom message.
        /// </summary>
        /// <returns>An <see cref="ActionResult"/> representing the Bad Request response.</returns>
        [HttpGet("bad-request")]
        public ActionResult GetBadRequest()
        {
            this.logger.LogWarning("BadRequest endpoint was hit with a custom message.");
            return this.BadRequest("This is a bad request");
        }

        /// <summary>
        /// Throws an exception to simulate a server error (500).
        /// </summary>
        /// <returns>An <see cref="ActionResult"/> representing the server error.</returns>
        /// <exception cref="Exception">Thrown to simulate a server error.</exception>
        [HttpGet("server-error")]
        public ActionResult GetServerError()
        {
            var exceptionMessage = "This is a server error";
            this.logger.LogError(exceptionMessage);
            throw new Exception(exceptionMessage);
        }

        /// <summary>
        /// Returns an Unauthorized (401) response.
        /// </summary>
        /// <returns>An <see cref="ActionResult"/> representing the Unauthorized response.</returns>
        [HttpGet("unauthorised")]
        public ActionResult GetUnauthorised()
        {
            this.logger.LogWarning("Unauthorised endpoint was hit.");
            return this.Unauthorized();
        }
    }
}

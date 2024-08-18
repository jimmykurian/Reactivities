// <copyright file="AppException.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Core
{
    /// <summary>
    /// Represents an application-specific exception.
    /// </summary>
    public class AppException
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="AppException"/> class.
        /// </summary>
        /// <param name="statusCode">The HTTP status code associated with the exception.</param>
        /// <param name="message">The error message.</param>
        /// <param name="details">Optional additional details about the exception.</param>
        public AppException(int statusCode, string message, string details = null)
        {
            this.StatusCode = statusCode;
            this.Message = message;
            this.Details = details;
        }

        /// <summary>
        /// Gets or sets the HTTP status code associated with the exception.
        /// </summary>
        public int StatusCode { get; set; }

        /// <summary>
        /// Gets or sets the error message.
        /// </summary>
        public string Message { get; set; }

        /// <summary>
        /// Gets or sets additional details about the exception.
        /// </summary>
        public string Details { get; set; }
    }
}

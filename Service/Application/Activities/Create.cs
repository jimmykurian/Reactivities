// <copyright file="Create.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities
{
    using Domain;
    using FluentResults;
    using FluentValidation;
    using MediatR;
    using Microsoft.Extensions.Logging;
    using Persistence;

    /// <summary>
    /// Represents a request to create a new activity.
    /// </summary>
    public class Create
    {
        /// <summary>
        /// Represents the command to create a new activity.
        /// </summary>
        public class Command : IRequest<Result<Unit>>
        {
            /// <summary>
            /// Gets or sets the activity to be created.
            /// </summary>
            public Activity Activity { get; set; }
        }

        /// <summary>
        /// Represents the validator for the create activity command.
        /// </summary>
        public class CommandValidator : AbstractValidator<Command>
        {
            /// <summary>
            /// Initializes a new instance of the <see cref="CommandValidator"/> class.
            /// </summary>
            public CommandValidator()
            {
                this.RuleFor(x => x.Activity).SetValidator(new ActivityValidator());
            }
        }

        /// <summary>
        /// Handles the command to create a new activity.
        /// </summary>
        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext context;
            private readonly ILogger<Create.Handler> logger;

            /// <summary>
            /// Initializes a new instance of the <see cref="Handler"/> class.
            /// </summary>
            /// <param name="context">The data context.</param>
            /// <param name="logger">The logger instance.</param>
            public Handler(DataContext context, ILogger<Create.Handler> logger)
            {
                this.context = context;
                this.logger = logger;
            }

            /// <summary>
            /// Handles the request to create a new activity.
            /// </summary>
            /// <param name="request">The command request containing the activity to be created.</param>
            /// <param name="cancellationToken">A token to monitor for cancellation requests.</param>
            /// <returns>A <see cref="Task"/> representing the asynchronous operation, containing the result of the operation.</returns>
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                this.logger.LogInformation("Creating a new activity with ID: {ActivityId}", request.Activity.Id);

                var result = false;
                var validator = new ActivityValidator();

                var validatedActivity = validator.Validate(request.Activity);

                if (!validatedActivity.IsValid)
                {
                    this.logger.LogWarning("Validation failed for activity with ID: {ActivityId}", request.Activity.Id);
                    result = false;
                }
                else
                {
                    this.context.Activities.Add(request.Activity);
                    result = await this.context.SaveChangesAsync(cancellationToken) > 0;
                }

                if (!result)
                {
                    this.logger.LogWarning("Failed to create activity with ID: {ActivityId}", request.Activity.Id);
                    return Result.Fail<Unit>("Failed to create activity.");
                }

                this.logger.LogInformation("Successfully created activity with ID: {ActivityId}", request.Activity.Id);
                return Result.Ok(Unit.Value);
            }
        }
    }
}

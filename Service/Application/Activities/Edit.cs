// <copyright file="Edit.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities
{
    using AutoMapper;
    using Domain;
    using FluentResults;
    using FluentValidation;
    using MediatR;
    using Microsoft.Extensions.Logging;
    using Persistence;

    /// <summary>
    /// Represents a request to edit an existing activity.
    /// </summary>
    public class Edit
    {
        /// <summary>
        /// Represents the command to edit an existing activity.
        /// </summary>
        public class Command : IRequest<Result<Unit>>
        {
            /// <summary>
            /// Gets or sets the activity to be edited.
            /// </summary>
            public Activity Activity { get; set; }
        }

        /// <summary>
        /// Represents the validator for the edit activity command.
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
        /// Handles the command to edit an existing activity.
        /// </summary>
        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext context;
            private readonly IMapper mapper;
            private readonly ILogger<Handler> logger;

            /// <summary>
            /// Initializes a new instance of the <see cref="Handler"/> class.
            /// </summary>
            /// <param name="context">The data context.</param>
            /// <param name="mapper">The AutoMapper instance used for mapping data.</param>
            /// <param name="logger">The logger instance for structured logging.</param>
            public Handler(DataContext context, IMapper mapper, ILogger<Handler> logger)
            {
                this.context = context;
                this.mapper = mapper;
                this.logger = logger;
            }

            /// <summary>
            /// Handles the request to edit an existing activity.
            /// </summary>
            /// <param name="request">The command request containing the updated activity details.</param>
            /// <param name="cancellationToken">A token to monitor for cancellation requests.</param>
            /// <returns>
            /// A <see cref="Task"/> representing the asynchronous operation. The task result contains the outcome of the edit operation.
            /// </returns>
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                this.logger.LogInformation("Attempting to update activity with ID: {ActivityId}", request.Activity.Id);

                var activity = await this.context.Activities.FindAsync(request.Activity.Id);

                if (activity == null)
                {
                    this.logger.LogWarning("Activity with ID: {ActivityId} was not found.", request.Activity.Id);
                    return null;
                }

                this.mapper.Map(request.Activity, activity);

                var result = await this.context.SaveChangesAsync(cancellationToken) > 0;

                if (!result)
                {
                    this.logger.LogError("Failed to update activity with ID: {ActivityId}", request.Activity.Id);
                    return Result.Fail<Unit>("Failed to update the activity.");
                }

                this.logger.LogInformation("Successfully updated activity with ID: {ActivityId}", request.Activity.Id);
                return Result.Ok(Unit.Value);
            }
        }
    }
}

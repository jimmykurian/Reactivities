// <copyright file="Create.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities
{
    using System.Threading;
    using System.Threading.Tasks;
    using Domain;
    using FluentValidation;
    using MediatR;
    using Persistence;

    /// <summary>
    /// Represents a request to create a new activity.
    /// </summary>
    public class Create
    {
        /// <summary>
        /// Represents the command to create a new activity.
        /// </summary>
        public class Command : IRequest
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
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;

            /// <summary>
            /// Initializes a new instance of the <see cref="Handler"/> class.
            /// </summary>
            /// <param name="context">The data context.</param>
            public Handler(DataContext context)
            {
                this.context = context;
            }

            /// <summary>
            /// Handles the request to create a new activity.
            /// </summary>
            /// <param name="request">The command request.</param>
            /// <param name="cancellationToken">The cancellation token.</param>
            [System.Diagnostics.CodeAnalysis.SuppressMessage("StyleCop.CSharp.DocumentationRules", "SA1615:Element return value should be documented", Justification = "MediatR 12 does not require returns for request with no responses.")]
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                this.context.Activities.Add(request.Activity);
                await this.context.SaveChangesAsync(cancellationToken);
            }
        }
    }
}
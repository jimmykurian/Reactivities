﻿// <copyright file="Edit.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Activities
{
    using AutoMapper;
    using Domain;
    using FluentValidation;
    using MediatR;
    using Persistence;

    /// <summary>
    /// Represents a request to edit an existing activity.
    /// </summary>
    public class Edit
    {
        /// <summary>
        /// Represents the command to edit an existing activity.
        /// </summary>
        public class Command : IRequest
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
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            private readonly IMapper mapper;

            /// <summary>
            /// Initializes a new instance of the <see cref="Handler"/> class.
            /// </summary>
            /// <param name="context">The data context.</param>
            /// <param name="mapper">The AutoMapper context.</param>
            public Handler(DataContext context, IMapper mapper)
            {
                this.context = context;
                this.mapper = mapper;
            }

            /// <summary>
            /// Handles the request to edit an existing activity.
            /// </summary>
            /// <param name="request">The command request.</param>
            /// <param name="cancellationToken">The cancellation token.</param>
            /// <returns>A task that represents the asynchronous operation.</returns>
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await this.context.Activities.FindAsync(request.Activity.Id);

                this.mapper.Map(request.Activity, activity);

                await this.context.SaveChangesAsync(cancellationToken);
            }
        }
    }
}
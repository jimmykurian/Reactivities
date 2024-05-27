// <copyright file="ApplicationServiceExtensions.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace API.Extensions
{
    using Application.Activities;
    using Application.Core;
    using Microsoft.EntityFrameworkCore;
    using Persistence;

    /// <summary>
    /// Contains extension methods for configuring application services.
    /// </summary>
    public static class ApplicationServiceExtensions
    {
        /// <summary>
        /// Adds the necessary application services to the IServiceCollection.
        /// </summary>
        /// <param name="services">The IServiceCollection to add services to.</param>
        /// <param name="config">The application configuration.</param>
        /// <returns>The updated IServiceCollection.</returns>
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            services.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });

            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000");
                });
            });

            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(List.Handler).Assembly));
            services.AddAutoMapper(typeof(MappingProfiles).Assembly);

            return services;
        }
    }
}

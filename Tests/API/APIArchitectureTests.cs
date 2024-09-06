// <copyright file="APIArchitectureTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace API
{
    using FluentAssertions;
    using NetArchTest.Rules;

    /// <summary>
    /// Contains architecture tests for the API layer to ensure it adheres to the defined architectural rules.
    /// </summary>
    [TestClass]
    public class ApiArchitectureTests
    {
        /// <summary>
        /// Ensures that the API layer has a direct dependency on the Application layer.
        /// </summary>
        [TestMethod]
        public void ApiLayer_Should_Have_Dependency_On_Application()
        {
            // Arrange
            var apiAssembly = typeof(Controllers.ActivitiesController).Assembly;

            // Act
            var result = Types
                .InAssembly(apiAssembly)
                .That()
                .HaveDependencyOn("Application")
                .GetTypes();

            // Assert
            result.Should().NotBeEmpty("API layer should have a dependency on the Application namespace.");
        }

        /// <summary>
        /// Ensures that most of the API layer does not have a direct dependency on the Domain layer, except for valid use cases like returning Domain models.
        /// </summary>
        [TestMethod]
        public void ApiLayer_Should_Have_Indirect_Dependency_On_Domain_Through_Application()
        {
            // Arrange
            var apiAssembly = typeof(Controllers.ActivitiesController).Assembly;

            // Act
            var result = Types
                .InAssembly(apiAssembly)
                .That()
                .ResideInNamespace("API")
                .And()
                .DoNotResideInNamespace("API.Controllers")
                .ShouldNot()
                .HaveDependencyOn("Domain")
                .GetTypes();

            // Assert
            result.Should().BeEmpty("API layer should not have a direct dependency on the Domain layer, but can depend indirectly through the Application layer.");
        }

        /// <summary>
        /// Ensures that most of the API layer does not have a direct dependency on the Persistence layer,
        /// except for valid use cases like certain controllers and service extension classes.
        /// </summary>
        [TestMethod]
        public void ApiLayer_Should_Not_Have_Dependency_On_Persistence_Except_Controllers_And_ServiceExtensions()
        {
            // Arrange
            var apiAssembly = typeof(Controllers.ActivitiesController).Assembly;

            // Act
            var result = Types
                .InAssembly(apiAssembly)
                .That()
                .ResideInNamespace("API")
                .And()
                .DoNotHaveName(nameof(API.Extensions.ApplicationServiceExtensions))
                .ShouldNot()
                .HaveDependencyOn("Persistence")
                .GetTypes();

             // Assert
            result.Should().BeEmpty("Non-controller API classes should not have a direct dependency on the Persistence layer, except for valid use cases like service extension classes.");
        }
    }
}

// <copyright file="ApplicationArchitectureTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Application.Tests
{
    using FluentAssertions;
    using NetArchTest.Rules;

    /// <summary>
    /// Contains architecture tests for the Application layer to ensure it adheres to the defined architectural rules.
    /// </summary>
    [TestClass]
    public class ApplicationArchitectureTests
    {
        /// <summary>
        /// Ensures that the Application layer has a dependency on the Domain layer.
        /// </summary>
        [TestMethod]
        public void ApplicationLayer_Should_Have_Dependency_On_Domain()
        {
            // Arrange
            var applicationAssembly = typeof(Activities.List).Assembly;

            // Act
            var result = Types
                .InAssembly(applicationAssembly)
                .Should()
                .HaveDependencyOn("Domain")
                .GetTypes();

            // Assert
            result.Should().NotBeEmpty("Application layer should have a dependency on the Domain layer.");
        }

        /// <summary>
        /// Ensures that the Application layer has a dependency on the Persistence layer.
        /// </summary>
        [TestMethod]
        public void ApplicationLayer_Should_Have_Dependency_On_Persistence()
        {
            // Arrange
            var applicationAssembly = typeof(Activities.List).Assembly;

            // Act
            var result = Types
                .InAssembly(applicationAssembly)
                .Should()
                .HaveDependencyOn("Persistence")
                .GetTypes();

            // Assert
            result.Should().NotBeEmpty("Application layer should have a dependency on the Persistence layer.");
        }

        /// <summary>
        /// Ensures that the Application layer does not have a direct dependency on the API layer.
        /// </summary>
        [TestMethod]
        public void ApplicationLayer_Should_Not_Have_Dependency_On_Api()
        {
            // Arrange
            var applicationAssembly = typeof(Activities.List).Assembly;

            // Act
            var result = Types
                .InAssembly(applicationAssembly)
                .ShouldNot()
                .HaveDependencyOn("API") // Ensure no direct dependencies on API
                .GetResult();

            // Assert
            result.IsSuccessful.Should().BeTrue("Application layer should not have a direct dependency on the API layer.");
        }

        /// <summary>
        /// Ensures that the Application layer should not depend on external UI frameworks or API-related dependencies.
        /// </summary>
        [TestMethod]
        public void ApplicationLayer_Should_Not_Have_Dependency_On_External_UI_Libraries()
        {
            // Arrange
            var applicationAssembly = typeof(Activities.List).Assembly;

            // Act
            var result = Types
                .InAssembly(applicationAssembly)
                .ShouldNot()
                .HaveDependencyOn("Microsoft.AspNetCore")
                .GetResult();

            // Assert
            result.IsSuccessful.Should().BeTrue("Application layer should not depend on external UI frameworks.");
        }

        /// <summary>
        /// Log any invalid dependencies in the Application layer, such as API or external frameworks.
        /// </summary>
        [TestMethod]
        public void ApplicationLayer_Log_Invalid_Dependencies()
        {
            // Arrange
            var applicationAssembly = typeof(Activities.List).Assembly;

            // Act
            var invalidDependencies = Types
                .InAssembly(applicationAssembly)
                .That()
                .HaveDependencyOn("API")
                .GetTypes();

            // Assert
            invalidDependencies.Should().BeEmpty("No Application layer classes should have dependencies on the API layer.");
        }
    }
}

// <copyright file="PersistenceArchitectureTests.cs" company="Jimmy Kurian">
// Copyright (c) Jimmy Kurian. All rights reserved.
// </copyright>

namespace Persistence
{
    using FluentAssertions;
    using NetArchTest.Rules;

    /// <summary>
    /// Contains architecture tests for the Persistence layer to ensure it adheres to the defined architectural rules.
    /// </summary>
    [TestClass]
    public class PersistenceArchitectureTests
    {
        /// <summary>
        /// Ensures that the Persistence layer has a dependency on the Domain layer.
        /// </summary>
        [TestMethod]
        public void PersistenceLayer_Should_Have_Dependency_On_Domain()
        {
            // Arrange
            var persistenceAssembly = typeof(Persistence.DataContext).Assembly;

            // Act
            var result = Types
                .InAssembly(persistenceAssembly)
                .Should()
                .HaveDependencyOn("Domain")
                .GetTypes();

            // Assert
            result.Should().NotBeEmpty("Persistence layer should have a dependency on the Domain layer.");
        }

        /// <summary>
        /// Ensures that the Persistence layer does not have a dependency on the Application layer.
        /// </summary>
        [TestMethod]
        public void PersistenceLayer_Should_Not_Have_Dependency_On_Application()
        {
            // Arrange
            var persistenceAssembly = typeof(Persistence.DataContext).Assembly;

            // Act
            var result = Types
                .InAssembly(persistenceAssembly)
                .ShouldNot()
                .HaveDependencyOn("Application")
                .GetResult();

            // Assert
            result.IsSuccessful.Should().BeTrue("Persistence layer should not have a dependency on the Application layer.");
        }

        /// <summary>
        /// Ensures that the Persistence layer does not have a dependency on the API layer.
        /// </summary>
        [TestMethod]
        public void PersistenceLayer_Should_Not_Have_Dependency_On_Api()
        {
            // Arrange
            var persistenceAssembly = typeof(Persistence.DataContext).Assembly;

            // Act
            var result = Types
                .InAssembly(persistenceAssembly)
                .ShouldNot()
                .HaveDependencyOn("API")
                .GetResult();

            // Assert
            result.IsSuccessful.Should().BeTrue("Persistence layer should not have a dependency on the API layer.");
        }

        /// <summary>
        /// Ensures that the Persistence layer does not have dependencies on any external UI frameworks.
        /// </summary>
        [TestMethod]
        public void PersistenceLayer_Should_Not_Have_Dependency_On_External_UI_Libraries()
        {
            // Arrange
            var persistenceAssembly = typeof(Persistence.DataContext).Assembly;

            // Act
            var result = Types
                .InAssembly(persistenceAssembly)
                .ShouldNot()
                .HaveDependencyOn("Microsoft.AspNetCore")
                .GetResult();

            // Assert
            result.IsSuccessful.Should().BeTrue("Persistence layer should not depend on external UI frameworks.");
        }

        /// <summary>
        /// Logs any invalid dependencies in the Persistence layer, such as API or Application dependencies.
        /// </summary>
        [TestMethod]
        public void PersistenceLayer_Log_Invalid_Dependencies()
        {
            // Arrange
            var persistenceAssembly = typeof(Persistence.DataContext).Assembly;

            // Act
            var invalidDependencies = Types
                .InAssembly(persistenceAssembly)
                .That()
                .HaveDependencyOn("API")
                .Or()
                .HaveDependencyOn("Application")
                .GetTypes();

            // Assert
            invalidDependencies.Should().BeEmpty("No Persistence layer classes should have dependencies on the API or Application layers.");
        }
    }
}

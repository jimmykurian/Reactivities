# Contributing to Reactivities

We welcome contributions to the Reactivities project! By contributing, you help us improve and make this project even better. Please take a moment to review this document before submitting your contributions.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Contributing Code](#contributing-code)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [License](#license)

## Code of Conduct

Please read and follow our [Code of Conduct](https://github.com/jimmykurian/Reactivities/blob/main/docs/CODE_OF_CONDUCT.md) to ensure a welcoming and inclusive environment for everyone.

## How to Contribute

### Reporting Bugs

If you find a bug in the project, please create an issue in the [Issues](https://github.com/jimmykurian/Reactivities/issues) section of the repository. Provide detailed information about the bug, including steps to reproduce, expected behavior, and actual behavior.

### Suggesting Enhancements

If you have an idea for an enhancement or new feature, please create an issue in the [Issues](https://github.com/jimmykurian/Reactivities/issues) section of the repository. Describe your idea in detail and explain why it would be beneficial to the project.

### Contributing Code

1. **Fork the repository:**

    Fork the repository by clicking the "Fork" button on the top right of the repository page.

2. **Clone the forked repository:**

    ```sh
    git clone https://github.com/your-username/Reactivities.git
    cd Reactivities
    ```

3. **Create a new branch:**

    ```sh
    git checkout -b feature/your-feature-name
    ```

4. **Make your changes:**

    Make your changes to the codebase. Ensure that your code follows the project's [style guidelines](#style-guidelines).

5. **Commit your changes using Conventional Commits:**

    We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for our commit messages. This ensures consistent and meaningful commit messages. Here are some examples:

    ```sh
    git commit -m "feat: add new feature"
    git commit -m "fix: correct a bug"
    git commit -m "docs: update documentation"
    ```

6. **Push to your forked repository:**

    ```sh
    git push origin feature/your-feature-name
    ```

7. **Create a pull request:**

    Create a pull request from your forked repository to the `main` branch of the original repository. Provide a detailed description of your changes and why they should be merged.

## Development Workflow

We follow [Trunk Based Development](https://trunkbaseddevelopment.com/) to ensure a streamlined and efficient development process. Here's how you can contribute:

1. **Set up the development environment:**

    Follow the instructions in the [README.md](README.md) file to set up the development environment for both the backend and frontend.

2. **Run the tests:**

    Ensure that all tests pass before submitting your changes. You can run the tests using the following commands:

    - Backend:

      ```sh
      cd Tests
      dotnet test
      ```

    - Frontend:

      ```sh
      cd client-app
      npm test
      ```

3. **Keep your branch up to date:**

    Regularly fetch updates from the `main` branch of the original repository and merge them into your feature branch:

    ```sh
    git fetch upstream
    git checkout main
    git pull
    git checkout feature/your-feature-name
    git merge main
    ```

4. **Review and address feedback:**

    Be responsive to feedback on your pull request and make necessary changes to ensure your contribution is ready for merging.

## Style Guidelines

- Follow the existing coding style and conventions used in the project.
- Write clear and concise commit messages following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
- Include comments and documentation where necessary to explain your code.

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

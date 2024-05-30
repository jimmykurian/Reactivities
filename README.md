![Coverage](./coverage-report/badge_linecoverage.svg)

# Reactivities

Reactivities is a comprehensive project that includes both backend and frontend components for managing activities. The backend is built with .NET Core, while the frontend is a React TypeScript project using Vite.

## Table of Contents

- [Installation](#installation)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Running the Application](#running-the-application)
  - [Backend](#backend-1)
  - [Frontend](#frontend-1)
- [Testing](#testing)
  - [Backend](#backend-2)
  - [Frontend](#frontend-2)
- [GitHub Actions](#github-actions)
- [License](#license)

## Installation

### Backend

1. **Clone the repository:**

    ```sh
    git clone https://github.com/jimmykurian/Reactivities.git
    cd Reactivities
    ```

2. **Navigate to the backend project directory:**

    ```sh
    cd Service
    ```

3. **Install dependencies:**

    ```sh
    dotnet restore
    ```

4. **Update the database:**

    ```sh
    dotnet ef database update
    ```

### Frontend

1. **Navigate to the frontend project directory:**

    ```sh
    cd client-app
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

## Running the Application

### Backend

1. **Navigate to the backend project directory:**

    ```sh
    cd Service
    ```

2. **Run the application:**

    ```sh
    dotnet run
    ```

    The backend API should now be running at `https://localhost:5001`.

### Frontend

1. **Navigate to the frontend project directory:**

    ```sh
    cd client-app
    ```

2. **Start the development server:**

    ```sh
    npm run dev
    ```

    The frontend application should now be running at `http://localhost:3000`.

## Testing

### Backend

1. **Navigate to the tests directory:**

    ```sh
    cd Tests
    ```

2. **Run the tests:**

    ```sh
    dotnet test
    ```

### Frontend

1. **Navigate to the frontend project directory:**

    ```sh
    cd client-app
    ```

2. **Run the tests:**

    ```sh
    npm test
    ```

## GitHub Actions

This project uses GitHub Actions for CI/CD. The workflows are defined in the `.github/workflows` directory.

### Node.js CI Workflow

The `node.js.yml` workflow runs the following steps on push and pull request events:

1. Checkout the code.
2. Set up Node.js.
3. Install dependencies.
4. Run build and tests.

### .NET Core CI Workflow

The `dotnet.yml` workflow runs the following steps on push and pull request events:

1. Checkout the code.
2. Set up .NET Core.
3. Install dependencies.
4. Run build and tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

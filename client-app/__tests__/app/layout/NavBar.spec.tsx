import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import NavBar from '../../../src/app/layout/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

// Automatically cleanup after each test
afterEach(cleanup);

describe('NavBar', () => {
  const renderNavBar = () =>
    render(
      <Router>
        <NavBar />
      </Router>
    );

  test('renders the logo image', () => {
    // Arrange
    renderNavBar();

    // Act
    const logoImage = screen.getByAltText('logo');

    // Assert
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/assets/logo.png');
  });

  test('renders the header title', () => {
    // Arrange
    renderNavBar();

    // Act
    const headerTitle = screen.getByText(/Reactivities/i);

    // Assert
    expect(headerTitle).toBeInTheDocument();
  });

  test('renders the Activities menu item', () => {
    // Arrange
    renderNavBar();

    // Act
    const activitiesMenuItem = screen.getByRole('menuitem', {
      name: /Activities/i,
    });

    // Assert
    expect(activitiesMenuItem).toBeInTheDocument();
  });

  test('renders the Create Activity button', () => {
    // Arrange
    renderNavBar();

    // Act
    const createActivityButton = screen.getByRole('button', {
      name: /Create Activity/i,
    });

    // Assert
    expect(createActivityButton).toBeInTheDocument();
    expect(createActivityButton).toHaveClass('positive');
  });

  test('matches snapshot', () => {
    // Arrange
    const { asFragment } = renderNavBar();

    // Act & Assert
    expect(asFragment()).toMatchSnapshot();
  });
});

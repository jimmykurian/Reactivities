import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NavBar from '../../../src/app/layout/NavBar';

describe('NavBar', () => {
  test('renders the logo image', () => {
    // Arrange
    render(<NavBar />);

    // Act
    const logoImage = screen.getByAltText('logo');

    // Assert
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/assets/logo.png');
  });

  test('renders the header title', () => {
    // Arrange
    render(<NavBar />);

    // Act
    const headerTitle = screen.getByText(/Reactivities/i);

    // Assert
    expect(headerTitle).toBeInTheDocument();
  });

  test('renders the Activities menu item', () => {
    // Arrange
    render(<NavBar />);

    // Act
    const activitiesMenuItem = screen.getByRole('menuitem', {
      name: /Activities/i,
    });

    // Assert
    expect(activitiesMenuItem).toBeInTheDocument();
  });

  test('renders the Create Activity button', () => {
    // Arrange
    render(<NavBar />);

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
    const { asFragment } = render(<NavBar />);

    // Act & Assert
    expect(asFragment()).toMatchSnapshot();
  });
});

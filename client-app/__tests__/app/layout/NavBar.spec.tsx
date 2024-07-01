import '@testing-library/jest-dom';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import NavBar from '../../../src/app/layout/NavBar';

// Automatically cleanup after each test
afterEach(cleanup);

describe('NavBar', () => {
  const openForm = jest.fn();

  test('renders the logo image', () => {
    // Arrange
    render(<NavBar openForm={openForm} />);

    // Act
    const logoImage = screen.getByAltText('logo');

    // Assert
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/assets/logo.png');
  });

  test('renders the header title', () => {
    // Arrange
    render(<NavBar openForm={openForm} />);

    // Act
    const headerTitle = screen.getByText(/Reactivities/i);

    // Assert
    expect(headerTitle).toBeInTheDocument();
  });

  test('renders the Activities menu item', () => {
    // Arrange
    render(<NavBar openForm={openForm} />);

    // Act
    const activitiesMenuItem = screen.getByRole('menuitem', {
      name: /Activities/i,
    });

    // Assert
    expect(activitiesMenuItem).toBeInTheDocument();
  });

  test('renders the Create Activity button', () => {
    // Arrange
    render(<NavBar openForm={openForm} />);

    // Act
    const createActivityButton = screen.getByRole('button', {
      name: /Create Activity/i,
    });

    // Assert
    expect(createActivityButton).toBeInTheDocument();
    expect(createActivityButton).toHaveClass('positive');
  });

  test('calls openForm when the Create Activity button is clicked', () => {
    // Arrange
    render(<NavBar openForm={openForm} />);

    // Act
    const createActivityButton = screen.getByRole('button', {
      name: /Create Activity/i,
    });
    fireEvent.click(createActivityButton);

    // Assert
    expect(openForm).toHaveBeenCalled();
  });

  test('matches snapshot', () => {
    // Arrange
    const { asFragment } = render(<NavBar openForm={openForm} />);

    // Act & Assert
    expect(asFragment()).toMatchSnapshot();
  });
});

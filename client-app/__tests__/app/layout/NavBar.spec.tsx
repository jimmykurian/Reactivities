import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NavBar from '../../../src/app/layout/NavBar';

describe('NavBar', () => {
  test('renders the logo image', () => {
    render(<NavBar />);
    const logoImage = screen.getByAltText('logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/assets/logo.png');
  });

  test('renders the header title', () => {
    render(<NavBar />);
    const headerTitle = screen.getByText(/Reactivities/i);
    expect(headerTitle).toBeInTheDocument();
  });

  test('renders the Activities menu item', () => {
    render(<NavBar />);
    const activitiesMenuItem = screen.getByRole('menuitem', {
      name: /Activities/i,
    });
    expect(activitiesMenuItem).toBeInTheDocument();
  });

  test('renders the Create Activity button', () => {
    render(<NavBar />);
    const createActivityButton = screen.getByRole('button', {
      name: /Create Activity/i,
    });
    expect(createActivityButton).toBeInTheDocument();
    expect(createActivityButton).toHaveClass('positive');
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<NavBar />);
    expect(asFragment()).toMatchSnapshot();
  });
});

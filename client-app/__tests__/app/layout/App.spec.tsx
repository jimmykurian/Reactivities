import { render, screen } from '@testing-library/react';
import App from '../../../src/app/layout/App';

describe('App', () => {
  test('renders Reactivities heading', () => {
    // Arrange
    render(<App />);

    // Act
    const headingElement = screen.getByText(/Reactivities/i);

    // Assert
    expect(headingElement).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import NotFound from '../../../../src/app/features/errors/NotFound';
import { BrowserRouter } from 'react-router-dom';

describe('NotFound Component', () => {
  it('should match the snapshot', () => {
    // Arrange
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );

    // Assert
    expect(container).toMatchSnapshot();
  });

  it('should render the NotFound component with correct content', () => {
    // Arrange
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );

    // Assert
    expect(
      screen.getByText(
        "Oops - we've looked everywhere and could not find what you are looking for!",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Return to activities page/i }),
    ).toBeInTheDocument();
  });

  it('should have a button that links back to the activities page', () => {
    // Arrange
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );

    // Act
    const button = screen.getByRole('button', {
      name: /Return to activities page/i,
    });

    // Assert
    expect(button).toHaveAttribute('href', '/activities');
  });
});

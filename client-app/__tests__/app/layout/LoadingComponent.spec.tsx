import { render, screen } from '@testing-library/react';
import LoadingComponent from '../../../src/app/layout/LoadingComponent';

describe('LoadingComponent', () => {
  test('renders with default props', () => {
    // Arrange & Act
    render(<LoadingComponent />);

    // Assert
    const loaderElement = screen.getByText('Loading...');
    expect(loaderElement).toBeInTheDocument();
  });

  test('renders with custom content', () => {
    // Arrange
    const customContent = 'Please wait...';

    // Act
    render(<LoadingComponent content={customContent} />);

    // Assert
    const loaderElement = screen.getByText(customContent);
    expect(loaderElement).toBeInTheDocument();
  });

  test('renders with inverted dimmer', () => {
    // Arrange & Act
    render(<LoadingComponent inverted={true} />);

    // Assert
    const dimmerElement = screen.getByTestId('dimmer');
    expect(dimmerElement).toHaveClass('inverted');
  });

  test('renders with non-inverted dimmer', () => {
    // Arrange & Act
    render(<LoadingComponent inverted={false} />);

    // Assert
    const dimmerElement = screen.getByTestId('dimmer');
    expect(dimmerElement).not.toHaveClass('inverted');
  });

  test('matches snapshot with default props', () => {
    // Arrange & Act
    const { asFragment } = render(<LoadingComponent />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot with custom content and non-inverted dimmer', () => {
    // Arrange
    const customContent = 'Loading data...';

    // Act
    const { asFragment } = render(
      <LoadingComponent content={customContent} inverted={false} />,
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});

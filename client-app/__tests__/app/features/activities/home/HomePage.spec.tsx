import { render, screen } from '@testing-library/react';
import { Container } from 'semantic-ui-react';
import HomePage from '../../../../../src/app/features/home/HomePage';

// Mocking semantic-ui-react's Container component
jest.mock('semantic-ui-react', () => ({
  ...jest.requireActual('semantic-ui-react'),
  Container: jest.fn(({ children, style }) => (
    <div style={style}>{children}</div>
  )),
}));

describe('HomePage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the HomePage component with heading', () => {
    // Arrange & Act
    render(<HomePage />);

    // Assert
    const headingElement = screen.getByText(/Home page/i);
    expect(headingElement).toBeInTheDocument();
    expect(Container).toHaveBeenCalledWith(
      expect.objectContaining({ style: { marginTop: '7em' } }),
      expect.anything(),
    );
  });

  test('matches snapshot', () => {
    // Arrange & Act
    const { asFragment } = render(<HomePage />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});

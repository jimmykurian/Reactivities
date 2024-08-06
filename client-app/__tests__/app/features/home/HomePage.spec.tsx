import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../../../../src/app/features/home/HomePage';

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
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );

    // Assert
    const headingElement = screen.getByText(/Welcome to Reactivities/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    // Arrange & Act
    const { asFragment } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});

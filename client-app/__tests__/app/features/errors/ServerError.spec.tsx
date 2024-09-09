import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { useStore } from '../../../../src/app/stores/store';
import ServerError from '../../../../src/app/features/errors/ServerError';

jest.mock('../../../../src/app/stores/store', () => ({
  useStore: jest.fn(),
}));

describe('ServerError Component', () => {
  const staticErrorData = {
    error: {
      message: 'Static server error occurred',
      details: 'Static stack trace details for the error',
    },
  };

  const mockStore = (error: unknown) => {
    (useStore as jest.Mock).mockReturnValue({
      commonStore: {
        error,
      },
    });
  };

  it('should display error message when error exists', () => {
    // Arrange
    const errorData = {
      message: faker.lorem.sentence(),
    };
    mockStore(errorData);

    // Act
    render(<ServerError />);

    // Assert
    expect(screen.getByText('Server Error')).toBeInTheDocument();
    expect(screen.getByText(errorData.message)).toBeInTheDocument();
  });

  it('should display stack trace details if they exist', () => {
    // Arrange
    const errorData = {
      message: faker.lorem.sentence(),
      details: faker.lorem.paragraph(),
    };
    mockStore(errorData);

    // Act
    render(<ServerError />);

    // Assert
    expect(screen.getByText('Stack trace')).toBeInTheDocument();
    expect(screen.getByText(errorData.details)).toBeInTheDocument();
  });

  it('should not display stack trace section if there are no details', () => {
    // Arrange
    const errorData = {
      message: faker.lorem.sentence(),
      details: null,
    };
    mockStore(errorData);

    // Act
    render(<ServerError />);

    // Assert
    expect(screen.queryByText('Stack trace')).not.toBeInTheDocument();
  });

  it('should render correctly with static data (snapshot)', () => {
    // Arrange
    mockStore(staticErrorData);

    // Act
    const { container } = render(<ServerError />);

    // Assert
    expect(container).toMatchSnapshot();
  });

  it('should render "Server Error" message even when there is no error', () => {
    // Arrange
    mockStore(null);

    // Act
    render(<ServerError />);

    // Assert
    expect(screen.getByText('Server Error')).toBeInTheDocument();
    expect(screen.queryByText('Stack trace')).not.toBeInTheDocument();
  });
});

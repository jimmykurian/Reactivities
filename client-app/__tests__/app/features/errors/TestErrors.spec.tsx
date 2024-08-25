import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import TestErrors from '../../../../src/app/features/errors/TestErrors';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('TestErrors Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('handles Not Found error correctly', async () => {
    // Arrange
    mockedAxios.get.mockRejectedValueOnce({
      response: { status: 404, data: 'Not Found' },
    });
    render(<TestErrors />);

    // Act
    fireEvent.click(screen.getByText('Not Found'));

    // Assert
    await waitFor(() =>
      expect(mockedAxios.get).toHaveBeenCalledWith(
        'http://localhost:5000/api/buggy/not-found',
      ),
    );
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });

  it('handles Bad Request error correctly', async () => {
    // Arrange
    mockedAxios.get.mockRejectedValueOnce({
      response: { status: 400, data: 'Bad Request' },
    });
    render(<TestErrors />);

    // Act
    fireEvent.click(screen.getByText('Bad Request'));

    // Assert
    await waitFor(() =>
      expect(mockedAxios.get).toHaveBeenCalledWith(
        'http://localhost:5000/api/buggy/bad-request',
      ),
    );
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });

  it('handles Validation Error correctly', async () => {
    // Arrange
    mockedAxios.post.mockRejectedValueOnce({
      response: { status: 400, data: 'Validation Error' },
    });
    render(<TestErrors />);

    // Act
    fireEvent.click(screen.getByText('Validation Error'));

    // Assert
    await waitFor(() =>
      expect(mockedAxios.post).toHaveBeenCalledWith(
        'http://localhost:5000/api/activities',
        {},
      ),
    );
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
  });

  it('handles Server Error correctly', async () => {
    // Arrange
    mockedAxios.get.mockRejectedValueOnce({
      response: { status: 500, data: 'Server Error' },
    });
    render(<TestErrors />);

    // Act
    fireEvent.click(screen.getByText('Server Error'));

    // Assert
    await waitFor(() =>
      expect(mockedAxios.get).toHaveBeenCalledWith(
        'http://localhost:5000/api/buggy/server-error',
      ),
    );
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });

  it('handles Unauthorised error correctly', async () => {
    // Arrange
    mockedAxios.get.mockRejectedValueOnce({
      response: { status: 401, data: 'Unauthorised' },
    });
    render(<TestErrors />);

    // Act
    fireEvent.click(screen.getByText('Unauthorised'));

    // Assert
    await waitFor(() =>
      expect(mockedAxios.get).toHaveBeenCalledWith(
        'http://localhost:5000/api/buggy/unauthorised',
      ),
    );
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });

  it('handles Bad Guid error correctly', async () => {
    // Arrange
    mockedAxios.get.mockRejectedValueOnce({
      response: { status: 400, data: 'Bad Guid' },
    });
    render(<TestErrors />);

    // Act
    fireEvent.click(screen.getByText('Bad Guid'));

    // Assert
    await waitFor(() =>
      expect(mockedAxios.get).toHaveBeenCalledWith(
        'http://localhost:5000/api/activities/notaguid',
      ),
    );
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });

  it('renders all buttons', () => {
    // Arrange & Act
    const { container } = render(<TestErrors />);

    // Assert
    expect(screen.getByText('Not Found')).toBeInTheDocument();
    expect(screen.getByText('Bad Request')).toBeInTheDocument();
    expect(screen.getByText('Validation Error')).toBeInTheDocument();
    expect(screen.getByText('Server Error')).toBeInTheDocument();
    expect(screen.getByText('Unauthorised')).toBeInTheDocument();
    expect(screen.getByText('Bad Guid')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});

import { ServerError } from '../../../src/app/models/serverError';
import CommonStore from '../../../src/app/stores/commonStore';

describe('CommonStore', () => {
  let commonStore: CommonStore;

  beforeEach(() => {
    // Arrange
    commonStore = new CommonStore();
  });

  it('should initialize with null error', () => {
    // Assert
    expect(commonStore.error).toBeNull();
  });

  it('should set the server error correctly', () => {
    // Arrange
    const mockError: ServerError = {
      statusCode: 500,
      message: 'Internal Server Error',
      details: 'Stack trace details...',
    };

    // Act
    commonStore.setServerError(mockError);

    // Assert
    expect(commonStore.error).toEqual(mockError);
    expect(commonStore.error?.statusCode).toBe(500);
    expect(commonStore.error?.message).toBe('Internal Server Error');
    expect(commonStore.error?.details).toBe('Stack trace details...');
  });

  it('should overwrite the previous error with a new error', () => {
    // Arrange
    const initialError: ServerError = {
      statusCode: 404,
      message: 'Not Found',
      details: 'No stack trace available.',
    };

    const newError: ServerError = {
      statusCode: 500,
      message: 'Internal Server Error',
      details: 'Stack trace details...',
    };

    // Act
    commonStore.setServerError(initialError);
    expect(commonStore.error?.statusCode).toBe(404);

    commonStore.setServerError(newError);

    // Assert
    expect(commonStore.error?.statusCode).toBe(500);
    expect(commonStore.error?.message).toBe('Internal Server Error');
    expect(commonStore.error?.details).toBe('Stack trace details...');
  });

  it('should clear the error by setting it to null', () => {
    // Arrange
    const mockError: ServerError = {
      statusCode: 500,
      message: 'Internal Server Error',
      details: 'Stack trace details...',
    };

    commonStore.setServerError(mockError);

    // Act
    commonStore.setServerError(null as never);

    // Assert
    expect(commonStore.error).toBeNull();
  });
});

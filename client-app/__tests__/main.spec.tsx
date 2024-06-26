import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/app/layout/App';
import { StoreContext, store } from '../src/app/stores/store';

// Mock ReactDOM.createRoot and its render method
const mockRender = jest.fn();
jest.mock('react-dom/client', () => ({
  createRoot: jest.fn().mockImplementation(() => ({
    render: mockRender,
  })),
}));

describe('main.tsx', () => {
  it('renders the App component', async () => {
    // Arrange
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    // Act
    // Dynamically import the main module
    await import('../src/main');

    // Assert
    expect(root).toBeInTheDocument();
    expect(ReactDOM.createRoot).toHaveBeenCalledWith(root);
    expect(mockRender).toHaveBeenCalledWith(
      <React.StrictMode>
        <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider>
      </React.StrictMode>,
    );
  });

  afterEach(() => {
    // Cleanup
    jest.clearAllMocks(); // Clear mocks to avoid state leakage between tests
  });
});

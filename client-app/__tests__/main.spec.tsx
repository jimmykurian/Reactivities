import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/app/layout/App';

// Mock ReactDOM.createRoot and its render method
const mockRender = jest.fn();
jest.mock('react-dom/client', () => ({
  createRoot: jest.fn().mockImplementation(() => ({
    render: mockRender,
  })),
}));

describe('main.tsx', () => {
  it('renders the App component', async () => {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    // Dynamically import the main module
    await import('../src/main');

    expect(root).toBeInTheDocument();
    expect(ReactDOM.createRoot).toHaveBeenCalledWith(root);
    expect(mockRender).toHaveBeenCalledWith(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks to avoid state leakage between tests
  });
});

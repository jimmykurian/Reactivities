import {
  createMemoryRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { render } from '@testing-library/react';
import App from '../../../src/app/layout/App';
import { routes, router } from '../../../src/app/router/Routes';

// Mocking the App component with displayName
jest.mock('../../../src/app/layout/App', () => {
  const MockApp = () => <div>App Component</div>;
  MockApp.displayName = 'App';
  return MockApp;
});

describe('Router Configuration', () => {
  it('should render the App component for the root path', () => {
    // Arrange
    const memoryRouter = createMemoryRouter(routes, { initialEntries: ['/'] });

    // Act
    const { getByText } = render(<RouterProvider router={memoryRouter} />);

    // Assert
    expect(getByText('App Component')).toBeInTheDocument();
  });

  it('should have the correct route configuration', () => {
    // Arrange
    const expectedRoutes = [
      {
        path: '/',
        element: <App />,
      },
    ];

    const normalizeRoutes = (routes: RouteObject[]) =>
      routes.map(({ path, element }) => ({ path, element }));

    // Act & Assert
    expect(normalizeRoutes(router.routes)).toEqual(expectedRoutes);
  });
});

import { render, screen } from '@testing-library/react';
import ActivityDetailedSidebar from '../../../../../src/app/features/activities/details/ActivityDetailedSidebar';
import { MemoryRouter } from 'react-router-dom';

// Mocking observer from mobx-react-lite
jest.mock('mobx-react-lite', () => ({
  observer: (component: React.ComponentType) => component,
}));

describe('ActivityDetailedSidebar', () => {
  const renderComponent = () => {
    render(
      <MemoryRouter>
        <ActivityDetailedSidebar />
      </MemoryRouter>,
    );
  };

  test('renders ActivityDetailedSidebar component', () => {
    // Act
    renderComponent();

    // Assert
    expect(screen.getByText('3 People Going')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Tom')).toBeInTheDocument();
    expect(screen.getByText('Sally')).toBeInTheDocument();
    expect(screen.getAllByText('Following')).toHaveLength(2);
    expect(screen.getAllByRole('img')).toHaveLength(3);
  });

  test('matches snapshot', () => {
    // Arrange & Act
    const { asFragment } = render(
      <MemoryRouter>
        <ActivityDetailedSidebar />
      </MemoryRouter>,
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});

import { render, screen } from '@testing-library/react';
import ActivityFilters from '../../../../../src/app/features/activities/dashboard/ActivityFilters';
import { MemoryRouter } from 'react-router-dom';
import { default as MockedActivityFilters } from '../../../../../src/app/features/activities/dashboard/ActivityFilters';

describe('ActivityFilters', () => {
  const renderComponent = () => {
    render(
      <MemoryRouter>
        <ActivityFilters />
      </MemoryRouter>,
    );
  };

  test('renders ActivityFilters component', () => {
    // Act
    renderComponent();

    // Assert
    expect(screen.getByText('Filters')).toBeInTheDocument();
    expect(screen.getByText('All Activities')).toBeInTheDocument();
    expect(screen.getByText("I'm going")).toBeInTheDocument();
    expect(screen.getByText("I'm hosting")).toBeInTheDocument();
  });

  test('renders Calendar component', () => {
    // Act
    renderComponent();

    // Assert
    expect(screen.getByText('Mon')).toBeInTheDocument();
    expect(screen.getByText('Tue')).toBeInTheDocument();
    expect(screen.getByText('Wed')).toBeInTheDocument();
    expect(screen.getByText('Thu')).toBeInTheDocument();
    expect(screen.getByText('Fri')).toBeInTheDocument();
    expect(screen.getByText('Sat')).toBeInTheDocument();
    expect(screen.getByText('Sun')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    jest.isolateModules(() => {
      jest.resetModules();
      jest.doMock('react-calendar', () => ({
        __esModule: true,
        default: () => {
          return <div>Mocked Calendar</div>;
        },
      }));

      // Arrange & Act
      const { asFragment } = render(
        <MemoryRouter>
          <MockedActivityFilters />
        </MemoryRouter>,
      );

      // Assert
      expect(asFragment()).toMatchSnapshot();
    });
  });
});

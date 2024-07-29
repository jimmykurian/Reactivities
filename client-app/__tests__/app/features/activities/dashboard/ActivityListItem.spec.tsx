import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ActivityListItem from '../../../../../src/app/features/activities/dashboard/ActivityListItem';
import { faker } from '@faker-js/faker';
import { Activity } from '../../../../../src/app/models/activity';
import { useStore } from '../../../../../src/app/stores/store';
import { MemoryRouter } from 'react-router-dom';

// Mock the store context
jest.mock('../../../../../src/app/stores/store', () => ({
  useStore: jest.fn(),
}));

const generateMockActivity = (): Activity => ({
  id: faker.string.uuid(),
  title: faker.lorem.words(3),
  date: faker.date.future().toISOString(),
  description: faker.lorem.sentence(),
  category: faker.lorem.word(),
  city: faker.location.city(),
  venue: faker.location.street(),
});

// Static data for snapshot test
const staticActivity: Activity = {
  id: '1',
  title: 'Static Activity',
  date: '2024-07-28T00:00:00.000Z',
  description: 'This is a static activity description.',
  category: 'Static Category',
  city: 'Static City',
  venue: 'Static Venue',
};

describe('ActivityListItem', () => {
  const deleteActivity = jest.fn();
  const loading = false;

  const mockStore = {
    activityStore: {
      deleteActivity,
      loading,
    },
  };

  beforeEach(() => {
    (useStore as jest.Mock).mockReturnValue(mockStore);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders ActivityListItem component', () => {
    // Arrange
    const mockActivity = generateMockActivity();
    render(
      <MemoryRouter>
        <ActivityListItem activity={mockActivity} />
      </MemoryRouter>,
    );

    // Act & Assert
    expect(screen.getByText(mockActivity.title)).toBeInTheDocument();
    expect(screen.getByText(mockActivity.date)).toBeInTheDocument();
    expect(screen.getByText(mockActivity.description)).toBeInTheDocument();
    expect(
      screen.getByText(`${mockActivity.city}, ${mockActivity.venue}`),
    ).toBeInTheDocument();
    expect(screen.getByText(mockActivity.category)).toBeInTheDocument();
  });

  test('calls deleteActivity when delete button is clicked', async () => {
    // Arrange
    const mockActivity = generateMockActivity();
    render(
      <MemoryRouter>
        <ActivityListItem activity={mockActivity} />
      </MemoryRouter>,
    );

    const deleteButton = screen.getByRole('button', { name: /delete/i });

    // Act
    fireEvent.click(deleteButton);

    // Assert
    await waitFor(() => {
      expect(deleteActivity).toHaveBeenCalledWith(mockActivity.id);
    });
  });

  test('displays loading state when delete button is clicked', async () => {
    // Arrange
    const mockActivity = generateMockActivity();
    mockStore.activityStore.loading = true;
    (useStore as jest.Mock).mockReturnValue(mockStore);

    render(
      <MemoryRouter>
        <ActivityListItem activity={mockActivity} />
      </MemoryRouter>,
    );

    const deleteButton = screen.getByRole('button', { name: /delete/i });

    // Act
    fireEvent.click(deleteButton);

    // Assert
    await waitFor(() => {
      expect(deleteButton).toHaveClass('loading');
    });
  });

  test('matches snapshot', () => {
    // Arrange & Act
    const { asFragment } = render(
      <MemoryRouter>
        <ActivityListItem activity={staticActivity} />
      </MemoryRouter>,
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});

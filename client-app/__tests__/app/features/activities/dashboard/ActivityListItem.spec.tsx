import { render, screen, within } from '@testing-library/react';
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
  date: faker.date.future().toISOString().split('T')[0], // Use only the date part
  description: faker.lorem.sentence(),
  category: faker.lorem.word(),
  city: faker.location.city(),
  venue: faker.location.streetAddress(),
});

// Static data for snapshot test
const staticActivity: Activity = {
  id: '1',
  title: 'Static Activity',
  date: '2024-07-28',
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
    expect(screen.getByText(mockActivity.description)).toBeInTheDocument();

    const dateElement = screen.getByText(new RegExp(mockActivity.date));
    expect(dateElement).toBeInTheDocument();

    const segment = dateElement.closest('div.ui.segment') as HTMLElement;
    expect(segment).not.toBeNull();
    if (segment) {
      const venueElement = within(segment).getByText(
        new RegExp(mockActivity.venue),
      );
      expect(venueElement).toBeInTheDocument();
    }
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

import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { Activity } from '../../../../../src/app/models/activity';
import { useStore } from '../../../../../src/app/stores/store';
import ActivityDetails from '../../../../../src/app/features/activities/details/ActivityDetails';

// Mock the useStore hook
jest.mock('../../../../../src/app/stores/store', () => ({
  useStore: jest.fn(),
}));

describe('ActivityDetails', () => {
  // Generate a mock activity using Faker.js
  const generateMockActivity = (): Activity => ({
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    date: faker.date.future().toISOString(),
    description: faker.lorem.sentence(),
    category: faker.lorem.word(),
    city: faker.location.city(),
    venue: faker.location.streetAddress(),
  });

  // Static mock activity for consistent snapshot tests
  const staticMockActivity: Activity = {
    id: '1',
    title: 'Static Title',
    date: '2024-06-12T00:00:00.000Z',
    description: 'This is a static description for testing.',
    category: 'static-category',
    city: 'Static City',
    venue: 'Static Venue',
  };

  const cancelSelectedActivity = jest.fn();
  const openForm = jest.fn();

  beforeEach(() => {
    (useStore as jest.Mock).mockReturnValue({
      activityStore: {
        selectedActivity: staticMockActivity,
        cancelSelectedActivity,
        openForm,
      },
    });
  });

  test('renders the ActivityDetails component', () => {
    // Arrange
    const mockActivity = generateMockActivity();
    (useStore as jest.Mock).mockReturnValue({
      activityStore: {
        selectedActivity: mockActivity,
        cancelSelectedActivity,
        openForm,
      },
    });
    render(<ActivityDetails />);

    // Act & Assert
    expect(screen.getByText(mockActivity.title)).toBeInTheDocument();
    expect(screen.getByText(mockActivity.date)).toBeInTheDocument();
    expect(screen.getByText(mockActivity.description)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Edit/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Cancel/i })).toBeInTheDocument();
  });

  test('displays the correct image for the activity category', () => {
    // Arrange
    const mockActivity = generateMockActivity();
    (useStore as jest.Mock).mockReturnValue({
      activityStore: {
        selectedActivity: mockActivity,
        cancelSelectedActivity,
        openForm,
      },
    });
    render(<ActivityDetails />);

    // Act & Assert
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute(
      'src',
      `/assets/categoryImages/${mockActivity.category}.jpg`,
    );
  });

  test('matches snapshot', () => {
    // Arrange
    const { asFragment } = render(<ActivityDetails />);

    // Act & Assert
    expect(asFragment()).toMatchSnapshot();
  });
});

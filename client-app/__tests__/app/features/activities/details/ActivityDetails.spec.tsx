import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import { Activity } from '../../../../../src/app/models/activity';
import { useStore } from '../../../../../src/app/stores/store';
import ActivityDetails from '../../../../../src/app/features/activities/details/ActivityDetails';

// Mock the useStore hook
jest.mock('../../../../../src/app/stores/store', () => ({
  useStore: jest.fn(),
}));

jest.mock('../../../../../src/app/layout/LoadingComponent', () => ({
  __esModule: true,
  default: () => <div>Loading app...</div>,
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
        loadActivity: jest.fn().mockResolvedValue(staticMockActivity),
        loadingInitial: false,
      },
    });
    jest.clearAllMocks();
  });

  test('renders the ActivityDetails component', async () => {
    // Arrange
    const mockActivity = generateMockActivity();
    (useStore as jest.Mock).mockReturnValue({
      activityStore: {
        selectedActivity: mockActivity,
        cancelSelectedActivity,
        openForm,
        loadActivity: jest.fn().mockResolvedValue(mockActivity),
        loadingInitial: false,
      },
    });

    // Act
    render(
      <MemoryRouter initialEntries={[`/activities/${mockActivity.id}`]}>
        <Routes>
          <Route path="/activities/:id" element={<ActivityDetails />} />
        </Routes>
      </MemoryRouter>,
    );

    // Assert
    await waitFor(() => {
      expect(screen.getByText(mockActivity.title)).toBeInTheDocument();
      expect(screen.getByText(mockActivity.description)).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /Manage Event/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /Join Activity/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /Cancel attendance/i }),
      ).toBeInTheDocument();
    });
  });

  test('displays the correct image for the activity category', async () => {
    // Arrange
    const mockActivity = generateMockActivity();
    (useStore as jest.Mock).mockReturnValue({
      activityStore: {
        selectedActivity: mockActivity,
        cancelSelectedActivity,
        openForm,
        loadActivity: jest.fn().mockResolvedValue(mockActivity),
        loadingInitial: false,
      },
    });

    // Act
    render(
      <MemoryRouter initialEntries={[`/activities/${mockActivity.id}`]}>
        <Routes>
          <Route path="/activities/:id" element={<ActivityDetails />} />
        </Routes>
      </MemoryRouter>,
    );

    // Assert
    await waitFor(() => {
      const imgElements = screen.getAllByRole('img');
      const categoryImage = imgElements.find((img) =>
        img
          .getAttribute('src')
          ?.includes(`/assets/categoryImages/${mockActivity.category}.jpg`),
      );
      expect(categoryImage).toBeInTheDocument();
    });
  });

  test('matches snapshot', async () => {
    // Arrange
    const { asFragment } = render(
      <MemoryRouter initialEntries={[`/activities/${staticMockActivity.id}`]}>
        <Routes>
          <Route path="/activities/:id" element={<ActivityDetails />} />
        </Routes>
      </MemoryRouter>,
    );

    // Assert
    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  test('renders loading component when no activity is selected', async () => {
    // Arrange
    (useStore as jest.Mock).mockReturnValue({
      activityStore: {
        selectedActivity: null,
        cancelSelectedActivity,
        openForm,
        loadActivity: jest.fn(),
        loadingInitial: true,
      },
    });

    // Act
    render(
      <MemoryRouter initialEntries={['/activities/1']}>
        <Routes>
          <Route path="/activities/:id" element={<ActivityDetails />} />
        </Routes>
      </MemoryRouter>,
    );

    // Assert
    await waitFor(() => {
      expect(screen.getByText('Loading app...')).toBeInTheDocument();
    });
  });
});

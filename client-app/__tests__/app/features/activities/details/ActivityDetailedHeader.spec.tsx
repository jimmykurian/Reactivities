import { render, screen } from '@testing-library/react';
import ActivityDetailedHeader, {
  Props,
} from '../../../../../src/app/features/activities/details/ActivityDetailedHeader';
import { faker } from '@faker-js/faker';
import { Activity } from '../../../../../src/app/models/activity';
import { MemoryRouter } from 'react-router-dom';

// Mocking observer from mobx-react-lite
jest.mock('mobx-react-lite', () => ({
  observer: (component: React.ComponentType) => component,
}));

describe('ActivityDetailedHeader', () => {
  // Static mock activity for consistent snapshot tests
  const staticMockActivity: Activity = {
    id: '1',
    title: 'Static Title',
    description: 'This is a static description for testing.',
    date: '2024-06-12T00:00:00.000Z',
    city: 'Static City',
    venue: 'Static Venue',
    category: 'static-category',
  };

  const generateMockActivity = (): Activity => ({
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    date: faker.date.future().toISOString(),
    city: faker.location.city(),
    venue: faker.location.streetAddress(),
    category: faker.lorem.word(),
  });

  const renderComponent = (props: Props) => {
    render(
      <MemoryRouter>
        <ActivityDetailedHeader {...props} />
      </MemoryRouter>,
    );
  };

  test('renders ActivityDetailedHeader component', () => {
    // Arrange
    const mockActivity = generateMockActivity();

    // Act
    renderComponent({ activity: mockActivity });

    // Assert
    expect(screen.getByText(mockActivity.title)).toBeInTheDocument();
    expect(screen.getByText(mockActivity.date)).toBeInTheDocument();
    expect(screen.getByText(/Hosted by/)).toBeInTheDocument();
    expect(screen.getByText(/Join Activity/i)).toBeInTheDocument();
    expect(screen.getByText(/Cancel attendance/i)).toBeInTheDocument();
    expect(screen.getByText(/Manage Event/i)).toBeInTheDocument();
  });

  test('displays the correct image for the activity category', () => {
    // Arrange
    const mockActivity = generateMockActivity();

    // Act
    renderComponent({ activity: mockActivity });

    // Assert
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute(
      'src',
      `/assets/categoryImages/${mockActivity.category}.jpg`,
    );
  });

  test('matches snapshot', () => {
    // Arrange & Act
    const { asFragment } = render(
      <MemoryRouter>
        <ActivityDetailedHeader activity={staticMockActivity} />,
      </MemoryRouter>,
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});

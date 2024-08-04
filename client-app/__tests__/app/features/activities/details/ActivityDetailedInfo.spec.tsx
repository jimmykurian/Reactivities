import { render, screen } from '@testing-library/react';
import ActivityDetailedInfo, {
  Props,
} from '../../../../../src/app/features/activities/details/ActivityDetailedInfo';
import { faker } from '@faker-js/faker';
import { Activity } from '../../../../../src/app/models/activity';

// Mocking observer from mobx-react-lite
jest.mock('mobx-react-lite', () => ({
  observer: (component: React.ComponentType) => component,
}));

describe('ActivityDetailedInfo', () => {
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
    render(<ActivityDetailedInfo {...props} />);
  };

  test('renders ActivityDetailedInfo component', () => {
    // Arrange
    const mockActivity = generateMockActivity();

    // Act
    renderComponent({ activity: mockActivity });

    // Assert
    expect(screen.getByText(mockActivity.description)).toBeInTheDocument();
    expect(screen.getByText(mockActivity.date)).toBeInTheDocument();
    expect(
      screen.getByText(`${mockActivity.venue}, ${mockActivity.city}`),
    ).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    // Arrange & Act
    const { asFragment } = render(
      <ActivityDetailedInfo activity={staticMockActivity} />,
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});

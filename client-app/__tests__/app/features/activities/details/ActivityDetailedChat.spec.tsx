import { render, screen, fireEvent } from '@testing-library/react';
import ActivityDetailedChat from '../../../../../src/app/features/activities/details/ActivityDetailedChat';

// Mocking observer from mobx-react-lite
jest.mock('mobx-react-lite', () => ({
  observer: (component: React.ComponentType) => component,
}));

describe('ActivityDetailedChat', () => {
  // Static mock data for snapshot test
  const staticComments = [
    {
      avatar: '/assets/user.png',
      author: 'Matt',
      metadata: 'Today at 5:42PM',
      text: 'How artistic!',
    },
    {
      avatar: '/assets/user.png',
      author: 'Joe Henderson',
      metadata: '5 days ago',
      text: 'Dude, this is awesome. Thanks so much',
    },
  ];

  test('renders ActivityDetailedChat component', () => {
    // Arrange & Act
    render(<ActivityDetailedChat />);

    // Assert
    staticComments.forEach((comment) => {
      expect(screen.getByText(comment.author)).toBeInTheDocument();
      expect(screen.getByText(comment.metadata)).toBeInTheDocument();
      expect(screen.getByText(comment.text)).toBeInTheDocument();
    });
    expect(screen.getByText('Chat about this event')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Add Reply/i }),
    ).toBeInTheDocument();
  });

  test('allows user to type in the reply form', () => {
    // Arrange
    render(<ActivityDetailedChat />);
    const textarea = screen.getByRole('textbox');

    // Act
    fireEvent.change(textarea, { target: { value: 'New reply' } });

    // Assert
    expect(textarea).toHaveValue('New reply');
  });

  test('matches snapshot', () => {
    // Arrange & Act
    const { asFragment } = render(<ActivityDetailedChat />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});

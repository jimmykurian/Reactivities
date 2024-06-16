import { render, screen, fireEvent } from '@testing-library/react';
import ActivityForm from '../../../../../src/app/features/activities/form/ActivityForm';
import { Activity } from '../../../../../src/app/models/activity';

// Static mock activity for consistent tests
const staticMockActivity: Activity = {
  id: '1',
  title: 'Static Title',
  date: '2024-06-12T00:00:00.000Z',
  description: 'This is a static description for testing.',
  category: 'static-category',
  city: 'Static City',
  venue: 'Static Venue',
};

describe('ActivityForm', () => {
  const closeForm = jest.fn();
  const createOrEdit = jest.fn();

  test('renders the ActivityForm component', () => {
    // Arrange
    render(
      <ActivityForm
        activity={staticMockActivity}
        closeForm={closeForm}
        createOrEdit={createOrEdit}
      />,
    );

    // Act & Assert
    expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Description')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Category')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Date')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('City')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Venue')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Cancel/i })).toBeInTheDocument();
  });

  test('calls submit handler when form is submitted', () => {
    // Arrange
    render(
      <ActivityForm
        activity={staticMockActivity}
        closeForm={closeForm}
        createOrEdit={createOrEdit}
      />,
    );

    // Act
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    // Assert
    expect(createOrEdit).toHaveBeenCalledTimes(1);
  });

  test('matches snapshot', () => {
    // Arrange
    const { asFragment } = render(
      <ActivityForm
        activity={staticMockActivity}
        closeForm={closeForm}
        createOrEdit={createOrEdit}
      />,
    );

    // Act & Assert
    expect(asFragment()).toMatchSnapshot();
  });
});

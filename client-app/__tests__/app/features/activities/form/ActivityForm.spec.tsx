import { render, screen, fireEvent } from '@testing-library/react';
import { useStore } from '../../../../../src/app/stores/store';
import ActivityForm from '../../../../../src/app/features/activities/form/ActivityForm';

// Mock the useStore hook
jest.mock('../../../../../src/app/stores/store', () => ({
  useStore: jest.fn(),
}));

describe('ActivityForm', () => {
  const createActivity = jest.fn();
  const updateActivity = jest.fn();
  const closeForm = jest.fn();
  const loading = false;

  beforeEach(() => {
    (useStore as jest.Mock).mockReturnValue({
      activityStore: {
        selectedActivity: null,
        createActivity,
        updateActivity,
        closeForm,
        loading,
      },
    });
  });

  test('renders the ActivityForm component', () => {
    // Arrange
    render(<ActivityForm />);

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
    render(<ActivityForm />);

    // Act
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    // Assert
    expect(createActivity).toHaveBeenCalledTimes(1);
  });

  test('matches snapshot', () => {
    // Arrange
    const { asFragment } = render(<ActivityForm />);

    // Act & Assert
    expect(asFragment()).toMatchSnapshot();
  });
});

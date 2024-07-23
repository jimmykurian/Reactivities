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
    createActivity.mockClear();
    updateActivity.mockClear();
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

  test('updates activity state on input change', () => {
    // Arrange
    render(<ActivityForm />);

    // Act
    fireEvent.change(screen.getByPlaceholderText('Title'), {
      target: { value: 'New Title' },
    });

    // Assert
    expect(
      (screen.getByPlaceholderText('Title') as HTMLInputElement).value,
    ).toBe('New Title');
  });

  test('calls createActivity with new activity when form is submitted', () => {
    // Arrange
    render(<ActivityForm />);

    // Act
    fireEvent.change(screen.getByPlaceholderText('Title'), {
      target: { value: 'New Title' },
    });
    fireEvent.change(screen.getByPlaceholderText('Description'), {
      target: { value: 'New Description' },
    });
    fireEvent.change(screen.getByPlaceholderText('Category'), {
      target: { value: 'New Category' },
    });
    fireEvent.change(screen.getByPlaceholderText('Date'), {
      target: { value: '2024-01-01' },
    });
    fireEvent.change(screen.getByPlaceholderText('City'), {
      target: { value: 'New City' },
    });
    fireEvent.change(screen.getByPlaceholderText('Venue'), {
      target: { value: 'New Venue' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    // Assert
    expect(createActivity).toHaveBeenCalledWith({
      id: '',
      title: 'New Title',
      date: '2024-01-01',
      description: 'New Description',
      category: 'New Category',
      city: 'New City',
      venue: 'New Venue',
    });
  });

  test('does not call createActivity or updateActivity if form is not submitted', () => {
    // Arrange
    render(<ActivityForm />);

    // Act
    fireEvent.change(screen.getByPlaceholderText('Title'), {
      target: { value: 'New Title' },
    });

    // Assert
    expect(createActivity).not.toHaveBeenCalled();
    expect(updateActivity).not.toHaveBeenCalled();
  });
});

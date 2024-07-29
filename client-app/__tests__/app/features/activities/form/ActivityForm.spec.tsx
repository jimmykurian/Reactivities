import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useStore } from '../../../../../src/app/stores/store';
import ActivityForm from '../../../../../src/app/features/activities/form/ActivityForm';

// Mock the useStore hook
jest.mock('../../../../../src/app/stores/store', () => ({
  useStore: jest.fn(),
}));

describe('ActivityForm', () => {
  const createActivity = jest.fn().mockResolvedValue({});
  const updateActivity = jest.fn().mockResolvedValue({});
  const loading = false;
  const loadActivity = jest.fn().mockResolvedValue({
    id: '1',
    title: 'Existing Activity',
    date: '2024-06-12',
    description: 'Existing Description',
    category: 'Existing Category',
    city: 'Existing City',
    venue: 'Existing Venue',
  });

  beforeEach(() => {
    (useStore as jest.Mock).mockReturnValue({
      activityStore: {
        selectedActivity: null,
        createActivity,
        updateActivity,
        loadActivity,
        loading,
        loadingInitial: false,
      },
    });
    createActivity.mockClear();
    updateActivity.mockClear();
    loadActivity.mockClear();
  });

  test('renders the ActivityForm component', async () => {
    // Arrange
    await act(async () => {
      render(
        <MemoryRouter>
          <ActivityForm />
        </MemoryRouter>,
      );
    });

    // Assert
    expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Description')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Category')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Date')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('City')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Venue')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Cancel/i })).toBeInTheDocument();
  });

  test('calls submit handler when form is submitted', async () => {
    // Arrange
    await act(async () => {
      render(
        <MemoryRouter>
          <ActivityForm />
        </MemoryRouter>,
      );
    });

    // Act
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    });

    // Assert
    expect(createActivity).toHaveBeenCalledTimes(1);
  });

  test('matches snapshot', async () => {
    // Arrange
    let fragment: (() => DocumentFragment) | undefined;
    await act(async () => {
      const { asFragment } = render(
        <MemoryRouter>
          <ActivityForm />
        </MemoryRouter>,
      );
      fragment = asFragment;
    });

    // Assert
    expect(fragment).toBeDefined();
    expect(fragment!()).toMatchSnapshot();
  });

  test('updates activity state on input change', async () => {
    // Arrange
    await act(async () => {
      render(
        <MemoryRouter>
          <ActivityForm />
        </MemoryRouter>,
      );
    });

    // Act
    fireEvent.change(screen.getByPlaceholderText('Title'), {
      target: { value: 'New Title' },
    });

    // Assert
    expect(
      (screen.getByPlaceholderText('Title') as HTMLInputElement).value,
    ).toBe('New Title');
  });

  test('calls createActivity with new activity when form is submitted', async () => {
    // Arrange
    await act(async () => {
      render(
        <MemoryRouter>
          <ActivityForm />
        </MemoryRouter>,
      );
    });

    // Act
    await act(async () => {
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
    });

    // Assert
    expect(createActivity).toHaveBeenCalledWith({
      id: expect.any(String),
      title: 'New Title',
      date: '2024-01-01',
      description: 'New Description',
      category: 'New Category',
      city: 'New City',
      venue: 'New Venue',
    });
  });

  test('does not call createActivity or updateActivity if form is not submitted', async () => {
    // Arrange
    await act(async () => {
      render(
        <MemoryRouter>
          <ActivityForm />
        </MemoryRouter>,
      );
    });

    // Act
    fireEvent.change(screen.getByPlaceholderText('Title'), {
      target: { value: 'New Title' },
    });

    // Assert
    expect(createActivity).not.toHaveBeenCalled();
    expect(updateActivity).not.toHaveBeenCalled();
  });
});

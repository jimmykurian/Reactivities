import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useStore } from '../../../../../src/app/stores/store';
import ActivityForm from '../../../../../src/app/features/activities/form/ActivityForm';

// Mock the useStore hook
jest.mock('../../../../../src/app/stores/store', () => ({
  useStore: jest.fn(),
}));

// Mock console.log to verify form submission
globalThis.console = {
  log: jest.fn(),
  assert: jest.fn(),
  clear: jest.fn(),
  count: jest.fn(),
  countReset: jest.fn(),
  debug: jest.fn(),
  dir: jest.fn(),
  dirxml: jest.fn(),
  error: jest.fn(),
  group: jest.fn(),
  groupCollapsed: jest.fn(),
  groupEnd: jest.fn(),
  info: jest.fn(),
  table: jest.fn(),
  time: jest.fn(),
  timeEnd: jest.fn(),
  timeLog: jest.fn(),
  timeStamp: jest.fn(),
  trace: jest.fn(),
  warn: jest.fn(),
} as Console;

describe('ActivityForm', () => {
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
        loadActivity,
        loading,
        loadingInitial: false,
      },
    });
    loadActivity.mockClear();
    (console.log as jest.Mock).mockClear();
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

  test('calls console.log with form values when form is submitted', async () => {
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
    expect(console.log).toHaveBeenCalledWith({
      id: '',
      title: 'New Title',
      date: '2024-01-01',
      description: 'New Description',
      category: 'New Category',
      city: 'New City',
      venue: 'New Venue',
    });
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

  test('updates form fields on input change', async () => {
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
      target: { value: 'Updated Title' },
    });

    // Assert
    expect(
      (screen.getByPlaceholderText('Title') as HTMLInputElement).value,
    ).toBe('Updated Title');
  });

  test('does not call any store methods if form is not submitted', async () => {
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
    expect(loadActivity).not.toHaveBeenCalledTimes(1);
    expect(console.log).not.toHaveBeenCalled();
  });
});

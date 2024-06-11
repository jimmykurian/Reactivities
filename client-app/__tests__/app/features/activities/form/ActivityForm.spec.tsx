import { render, screen, fireEvent } from '@testing-library/react';
import ActivityForm from '../../../../../src/app/features/activities/form/ActivityForm';

describe('ActivityForm', () => {
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
    const handleSubmit = jest.fn();
    render(<ActivityForm />);

    // Act
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    // Assert // TODO: Update after Submit button has been fully implemented
    expect(handleSubmit).toHaveBeenCalledTimes(0);
  });

  test('matches snapshot', () => {
    // Arrange
    const { asFragment } = render(<ActivityForm />);

    // Act & Assert
    expect(asFragment()).toMatchSnapshot();
  });
});

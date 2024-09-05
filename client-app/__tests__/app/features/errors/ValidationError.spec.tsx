import { render, screen } from '@testing-library/react';
import ValidationError from '../../../../src/app/features/errors/ValidationError';
import { faker } from '@faker-js/faker';

describe('ValidationError Component', () => {
  it('renders without errors if no errors are provided', () => {
    // Arrange
    const errors: string[] = [];

    // Act
    render(<ValidationError errors={errors} />);

    // Assert
    const list = screen.queryByRole('list');
    expect(list).toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  it('renders a list of error messages', () => {
    // Arrange
    const errors = [
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
    ];

    // Act
    render(<ValidationError errors={errors} />);

    // Assert
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(errors.length);
    listItems.forEach((item, index) => {
      expect(item).toHaveTextContent(errors[index]);
    });
  });

  it('renders Semantic UI Message component with error class', () => {
    // Arrange
    const errors = [faker.lorem.sentence()];

    // Act
    render(<ValidationError errors={errors} />);

    // Assert
    const messageComponent = screen.getByText(errors[0]).closest('.ui.message');
    expect(messageComponent).toHaveClass('error');
  });

  it('matches the snapshot', () => {
    // Arrange
    const errors = [
      'Email is required',
      'Password must be at least 6 characters',
    ];

    // Act
    const { asFragment } = render(<ValidationError errors={errors} />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});

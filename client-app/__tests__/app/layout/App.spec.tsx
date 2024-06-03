import { render, screen } from '@testing-library/react';
import App from '../../../src/app/layout/App';

describe('App', () => {
  test('renders Reactivities heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Reactivities/i);
    expect(headingElement).toBeInTheDocument();
  });
});

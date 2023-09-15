import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';
import '@testing-library/jest-dom';

describe('contact component render', () => {
  it('should render the contact component with all details', () => {
    render(<Contact />);

    const heading: HTMLHeadingElement[] = screen.getAllByRole('heading');

    expect(heading.length).toBe(3);
  });
});

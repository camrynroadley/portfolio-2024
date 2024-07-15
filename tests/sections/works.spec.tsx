import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Works from '../../app/sections/works/works';

// Mocking data to simulate the data.json structure
jest.mock('../../app/data/data.json', () => [
  {
    type: 'card',
    heading: 'Test Card 1',
    subheading: 'Subheading 1',
    date: 'June 2023',
    description: 'Description 1',
    buttons: [{ label: 'Button 1', link: 'https://example.com/button1' }],
  },
  {
    type: 'card',
    heading: 'Test Card 2',
    subheading: 'Subheading 2',
    date: 'July 2023',
    description: 'Description 2',
    buttons: [{ label: 'Button 2', link: 'https://example.com/button2' }],
  },
  {
    type: 'contact',
  },
]);

jest.mock("@studio-freight/lenis", () => jest.fn());

describe('Works Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Works />);

    // Check if each card or contact component is rendered
    expect(getByText('Test Card 1')).toBeInTheDocument();
    expect(getByText('Test Card 2')).toBeInTheDocument();
    expect(getByText('Get in touch.')).toBeInTheDocument();

    // Check that the correct number of items from data.json are rendered
    expect(document.querySelectorAll('[data-testid^="card-"]').length).toBe(3);
  });
});
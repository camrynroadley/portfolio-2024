import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../../app/sections/hero/hero';

describe('Hero Component', () => {
  it('renders correctly', () => {
    const mockOnButtonClick = jest.fn(); // Mock function for button click

    const { getByText } = render(<Hero onButtonClick={mockOnButtonClick} />);
    expect(getByText('Camryn')).toBeInTheDocument();
    expect(getByText('Roadley')).toBeInTheDocument();
    expect(getByText('Recent Works')).toBeInTheDocument();

    // Simulate button click and check that function is called
    const button = getByText('Recent Works');
    button.click();
    expect(mockOnButtonClick).toHaveBeenCalled();
  });
});
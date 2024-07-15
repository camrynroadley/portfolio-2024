/* eslint-env jest */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Card from '../../app/components/card/card';

describe('Card Component', () => {
  const mockProps = {
    index: 1,
    type: 'type1',
    heading: 'Test Heading',
    subheading: 'Test Subheading',
    date: 'December 2023',
    description: 'Regular text bold medium text',
    buttons: [
      { label: 'Button 1', link: 'https://example.com/button1' },
      { label: 'Button 2', link: 'https://example.com/button2' },
    ],
  };

  it('renders with all provided props', () => {
    const { getByText, getAllByRole } = render(<Card {...mockProps} />);
    expect(getByText('Test Subheading ⚬')).toBeInTheDocument();
    expect(getByText('December 2023')).toBeInTheDocument();
    expect(getByText(mockProps.heading)).toBeInTheDocument();
    expect(getByText('Regular text')).toBeInTheDocument();
    expect(getByText('medium text')).toBeInTheDocument();
    expect(getAllByRole('button')).toHaveLength(2);
  });

  it('renders without description', () => {
    const propsWithoutDescription = { ...mockProps, description: undefined };
    const { queryByTestId } = render(<Card {...propsWithoutDescription} />);
    // Check that the description section is not rendered
    expect(queryByTestId('description')).not.toBeInTheDocument();
  });

  it('renders correctly with empty buttons array', () => {
    const propsWithoutButtons = { ...mockProps, buttons: [] };
    const { queryByRole } = render(<Card {...propsWithoutButtons} />);
    // Check that no buttons are rendered
    expect(queryByRole('button')).not.toBeInTheDocument();
  });
});
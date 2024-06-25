// Home.test.js

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom for custom matchers
import Home from './Home';

// Mock the CSS file
jest.mock('./Home.scss', () => ({}));

describe('Home Component', () => {
  it('renders the button and input elements', () => {
    render(<Home />);
    
    // Check if the button with text "Test" is rendered
    const buttonElement = screen.getByText('Test');
    expect(buttonElement).toBeInTheDocument();
    
    // Check if the input element is rendered
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });
});

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm component', () => {
    // First Test
    it('renders', () => {
        render(<ContactForm />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('Contact me is displayed', () => {
    it('Contact me is in <h1>', () => {
        // Arrange
        const { getByTestId } = render(<ContactForm />);
        // Assert  
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    })
}) 

describe('Submit button is displayed', () => {
    it('Submit is display on button', () => {
        // Arrange
        const { getByTestId } = render(<ContactForm />);
        // Assert  
        expect(getByTestId('button')).toHaveTextContent('Submit')
    })
}) 
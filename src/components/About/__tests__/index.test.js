import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

const categories = [
    {
        name: "portraits",
        description: "Portraits of people in my life"
    }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();


afterEach(cleanup);
describe('About component', () => {
    // first test
    it('renders', () => {
        render(<About
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        />)
    })

    // second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        />);
        expect(asFragment()).toMatchSnapshot();
    })
})
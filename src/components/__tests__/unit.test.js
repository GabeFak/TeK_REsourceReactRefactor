import {render, screen, cleanup } from '@testing-library/react'
import Header from '../layout/Header'

// test('test', () => {
//     expect(true).toBe(true);
// })

test('Should render Header', () => {
    render(<Header/>);

    const headerEl = screen.getByTestId('header-1');

    expect(headerEl).toBeInTheDocument();
})

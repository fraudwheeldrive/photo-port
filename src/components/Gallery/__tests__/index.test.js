import React from 'react'
import { render, cleanup } from '@testing-library/react'
import "@testing-library/jest-dom/extended-expect"
import Gallery from '..'

const portrait = { name: "portraits", description: "Portraits of people in my life "},

afterEach(cleanup)

describe('gallery is rendering', () => {

    it('renders', () => {
        render(<Gallery currentCategory={portrait} />);
    });
})

it('matches snapshot', () => {
    const { asFragment } = render(<Gallery currentCategory={portrait} />)
    expect(asFragment()).toMatchSnapshot()
})

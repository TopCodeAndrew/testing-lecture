import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Header from '../components/Header'

describe('Header tests', () => {
  it('Does not show dropdown when mounted', () => {
    const tools = render(<Header />) // => an object with testing tools
    const { queryByTestId } = tools // tools.queryByTestId
    // const {queryByTestId} = render(<Header/>)

    const dropdown = queryByTestId('dropdown')
    expect(dropdown).not.toBeTruthy()
  })

  it('Shows dropdown when hamburger is clicked', () => {
    const { container, getByTestId } = render(<Header />)

    const hamburger = getByTestId('hamburger-button')

    fireEvent.click(hamburger)

    const menu = getByTestId('dropdown')

    expect(menu.textContent).toContain('Dropdown menu')
  })
})

import React from 'react'
import { render, screen, fireEvent } from './test-utils'
import { Header } from '../../components'

describe('Header', () => {
  it('renders the logo that works as a link to homepage', () => {
    const { container } = render(<Header />)
    const logoWrapper = container.getElementsByClassName('logo-wrapper')[0]
    expect(logoWrapper).toBeInTheDocument()
    expect(logoWrapper.getAttribute('href')).toBe('/')
  })

  it('renders the cart preview', () => {
    render(<Header />)
    expect(screen.getByText(/Cart is Empty/)).toBeInTheDocument()
  })

  it('opens the cart drawer when the cart preview is clicked', () => {
    const { container } = render(<Header />)
    fireEvent.click(screen.getByText(/Cart is Empty/))
    const cartDrawer = container.getElementsByClassName('drawer--open')[0]
    expect(cartDrawer).toBeInTheDocument()
  })
})

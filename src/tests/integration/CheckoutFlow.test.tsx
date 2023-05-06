import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { App } from '../../App'

async function expectRendersListOfWorkshops() {
  expect(screen.getByText(/Workshops/)).toBeInTheDocument()
  await waitFor(
    () => {
      expect(screen.getByText(/Displayed/)).toBeInTheDocument()
    },
    { timeout: 5000 }
  )
}

async function expectAddsWorkshopToCart() {
  await expectRendersListOfWorkshops()
  fireEvent.click(screen.getAllByTestId('add-to-cart-button')[0])
  expect(await screen.findByText(/1 Workshop in Cart/)).toBeInTheDocument()
}

async function expectOpensCart(container: HTMLElement) {
  await expectAddsWorkshopToCart()
  const cartDrawer = container.getElementsByClassName('drawer--open')[0]
  expect(cartDrawer).toBeInTheDocument()
}

async function expectOpensCheckoutModal(container: HTMLElement) {
  await expectOpensCart(container)
  fireEvent.click(screen.getAllByTestId('checkout-button')[0])
  const modalWrapper = container.getElementsByClassName(
    'modal-wrapper--visible'
  )[0]
  expect(modalWrapper).toBeInTheDocument()
  expect(
    modalWrapper.getElementsByClassName('modal-header__title')[0]
  ).toHaveTextContent(/Checkout/)
}

async function expectDisplaysValidationErrors(container: HTMLElement) {
  await expectOpensCheckoutModal(container)
  fireEvent.input(screen.getByLabelText('First Name'), {
    target: { value: 'John' },
  })
  fireEvent.input(screen.getByLabelText('Last Name'), {
    target: { value: 'Doe' },
  })
  fireEvent.input(screen.getByLabelText('Email Address'), {
    target: { value: 'john.doe@email.com' },
  })
  fireEvent.input(screen.getByLabelText('Date of Birth'), {
    target: { value: '1990-01-01' },
  })
  fireEvent.input(screen.getByLabelText('Address'), {
    target: { value: '123 Main St' },
  })
  fireEvent.click(screen.getAllByTestId('submit-order')[0])
  expect(
    await screen.findByText(/You need to accept the terms and conditions/)
  ).toBeInTheDocument()
}

describe('CheckoutFlow', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = render(<App />).container
  })

  it('renders list of workshops', async () => {
    await expectRendersListOfWorkshops()
  })

  it('adds a workshop to the cart', async () => {
    await expectAddsWorkshopToCart()
  })

  it('opens the cart drawer when the workshop is added', async () => {
    await expectOpensCart(container)
  })

  it('opens the checkout modal when the checkout button is clicked', async () => {
    await expectOpensCheckoutModal(container)
  })

  it('displays validation errors when the form is submitted with invalid data', async () => {
    await expectDisplaysValidationErrors(container)
  })
})

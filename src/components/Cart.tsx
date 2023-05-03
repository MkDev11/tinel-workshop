import React, { useState } from 'react'
import { CartIconWrapper } from './CartIconWrapper'
import { Drawer } from './Drawer'
import { CloseIcon } from '../util'

export function Cart() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [cartCount, setCartCount] = useState(2) //TODO: remove this mock data

  // TODO: drawer opens on change of cartCount or on click of cart icon

  return (
    <>
      <div className="header-cart" onClick={() => setIsDrawerOpen(true)}>
        <CartIconWrapper cartCount={cartCount} />
        <span className="header-cart__text">
          {cartCount === 0
            ? 'Cart is Empty'
            : cartCount === 1
            ? '1 Workshop in Cart'
            : `${cartCount} Workshops in Cart`}
        </span>
      </div>
      <Drawer isOpen={isDrawerOpen}>
        <div className="cart-drawer-header">
          <div className="cart-drawer-header-overview">
            <CartIconWrapper cartCount={cartCount} />
            <span className="cart-drawer-header-overview__text">
              {cartCount === 0
                ? 'Empty Cart'
                : cartCount === 1
                ? '1 Workshop'
                : `${cartCount} Workshops`}
            </span>
          </div>
          <CloseIcon
            className="cart-drawer-header-close-icon"
            onClick={() => setIsDrawerOpen(false)}
          />
        </div>
        <ul className="cart-drawer-items"></ul>
        <div className="cart-drawer-checkout"></div>
      </Drawer>
    </>
  )
}

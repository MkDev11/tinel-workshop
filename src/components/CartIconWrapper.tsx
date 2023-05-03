import React from 'react'
import { CartIcon } from '../util'

type Props = {
  cartCount: number
}

export function CartIconWrapper(props: Props) {
  return (
    <div className="cart-icon-wrapper">
      <CartIcon className="cart-icon" />
      {props.cartCount > 0 && <span className="nonempty-dot"></span>}
    </div>
  )
}

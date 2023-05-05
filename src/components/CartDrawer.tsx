import React from 'react'
import { WorkshopOrder, WorkshopShort } from '../api'
import {
  CloseIcon,
  DEFAULT_IMAGE_URL,
  EmptyIcon,
  PriceFormatter,
  TrashIcon,
} from '../util'
import { Button } from './Button'
import { CartIconWrapper } from './CartIconWrapper'
import { Drawer } from './Drawer'
import { NumberInput } from './NumberInput'

type WorkshopInCart = WorkshopShort & { quantity: number }

type Props = {
  isDrawerOpen: boolean
  products: WorkshopOrder[]
  total: number
  onCloseDrawer: () => void
  onChangeWorkshopQuantity: (workshop: WorkshopInCart, quantity: number) => void
  onRemoveWorkshop: (workshopId: number) => void
  onOpenCheckoutModal: () => void
}

export function CartDrawer(props: Props) {
  const cartCount = props.products.length

  return (
    <Drawer isOpen={props.isDrawerOpen}>
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
          onClick={props.onCloseDrawer}
        />
      </div>
      {cartCount === 0 ? (
        <EmptyIcon className="cart-drawer-empty-icon" />
      ) : (
        <>
          <ul className="cart-drawer-list">
            {props.products.map((workshop) => (
              <li
                className="cart-workshop-card"
                title={workshop.title}
                key={workshop.id}
              >
                <img
                  src={workshop.imageUrl || DEFAULT_IMAGE_URL}
                  alt={workshop.title}
                  loading="lazy"
                  className="cart-workshop-card__image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = DEFAULT_IMAGE_URL
                  }}
                />
                <div className="cart-workshop-card__text-content">
                  <div className="cart-workshop-card-title truncate">
                    {workshop.title}
                  </div>
                  <TrashIcon
                    className="cart-workshop-card-delete-icon"
                    onClick={() => props.onRemoveWorkshop(workshop.id)}
                  />
                  <div className="cart-workshop-card-quantity-and-price">
                    <NumberInput
                      className="cart-workshop-card-quantity"
                      value={workshop.quantity}
                      onChange={(quantity) =>
                        props.onChangeWorkshopQuantity(workshop, quantity)
                      }
                    />
                    <div className="cart-workshop-card-price">
                      <span className="cart-workshop-card-price__amount">
                        {PriceFormatter.DEFAULT.format(workshop.price)}
                      </span>
                      <span className="cart-workshop-card-price__currency">
                        EUR
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-drawer-footer">
            <div className="cart-drawer-subtotal">
              <span className="cart-drawer-subtotal__text">Subtotal</span>
              <span className="cart-drawer-subtotal__price">
                <span className="cart-drawer-subtotal-price__amount">
                  {PriceFormatter.DEFAULT.format(props.total)}
                </span>
                <span className="cart-drawer-subtotal-price__currency">
                  EUR
                </span>
              </span>
            </div>
            <Button
              variant="blue"
              className="cart-drawer-checkout-button"
              onClick={props.onOpenCheckoutModal}
            >
              Checkout
            </Button>
          </div>
        </>
      )}
    </Drawer>
  )
}

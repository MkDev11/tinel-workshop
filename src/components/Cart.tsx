import React, { useEffect, useState } from 'react'
import { WorkshopShort } from '../api'
import {
  removeWorkshop,
  setWorkshopQuantity,
  useStoreDispatch,
  useStoreSelector,
} from '../store'
import { useDidMount } from '../hooks'
import {
  CloseIcon,
  DEFAULT_IMAGE_URL,
  EmptyIcon,
  PriceFormatter,
  TrashIcon,
} from '../util'
import { CartIconWrapper } from './CartIconWrapper'
import { Drawer } from './Drawer'
import { NumberInput } from './NumberInput'
import { Button } from './Button'
import classNames from 'classnames'
import { Modal } from './Modal'
import { CheckoutModal } from './CheckoutModal'

export function Cart() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isCheckoutModalVisible, setIsCheckoutModalVisible] = useState(false)
  const [isCheckoutSuccessModalVisible, setIsCheckoutSuccessModalVisible] =
    useState(false)

  function handleOpenDrawer() {
    setIsDrawerOpen(true)
    document.body.classList.add('drawer-open')
  }

  function handleCloseDrawer() {
    setIsDrawerOpen(false)
    document.body.classList.remove('drawer-open')
  }

  function handleOpenCheckoutModal() {
    handleCloseDrawer()
    setIsCheckoutModalVisible(true)
    document.body.classList.add('modal-open')
  }

  function handleCloseCheckoutModal() {
    setIsCheckoutModalVisible(false)
    document.body.classList.remove('modal-open')
  }

  function handleOpenCheckoutSuccessModal() {
    handleCloseCheckoutModal()
    setIsCheckoutSuccessModalVisible(true)
    document.body.classList.add('modal-open')
  }

  function handleCloseCheckoutSuccessModal() {
    setIsCheckoutSuccessModalVisible(false)
    document.body.classList.remove('modal-open')
    // TODO: redirect to home
  }

  const { didMount } = useDidMount()
  const dispatch = useStoreDispatch()
  const { products, total } = useStoreSelector((state) => state.cart)

  function handleChangeWorkshopQuantity(
    workshop: WorkshopShort,
    quantity: number
  ) {
    dispatch(setWorkshopQuantity({ ...workshop, quantity }))
  }

  function handleRemoveWorkshop(workshopId: number) {
    dispatch(removeWorkshop(workshopId))
  }

  useEffect(() => {
    if (didMount) {
      handleOpenDrawer()
    }
  }, [total, didMount])

  const cartCount = products.length

  return (
    <>
      <div
        className={classNames('header-cart', {
          'header-cart--nonempty': cartCount > 0,
        })}
        onClick={cartCount === 0 ? undefined : handleOpenDrawer}
      >
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
            onClick={handleCloseDrawer}
          />
        </div>
        {cartCount === 0 ? (
          <EmptyIcon className="cart-drawer-empty-icon" />
        ) : (
          <div className="cart-drawer-body">
            <ul className="cart-drawer-list">
              {products.map((workshop) => (
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
                      onClick={() => handleRemoveWorkshop(workshop.id)}
                    />
                    <div className="cart-workshop-card-action-row">
                      <NumberInput
                        className="cart-workshop-card-quantity"
                        value={workshop.quantity}
                        onChange={(quantity) =>
                          handleChangeWorkshopQuantity(workshop, quantity)
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
                    {PriceFormatter.DEFAULT.format(total)}
                  </span>
                  <span className="cart-drawer-subtotal-price__currency">
                    EUR
                  </span>
                </span>
              </div>
              <Button
                variant="blue"
                className="cart-drawer-checkout-button"
                onClick={handleOpenCheckoutModal}
              >
                Checkout
              </Button>
            </div>
          </div>
        )}
      </Drawer>
      <CheckoutModal
        isModalOpen={isCheckoutModalVisible}
        onCloseModal={handleCloseCheckoutModal}
        onCheckout={handleOpenCheckoutSuccessModal} //TODO: should be handleCheckout
      />
    </>
  )
}

import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { WorkshopShort } from '../api'
import { useDidMount } from '../hooks'
import {
  removeWorkshop,
  setWorkshopQuantity,
  useStoreDispatch,
  useStoreSelector,
} from '../store'
import { CartDrawer } from './CartDrawer'
import { CartIconWrapper } from './CartIconWrapper'
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
      <CartDrawer
        isDrawerOpen={isDrawerOpen}
        cartCount={cartCount}
        products={products}
        total={total}
        onCloseDrawer={handleCloseDrawer}
        onChangeWorkshopQuantity={handleChangeWorkshopQuantity}
        onRemoveWorkshop={handleRemoveWorkshop}
        onOpenCheckoutModal={handleOpenCheckoutModal}
      />
      <CheckoutModal
        isModalOpen={isCheckoutModalVisible}
        onCloseModal={handleCloseCheckoutModal}
        onCheckout={handleOpenCheckoutSuccessModal} //TODO: should be handleCheckout
      />
    </>
  )
}

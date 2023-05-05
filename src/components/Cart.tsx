import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { WorkshopShort } from '../api'
import { useDidMount, useCheckout } from '../hooks'
import {
  clearCart,
  removeWorkshop,
  setWorkshopQuantity,
  useStoreDispatch,
  useStoreSelector,
} from '../store'
import { CartDrawer } from './CartDrawer'
import { CartIconWrapper } from './CartIconWrapper'
import { CheckoutFormModal } from './CheckoutFormModal'
import { CheckoutOutcomeModal } from './CheckoutOutcomeModal'
import { handleKeyboardEvent } from '../util'

export function Cart() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isCheckoutModalVisible, setIsCheckoutModalVisible] = useState(false)

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

  const { didMount } = useDidMount()
  const dispatch = useStoreDispatch()
  const { products, total } = useStoreSelector((state) => state.cart)

  function handleChangeWorkshopQuantity(
    workshop: WorkshopShort,
    quantity: number
  ) {
    dispatch(setWorkshopQuantity({ ...workshop, quantity }))
  }

  function handleClearCart() {
    dispatch(clearCart())
  }

  function handleRemoveWorkshop(workshopId: number) {
    dispatch(removeWorkshop(workshopId))
  }

  const { loading, submitOrder } = useCheckout()
  const [checkoutOutcomeModalInfo, setCheckoutOutcomeModalInfo] = useState<{
    success: boolean
    visible: boolean
  } | null>(null)

  async function handleCheckout() {
    const success = await submitOrder(products, total)
    if (success) {
      handleClearCart()
    }
    handleCloseCheckoutModal()
    setCheckoutOutcomeModalInfo({
      success,
      visible: true,
    })
    document.body.classList.add('modal-open')
  }

  function handleBackToShop(success: boolean) {
    setCheckoutOutcomeModalInfo(null)
    document.body.classList.remove('modal-open')
    if (success) {
      window.location.href = '/'
    }
  }

  useEffect(() => {
    if (didMount && total > 0) {
      handleOpenDrawer()
    }
  }, [total, didMount])

  return (
    <>
      <div
        className={classNames('header-cart tab-focus', {
          'header-cart--nonempty': products.length > 0,
        })}
        tabIndex={products.length > 0 ? 0 : -1}
        onClick={products.length === 0 ? undefined : handleOpenDrawer}
        onKeyDown={(e) => {
          if (products.length > 0) {
            handleKeyboardEvent(e, handleOpenDrawer)
          }
        }}
      >
        <CartIconWrapper cartCount={products.length} />
        <span className="header-cart__text">
          {products.length === 0
            ? 'Cart is Empty'
            : products.length === 1
            ? '1 Workshop in Cart'
            : `${products.length} Workshops in Cart`}
        </span>
      </div>
      <CartDrawer
        isDrawerOpen={isDrawerOpen}
        products={products}
        total={total}
        onCloseDrawer={handleCloseDrawer}
        onChangeWorkshopQuantity={handleChangeWorkshopQuantity}
        onRemoveWorkshop={handleRemoveWorkshop}
        onOpenCheckoutModal={handleOpenCheckoutModal}
      />
      <CheckoutFormModal
        isModalOpen={isCheckoutModalVisible}
        loading={loading}
        onCloseModal={handleCloseCheckoutModal}
        onCheckout={handleCheckout}
      />
      {checkoutOutcomeModalInfo && (
        <CheckoutOutcomeModal
          isModalOpen={checkoutOutcomeModalInfo.visible}
          title={checkoutOutcomeModalInfo.success ? 'Thank you!' : 'Oops!'}
          onBackToShop={() =>
            handleBackToShop(checkoutOutcomeModalInfo.success)
          }
        />
      )}
    </>
  )
}

import React from 'react'
import { Button } from './Button'
import { Modal } from './Modal'

type Props = {
  isModalOpen: boolean
  title: string
  onBackToShop: () => void
}

export function CheckoutOutcomeModal(props: Props) {
  return (
    <Modal isVisible={props.isModalOpen}>
      <div className="checkout-modal-header">
        <h2 className="checkout-modal-header__title">{props.title}</h2>
      </div>
      <div className="checkout-modal-subtitle">
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing.
      </div>
      <Button
        variant="yellow"
        className="checkout-modal-button"
        onClick={props.onBackToShop}
      >
        Back to Shop
      </Button>
    </Modal>
  )
}

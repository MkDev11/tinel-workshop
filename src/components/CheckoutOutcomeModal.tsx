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
    <Modal isVisible={props.isModalOpen} title={props.title}>
      <Button
        variant="yellow"
        className="checkout-modal-button"
        dataTestId="back-to-shop-button"
        onClick={props.onBackToShop}
      >
        Back to Shop
      </Button>
    </Modal>
  )
}

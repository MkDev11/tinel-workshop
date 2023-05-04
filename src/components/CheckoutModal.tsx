import classNames from 'classnames'
import React, { useState } from 'react'
import { CloseIcon } from '../util'
import { TextInput } from './TextInput'
import { Modal } from './Modal'
import { LabeledInput } from './LabeledInput'
import { DateInput } from './DateInput'
import { Select } from './Select'
import { Checkbox } from './Checkbox'
import { Button } from './Button'

type Props = {
  isModalOpen: boolean
  onCloseModal: () => void
  onCheckout: () => void
}

export function CheckoutModal(props: Props) {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false)
  return (
    <Modal isVisible={props.isModalOpen}>
      <div className="checkout-modal-header">
        <h2 className="checkout-modal-header__title">Checkout</h2>
        <CloseIcon
          className="checkout-modal-header__close-icon"
          onClick={props.onCloseModal}
        />
      </div>
      <div className="checkout-modal-subtitle">
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing.
      </div>
      <form className="checkout-modal-form">
        <LabeledInput label="First Name" inputId="first-name">
          <TextInput
            id="first-name"
            value={''}
            placeholder="Type your first name here"
            onChangeValue={() => console.log('TODO')}
          />
        </LabeledInput>
        <LabeledInput label="Last Name" inputId="last-name">
          <TextInput
            id="last-name"
            value={''}
            placeholder="Type your last name here"
            onChangeValue={() => console.log('TODO')}
          />
        </LabeledInput>
        <LabeledInput label="Email Address" inputId="email">
          <TextInput
            id="email"
            value=""
            placeholder="Type your email address here"
            type="email"
            onChangeValue={() => console.log('TODO')}
          />
        </LabeledInput>
        <div className="checkout-modal-form-group">
          <LabeledInput label="Date of Birth" inputId="dob">
            <DateInput
              id="dob"
              value={undefined}
              placeholder="DD/MM/YYYY"
              maxDate={new Date()}
              onChangeValue={() => console.log('TODO')}
            />
          </LabeledInput>
          <LabeledInput label="Gender" inputId="gender">
            <Select
              id="gender"
              options={[
                {
                  value: 'female',
                  label: 'Female',
                },
                {
                  value: 'male',
                  label: 'Male',
                },
                {
                  value: 'other',
                  label: 'Other',
                },
              ]}
              value={undefined}
              placeholder="Select your gender here"
              onSelectValue={(value) => console.log('TODO')}
            />
          </LabeledInput>
        </div>
        <LabeledInput label="Address" inputId="address">
          <TextInput
            id="address"
            value=""
            placeholder="Type your address here"
            onChangeValue={() => console.log('TODO')}
          />
        </LabeledInput>
        <LabeledInput label="Zip Code" inputId="zip-code">
          <TextInput
            id="zip-code"
            value=""
            placeholder="eg. 21310"
            onChangeValue={() => console.log('TODO')}
          />
        </LabeledInput>
        <Checkbox
          checked={isTermsAccepted}
          label="I agree"
          onChangeValue={setIsTermsAccepted}
        />
        <Button variant="yellow" className="checkout-modal-form-submit">
          Checkout
        </Button>
      </form>
    </Modal>
  )
}

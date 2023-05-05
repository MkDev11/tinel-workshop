import React from 'react'
import { useForm } from 'react-hook-form'
import { CloseIcon } from '../util'
import { Button } from './Button'
import { Checkbox } from './Checkbox'
import { DateInput } from './DateInput'
import { LabeledInput } from './LabeledInput'
import { Modal } from './Modal'
import { Select } from './Select'
import { TextInput } from './TextInput'
import { ValidatedInput } from './ValidatedInput'

type CheckoutFormFields = {
  firstName: string
  lastName: string
  email: string
  dateOfBirth: Date
  gender: string
  address: string
  zipCode: string
  termsAccepted: boolean
}

type Props = {
  isModalOpen: boolean
  onCloseModal: () => void
  onCheckout: () => void
}

export function CheckoutModal(props: Props) {
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormFields>()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    reset()
  })

  const onCloseModal = () => {
    reset()
    props.onCloseModal()
  }

  return (
    <Modal isVisible={props.isModalOpen}>
      <div className="checkout-modal-header">
        <h2 className="checkout-modal-header__title">Checkout</h2>
        <CloseIcon
          className="checkout-modal-header__close-icon"
          onClick={onCloseModal}
        />
      </div>
      <div className="checkout-modal-subtitle">
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing.
      </div>
      <form className="checkout-modal-form" onSubmit={onSubmit}>
        <LabeledInput
          label="First Name"
          htmlFor="firstName"
          error={errors.firstName?.message}
        >
          <TextInput
            name="firstName"
            register={register}
            rules={{ required: 'Your first name is required!' }}
            placeholder="Type your first name here"
          />
        </LabeledInput>
        <LabeledInput
          label="Last Name"
          htmlFor="lastName"
          error={errors.lastName?.message}
        >
          <TextInput
            name="lastName"
            register={register}
            rules={{ required: 'Your last name is required!' }}
            placeholder="Type your last name here"
          />
        </LabeledInput>
        <LabeledInput
          label="Email Address"
          htmlFor="email"
          error={errors.email?.message}
        >
          <TextInput
            name="email"
            register={register}
            rules={{
              required: 'Your email address is required!',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Your email address is invalid!',
              },
            }}
            placeholder="Type your email address here"
          />
        </LabeledInput>
        <div className="checkout-modal-form-group">
          <LabeledInput
            label="Date of Birth"
            htmlFor="dateOfBirth"
            error={errors.dateOfBirth?.message}
          >
            <DateInput
              name="dateOfBirth"
              control={control}
              register={register}
              rules={{ required: 'Your date of birth is required!' }}
              placeholder="DD/MM/YYYY"
              maxDate={new Date()}
            />
          </LabeledInput>
          <LabeledInput label="Gender" htmlFor="gender">
            <Select
              name="gender"
              control={control}
              register={register}
              placeholder="Select your gender here"
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
            />
          </LabeledInput>
        </div>
        <LabeledInput
          label="Address"
          htmlFor="address"
          error={errors.address?.message}
        >
          <TextInput
            name="address"
            register={register}
            rules={{ required: 'Your address is required!' }}
            placeholder="Type your address here"
          />
        </LabeledInput>
        <LabeledInput label="Zip Code" htmlFor="zipCode">
          <TextInput
            name="zipCode"
            register={register}
            placeholder="eg. 21310"
          />
        </LabeledInput>
        <ValidatedInput error={errors.termsAccepted?.message}>
          <Checkbox
            name="termsAccepted"
            register={register}
            rules={{ required: 'You need to accept the terms and conditions!' }}
            label="I agree"
          />
        </ValidatedInput>
        <Button
          variant="yellow"
          className="checkout-modal-form-submit"
          submit={true}
        >
          Checkout
        </Button>
      </form>
    </Modal>
  )
}

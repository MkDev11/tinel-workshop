import React from 'react'
import { FieldValues } from 'react-hook-form'
import { FormInputProps } from '../util'

type Props<T extends FieldValues> = {
  label: string
} & FormInputProps<T>

export function Checkbox<T extends FieldValues>(props: Props<T>) {
  return (
    <label className="checkbox-wrapper">
      <input
        name={props.name}
        {...props.register?.(props.name, props.rules)}
        type="checkbox"
        className="checkbox-wrapper__input"
      />
      <span className="checkbox-wrapper__checkmark" />
      <span className="checkbox-wrapper__label">{props.label}</span>
    </label>
  )
}

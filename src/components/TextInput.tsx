import React from 'react'
import { FieldValues } from 'react-hook-form'
import { FormInputProps } from '../util'

type Props<T extends FieldValues> = {
  placeholder: string
} & FormInputProps<T>

export function TextInput<T extends FieldValues>(props: Props<T>) {
  return (
    <input
      name={props.name}
      {...props.register?.(props.name, props.rules)}
      className="text-input"
      id={props.name}
      placeholder={props.placeholder}
    />
  )
}

import classNames from 'classnames'
import React from 'react'

type Props = {
  id: string
  value: string
  placeholder: string
  type?: string
  onChangeValue: (value: string) => void
}

export function TextInput(props: Props) {
  return (
    <input
      className="text-input"
      id={props.id}
      name={props.id}
      value={props.value}
      placeholder={props.placeholder}
      type={props.type || 'text'}
      onChange={(e) => props.onChangeValue(e.target.value)}
    />
  )
}

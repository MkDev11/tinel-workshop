import classNames from 'classnames'
import React from 'react'

type Props = {
  label: string
  inputId: string
  children: React.ReactNode
}

export function LabeledInput(props: Props) {
  return (
    <div className="labeled-input">
      <label className="input-label" htmlFor={props.inputId}>
        {props.label}
      </label>
      {props.children}
    </div>
  )
}

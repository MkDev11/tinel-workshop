import React from 'react'
import { ValidatedInput } from './ValidatedInput'

type Props = {
  label: string
  htmlFor: string
  error?: string
  children: React.ReactNode
}

export function LabeledInput(props: Props) {
  return (
    <div className="labeled-input">
      <ValidatedInput error={props.error}>
        <label className="input-label" htmlFor={props.htmlFor}>
          {props.label}
        </label>
        {props.children}
      </ValidatedInput>
    </div>
  )
}

import React from 'react'

type Props = {
  checked: boolean
  label: string
  onChangeValue: (value: boolean) => void
}

export function Checkbox(props: Props) {
  return (
    <label className="checkbox-wrapper">
      <input
        type="checkbox"
        className="checkbox-wrapper__input"
        checked={props.checked}
        onChange={() => props.onChangeValue(!props.checked)}
      />
      <span className="checkbox-wrapper__checkmark" />
      <span className="checkbox-wrapper__label">{props.label}</span>
    </label>
  )
}

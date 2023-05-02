import classNames from 'classnames'
import React from 'react'

type Props = {
  className?: string
  value: number
  onChange: (value: number) => void
}

export function NumberInput(props: Props) {
  return (
    <input
      type="number"
      className={classNames('number-input', props.className)}
      min={1}
      value={props.value}
      onChange={(e) => {
        const parsed = parseInt(e.target.value)
        props.onChange(isNaN(parsed) || parsed === 0 ? 1 : parsed)
      }}
    />
  )
}

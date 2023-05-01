import classNames from 'classnames'
import React from 'react'

type Props = {
  children: React.ReactNode
  variant: 'yellow' | 'blue' | 'text'
  className?: string
  submit?: boolean
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
}

export function Button(props: Props) {
  return (
    <button
      className={classNames(
        'button tab-focus',
        props.variant,
        props.className,
        {
          loading: props.loading,
          disabled: props.disabled,
        }
      )}
      type={props.submit ? 'submit' : 'button'}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

import React from 'react'

type Props = {
  error?: string
  children: React.ReactNode
}

export function ValidatedInput(props: Props) {
  return (
    <div>
      {props.children}
      {props.error && <div className="input-error">{props.error}</div>}
    </div>
  )
}

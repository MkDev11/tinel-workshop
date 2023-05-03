import classNames from 'classnames'
import React from 'react'

type Props = {
  isOpen: boolean
  children: React.ReactNode
}

export function Drawer(props: Props) {
  return (
    <div
      className={classNames('drawer', {
        'drawer--open': props.isOpen,
      })}
    >
      {props.children}
    </div>
  )
}

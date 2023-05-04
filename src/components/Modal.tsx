import classNames from 'classnames'
import React from 'react'

type Props = {
  isVisible: boolean
  children: React.ReactNode
}

export function Modal(props: Props) {
  return (
    <div
      className={classNames('modal-wrapper', {
        'modal-wrapper--visible': props.isVisible,
      })}
    >
      <div className="modal">{props.children}</div>
    </div>
  )
}

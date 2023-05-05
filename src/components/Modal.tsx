import classNames from 'classnames'
import React from 'react'
import { CloseIcon } from '../util'

type Props = {
  isVisible: boolean
  title: string
  children: React.ReactNode
  onCloseModal?: () => void
}

export function Modal(props: Props) {
  return (
    <div
      className={classNames('modal-wrapper', {
        'modal-wrapper--visible': props.isVisible,
      })}
    >
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-header__title">{props.title}</h2>
          {props.onCloseModal && (
            <CloseIcon
              className="modal-header__close-icon"
              onClick={props.onCloseModal}
            />
          )}
        </div>
        <div className="modal-subtitle">
          What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing.
        </div>
        {props.children}
      </div>
    </div>
  )
}

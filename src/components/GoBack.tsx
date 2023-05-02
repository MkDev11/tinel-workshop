import React from 'react'
import { ArrowBackIcon } from '../util'

export function GoBack() {
  return (
    <div className="go-back-wrapper">
      <div
        className="go-back"
        onClick={() =>
          window.history.back()
        } /* TODO: maintain scroll position */
      >
        <ArrowBackIcon className="go-back__icon" />
        <span className="go-back__text">Back</span>
      </div>
    </div>
  )
}

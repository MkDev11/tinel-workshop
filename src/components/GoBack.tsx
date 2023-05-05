import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowBackIcon, handleKeyboardEvent } from '../util'

export function GoBack() {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <div className="go-back-wrapper">
      <div
        className="go-back tab-focus"
        tabIndex={0}
        onClick={handleGoBack}
        onKeyDown={(e) => {
          handleKeyboardEvent(e, handleGoBack)
        }}
      >
        <ArrowBackIcon className="go-back__icon" />
        <span className="go-back__text">Back</span>
      </div>
    </div>
  )
}

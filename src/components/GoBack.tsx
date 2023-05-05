import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowBackIcon } from '../util'

export function GoBack() {
  const navigate = useNavigate()

  return (
    <div className="go-back-wrapper">
      <div className="go-back" onClick={() => navigate(-1)}>
        <ArrowBackIcon className="go-back__icon" />
        <span className="go-back__text">Back</span>
      </div>
    </div>
  )
}

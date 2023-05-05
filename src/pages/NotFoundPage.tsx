import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Main } from '../components'
import { NotFoundIcon } from '../util'

export function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <Main>
      <div className="not-found">
        <h1 className="not-found__title">
          Sorry, we could not find what you are looking for!
        </h1>
        <NotFoundIcon className="not-found__icon" />
        <Button
          className="not-found__button"
          variant="yellow"
          onClick={() => navigate('/')}
        >
          Back to Home
        </Button>
      </div>
    </Main>
  )
}

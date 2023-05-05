import React from 'react'
import { useParams } from 'react-router-dom'
import { GoBack, Main, WorkshopInfo } from '../components'

export function WorkshopInfoPage() {
  const { id } = useParams()

  return (
    <Main type="info">
      <GoBack />
      <WorkshopInfo id={id} />
    </Main>
  )
}

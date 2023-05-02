import React from 'react'
import { useParams } from 'react-router-dom'
import { GoBack, PageLayout, WorkshopInfo } from '../components'

export function WorkshopInfoPage() {
  const { id } = useParams()

  return (
    <PageLayout type="info">
      <GoBack />
      <WorkshopInfo id={id} />
    </PageLayout>
  )
}

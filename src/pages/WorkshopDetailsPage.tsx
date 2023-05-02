import React from 'react'
import { useParams } from 'react-router-dom'
import { GoBack, PageLayout } from '../components'
import { WorkshopDetailsContainer } from '../containers'

export function WorkshopDetailsPage() {
  const { id } = useParams()

  return (
    <PageLayout type="details">
      <GoBack />
      <WorkshopDetailsContainer id={id} />
    </PageLayout>
  )
}

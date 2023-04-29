import React from 'react'
import { useParams } from 'react-router-dom'
import { PageLayout } from '../components'
import { WorkshopContainer } from '../containers'

export function WorkshopPage() {
  const { id } = useParams()

  return (
    <PageLayout>
      <WorkshopContainer id={id} />
    </PageLayout>
  )
}

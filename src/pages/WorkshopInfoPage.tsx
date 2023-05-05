import React from 'react'
import { useParams } from 'react-router-dom'
import { GoBack, Main, PageLayout, WorkshopInfo } from '../components'

export function WorkshopInfoPage() {
  const { id } = useParams()

  return (
    <PageLayout>
      <Main type="info">
        <GoBack />
        <WorkshopInfo id={id} />
      </Main>
    </PageLayout>
  )
}

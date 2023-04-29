import React from 'react'
import { PageLayout } from '../components'
import { WorkshopListContainer } from '../containers'

type Props = {
  category?: string
}

export function WorkshopListPage(props: Props) {
  return (
    <PageLayout>
      <WorkshopListContainer category={props.category} />
    </PageLayout>
  )
}

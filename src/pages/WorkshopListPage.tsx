import React from 'react'
import { Navigation, PageLayout } from '../components'
import { WorkshopListContainer } from '../containers'
import { WorkshopCategory } from '../enums'

type Props = {
  category?: WorkshopCategory
}

export function WorkshopListPage(props: Props) {
  return (
    <PageLayout type="list">
      <Navigation activeCategory={props.category} />
      <WorkshopListContainer category={props.category} />
    </PageLayout>
  )
}

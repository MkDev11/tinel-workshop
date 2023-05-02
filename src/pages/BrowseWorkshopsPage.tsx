import React from 'react'
import {
  BrowseWorkshopsListWrapper,
  Navigation,
  PageLayout,
} from '../components'
import { WorkshopCategory } from '../enums'

type Props = {
  category?: WorkshopCategory
}

export function BrowseWorkshopsPage(props: Props) {
  return (
    <PageLayout type="browse">
      <Navigation activeCategory={props.category} />
      <BrowseWorkshopsListWrapper category={props.category} />
    </PageLayout>
  )
}

import React from 'react'
import {
  BrowseWorkshopsListWrapper,
  Main,
  Navigation,
  PageLayout,
} from '../components'
import { WorkshopCategory } from '../util'

type Props = {
  category?: WorkshopCategory
}

export function BrowseWorkshopsPage(props: Props) {
  return (
    <PageLayout>
      <Main type="browse">
        <Navigation activeCategory={props.category} />
        <BrowseWorkshopsListWrapper category={props.category} />
      </Main>
    </PageLayout>
  )
}

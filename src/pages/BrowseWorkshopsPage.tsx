import React from 'react'
import { BrowseWorkshopsListWrapper, Main, Navigation } from '../components'
import { WorkshopCategory } from '../util'

type Props = {
  category?: WorkshopCategory
}

export function BrowseWorkshopsPage(props: Props) {
  return (
    <Main type="browse">
      <Navigation activeCategory={props.category} />
      <BrowseWorkshopsListWrapper category={props.category} />
    </Main>
  )
}

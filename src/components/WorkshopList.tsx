import React from 'react'
import { WorkshopShort } from '../api'
import { WorkshopCard } from './WorkshopCard'

type Props = {
  workshops: WorkshopShort[]
}

export function WorkshopList(props: Props) {
  return (
    <ul className="workshop-list">
      {props.workshops.map((workshop) => (
        <WorkshopCard key={workshop.id} workshop={workshop} />
      ))}
    </ul>
  )
}

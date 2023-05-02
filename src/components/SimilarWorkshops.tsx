import React from 'react'
import { WorkshopShort } from '../api'
import { WorkshopCard } from './WorkshopCard'

type Props = {
  workshops: WorkshopShort[]
}

export function SimilarWorkshops(props: Props) {
  return (
    <div className="similar-workshops">
      <h1 className="similar-workshops-title">Similar Workshops</h1>
      <ul className="workshop-list">
        {props.workshops.map((workshop) => (
          <WorkshopCard key={workshop.id} workshop={workshop} />
        ))}
      </ul>
    </div>
  )
}

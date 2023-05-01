import React from 'react'
import { ClockIcon, TimeFormatter } from '../util'

type Props = {
  date: string
}

export function WorkshopTime(props: Props) {
  return (
    <div className="workshop-datetime">
      <ClockIcon className="workshop-datetime__icon" />
      <span className="workshop-datetime__text">
        {TimeFormatter.DEFAULT.format(new Date(props.date))}
      </span>
    </div>
  )
}

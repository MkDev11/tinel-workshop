import React from 'react'
import { CalendarIcon, DateFormatter } from '../util'

type Props = {
  date: string
}

export function WorkshopDate(props: Props) {
  return (
    <div className="workshop-datetime">
      <CalendarIcon className="workshop-datetime__icon" />
      <span className="workshop-datetime__text">
        {DateFormatter.DEFAULT.format(new Date(props.date))}.
      </span>
    </div>
  )
}

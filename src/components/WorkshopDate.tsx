import classNames from 'classnames'
import React from 'react'
import { CalendarIcon, DateFormatter } from '../util'

type Props = {
  date: string
  className?: string
}

export function WorkshopDate(props: Props) {
  return (
    <div className={classNames('datetime', props.className)}>
      <CalendarIcon className="datetime__icon" />
      <span className="datetime__text">
        {DateFormatter.DEFAULT.format(new Date(props.date))}.
      </span>
    </div>
  )
}

import classNames from 'classnames'
import React from 'react'
import { ClockIcon, TimeFormatter } from '../util'

type Props = {
  date: string
  className?: string
}

export function WorkshopTime(props: Props) {
  return (
    <div className={classNames('datetime', props.className)}>
      <ClockIcon className="datetime__icon" />
      <span className="datetime__text">
        {TimeFormatter.DEFAULT.format(new Date(props.date))}
      </span>
    </div>
  )
}

import classNames from 'classnames'
import React from 'react'
import { PriceFormatter } from '../util'

type Props = {
  price: number
  className?: string
}

export function WorkshopPrice(props: Props) {
  return (
    <div className={classNames('price', props.className)}>
      <span className="price__amount">
        {PriceFormatter.DEFAULT.format(props.price)}
      </span>
      <span className="price__currency">EUR</span>
    </div>
  )
}

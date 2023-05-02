import classNames from 'classnames'
import React, { useState } from 'react'
import { WorkshopFull } from '../api'
import { Spinner } from './Spinner'
import { Button } from './Button'
import { CategoryIcon } from './CategoryIcon'
import { WorkshopDate } from './WorkshopDate'
import { WorkshopTime } from './WorkshopTime'
import { WorkshopPrice } from './WorkshopPrice'
import { CartIcon, PriceFormatter } from '../util'
import { NumberInput } from './NumberInput'

type Props = {
  workshop: WorkshopFull | null
  loading: boolean
}

export function WorkshopDetails(props: Props) {
  const [quantity, setQuantity] = useState(1)

  if (!props.workshop) {
    return null
  }

  return (
    <div className="workshop-details">
      <img
        className="workshop-details-img"
        src={props.workshop.imageUrl}
        alt={props.workshop.title}
      />
      <CategoryIcon
        category={props.workshop.category}
        className="workshop-details-category-icon"
      />
      <div className="workshop-details-content">
        <div>
          <div className="workshop-details-extras-row">
            <CategoryIcon
              category={props.workshop.category}
              className="workshop-details-category-icon"
            />
            <WorkshopDate
              date={props.workshop.date}
              className="datetime--details"
            />
            <WorkshopTime
              date={props.workshop.date}
              className="datetime--details"
            />
          </div>
          <h1 className="workshop-details-title">{props.workshop.title}</h1>
          <h5 className="workshop-details-author">
            <span className="workshop-details-author__with">With</span>
            <span className="workshop-details-author__name">
              {props.workshop.user.name}
            </span>
          </h5>
          <p className="workshop-details-description">{props.workshop.desc}</p>
        </div>
        <div className="workshop-details-basket">
          <div className="workshop-details-basket-title">Buy Your Ticket</div>
          <div className="workshop-details-basket-price-and-actions">
            <WorkshopPrice
              price={props.workshop.price}
              className="price--details"
            />
            <div className="workshop-details-basket-actions">
              <NumberInput
                className="workshop-details-basket-quantity"
                value={quantity}
                onChange={setQuantity}
              />
              <Button
                variant="yellow"
                className="workshop-details-basket-button"
              >
                <CartIcon className="workshop-details-basket-button__icon" />
                <span className="workshop-details-basket-button__text">
                  Add to cart
                </span>
              </Button>
            </div>
          </div>
          <div className="workshop-details-basket-subtotal">
            Subtotal:{' '}
            {PriceFormatter.DEFAULT.format(props.workshop.price * quantity)} EUR
          </div>
        </div>
      </div>
    </div>
  )
}

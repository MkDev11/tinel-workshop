import React, { useState } from 'react'
import {
  CalendarIcon,
  CartIcon,
  ClockIcon,
  DateFormatter,
  PriceFormatter,
  TimeFormatter,
} from '../util'
import { useWorkshopInfo } from '../hooks'
import { Button } from './Button'
import { CategoryIcon } from './CategoryIcon'
import { NumberInput } from './NumberInput'
import { Spinner } from './Spinner'
import { WorkshopList } from './WorkshopList'

type Props = {
  id?: string
}

export function WorkshopInfo(props: Props) {
  const { workshop, similarWorkshops, loading } = useWorkshopInfo(props.id)
  const [basketQuantity, setBasketQuantity] = useState(1)

  if (!props.id || isNaN(Number(props.id))) {
    return <>NOT FOUND</> //TODO
  }

  if (loading) {
    return <Spinner />
  }

  if (!workshop) {
    return null
  }

  return (
    <div className="workshop-info">
      <img
        className="workshop-info-img"
        src={workshop.imageUrl}
        alt={workshop.title}
      />
      <CategoryIcon
        category={workshop.category}
        className="workshop-info-category-icon"
      />
      <div className="workshop-info-content">
        <div>
          <div className="workshop-info-extras-row">
            <CategoryIcon
              category={workshop.category}
              className="workshop-info-category-icon"
            />
            <div className="workshop-info-datetime">
              <CalendarIcon className="workshop-info-datetime__icon" />
              <span className="workshop-info-datetime__text">
                {DateFormatter.DEFAULT.format(new Date(workshop.date))}
              </span>
            </div>
            <div className="workshop-info-datetime">
              <ClockIcon className="workshop-info-datetime__icon" />
              <span className="workshop-info-datetime__text">
                {TimeFormatter.DEFAULT.format(new Date(workshop.date))}
              </span>
            </div>
          </div>
          <h1 className="workshop-info-title">{workshop.title}</h1>
          <h5 className="workshop-info-author">
            <span className="workshop-info-author__with">With</span>
            <span className="workshop-info-author__name">
              {workshop.user.name}
            </span>
          </h5>
          <p className="workshop-info-description">{workshop.desc}</p>
        </div>
        <div className="workshop-info-basket">
          <div className="workshop-info-basket-title">Buy Your Ticket</div>
          <div className="workshop-info-basket-price-and-actions">
            <div className="workshop-info-basket-price">
              <span className="workshop-info-basket-price__amount">
                {PriceFormatter.DEFAULT.format(workshop.price)}
              </span>
              <span className="workshop-info-basket-price__currency">EUR</span>
            </div>
            <div className="workshop-info-basket-actions">
              <NumberInput
                className="workshop-info-basket-quantity"
                value={basketQuantity}
                onChange={setBasketQuantity}
              />
              <Button variant="yellow" className="workshop-info-basket-button">
                <CartIcon className="workshop-info-basket-button__icon" />
                <span className="workshop-info-basket-button__text">
                  Add to cart
                </span>
              </Button>
            </div>
          </div>
          <div className="workshop-info-basket-subtotal">
            Subtotal:{' '}
            {PriceFormatter.DEFAULT.format(workshop.price * basketQuantity)} EUR
          </div>
        </div>
      </div>
      {similarWorkshops.length > 0 && (
        <div className="similar-workshops">
          <h1 className="similar-workshops__title">Similar Workshops</h1>
          <WorkshopList workshops={similarWorkshops} />
        </div>
      )}
    </div>
  )
}

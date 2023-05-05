import React from 'react'
import { useNavigate } from 'react-router-dom'
import { WorkshopShort } from '../api'
import { addWorkshop, useStoreDispatch } from '../store'
import {
  CalendarIcon,
  CartIcon,
  ClockIcon,
  DEFAULT_IMAGE_URL,
  DateFormatter,
  PriceFormatter,
  TimeFormatter,
} from '../util'
import { Button } from './Button'
import { CategoryIcon } from './CategoryIcon'

type Props = {
  workshops: WorkshopShort[]
}

export function WorkshopList(props: Props) {
  const dispatch = useStoreDispatch()
  const navigate = useNavigate()

  function handleAddToCart(workshop: WorkshopShort) {
    dispatch(addWorkshop(workshop))
  }

  function handleVisitWorkshopPage(workshop: WorkshopShort) {
    navigate(`/workshops/${workshop.id}`)
  }

  return (
    <ul className="workshop-list">
      {props.workshops.map((workshop) => (
        <li className="workshop-card" title={workshop.title} key={workshop.id}>
          <img
            src={workshop.imageUrl || DEFAULT_IMAGE_URL}
            alt={workshop.title}
            loading="lazy"
            className="workshop-card__image tab-focus"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation()
              handleVisitWorkshopPage(workshop)
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = DEFAULT_IMAGE_URL
            }}
          />
          <div className="workshop-card__text-content">
            <div className="workshop-card-datetime-row">
              <div className="workshop-card-datetime">
                <CalendarIcon className="workshop-card-datetime__icon" />
                <span className="workshop-card-datetime__text">
                  {DateFormatter.DEFAULT.format(new Date(workshop.date))}
                </span>
              </div>
              <div className="workshop-card-datetime">
                <ClockIcon className="workshop-card-datetime__icon" />
                <span className="workshop-card-datetime__text">
                  {TimeFormatter.DEFAULT.format(new Date(workshop.date))}
                </span>
              </div>
            </div>
            <div
              className="workshop-card-title truncate tab-focus"
              tabIndex={0}
              onClick={(e) => {
                e.stopPropagation()
                handleVisitWorkshopPage(workshop)
              }}
            >
              {workshop.title}
            </div>
            <div className="workshop-card-price-and-button">
              <div className="workshop-card-price">
                <span className="workshop-card-price__amount">
                  {PriceFormatter.DEFAULT.format(workshop.price)}
                </span>
                <span className="workshop-card-price__currency">EUR</span>
              </div>
              <Button
                variant="yellow"
                className="workshop-card-button"
                onClick={() => handleAddToCart(workshop)}
              >
                <CartIcon className="workshop-card-button__icon" />
                <span className="workshop-card-button__text">Add to cart</span>
              </Button>
            </div>
          </div>
          <CategoryIcon
            category={workshop.category}
            className="workshop-card-category-icon"
          />
        </li>
      ))}
    </ul>
  )
}

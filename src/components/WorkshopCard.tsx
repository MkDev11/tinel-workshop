import React from 'react'
import { useNavigate } from 'react-router-dom'
import { WorkshopShort } from '../api'
import {
  CalendarIcon,
  CartIcon,
  ClockIcon,
  DateFormatter,
  PriceFormatter,
  TimeFormatter,
} from '../util'
import { Button } from './Button'
import { CategoryIcon } from './CategoryIcon'

const DEFAULT_IMAGE_URL = '/default-workshop-img.svg'

type Props = {
  workshop: WorkshopShort
}

export function WorkshopCard(props: Props) {
  const navigate = useNavigate()

  const handleVisitWorkshopPage = () => {
    navigate(`/workshops/${props.workshop.id}`)
  }

  return (
    <li className="workshop-card" title={props.workshop.title}>
      <img
        src={props.workshop.imageUrl || DEFAULT_IMAGE_URL}
        alt={props.workshop.title}
        loading="lazy"
        className="workshop-card__image tab-focus"
        tabIndex={0}
        onClick={(e) => {
          e.stopPropagation()
          handleVisitWorkshopPage()
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
              {DateFormatter.DEFAULT.format(new Date(props.workshop.date))}
            </span>
          </div>
          <div className="workshop-card-datetime">
            <ClockIcon className="workshop-card-datetime__icon" />
            <span className="workshop-card-datetime__text">
              {TimeFormatter.DEFAULT.format(new Date(props.workshop.date))}
            </span>
          </div>
        </div>
        <div
          className="workshop-card-title truncate tab-focus"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation()
            handleVisitWorkshopPage()
          }}
        >
          {props.workshop.title}
        </div>
        <div className="workshop-card-action-row">
          <div className="workshop-card-price">
            <span className="workshop-card-price__amount">
              {PriceFormatter.DEFAULT.format(props.workshop.price)}
            </span>
            <span className="workshop-card-price__currency">EUR</span>
          </div>
          <Button variant="yellow" className="workshop-card-button">
            <CartIcon className="workshop-card-button__icon" />
            <span className="workshop-card-button__text">Add to cart</span>
          </Button>
        </div>
      </div>
      <CategoryIcon
        category={props.workshop.category}
        className="workshop-card-category-icon"
      />
    </li>
  )
}

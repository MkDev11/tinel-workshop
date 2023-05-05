import React, { useCallback, useState } from 'react'
import { Navigate } from 'react-router-dom'
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
import { setWorkshopQuantity, useStoreDispatch } from '../store'

type Props = {
  id?: string
}

export function WorkshopInfo(props: Props) {
  const [quantity, setQuantity] = useState(1)

  const { workshop, similarWorkshops, loading } = useWorkshopInfo(props.id)

  const dispatch = useStoreDispatch()

  const handleAddToCart = useCallback(() => {
    if (workshop) {
      const { user, ...workshopShort } = workshop
      dispatch(setWorkshopQuantity({ ...workshopShort, quantity }))
      setQuantity(1)
    }
  }, [dispatch, quantity, workshop])

  if (!props.id || isNaN(Number(props.id))) {
    return <Navigate to="/not-found" />
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
          <div className="workshop-info-author">
            <span className="workshop-info-author__with">With</span>
            <span className="workshop-info-author__name">
              {workshop.user.name}
            </span>
          </div>
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
                value={quantity}
                onChange={setQuantity}
              />
              <Button
                variant="yellow"
                className="workshop-info-basket-button"
                disabled={quantity === 0}
                onClick={handleAddToCart}
              >
                <CartIcon className="workshop-info-basket-button__icon" />
                <span className="workshop-info-basket-button__text">
                  Add to cart
                </span>
              </Button>
            </div>
          </div>
          <div className="workshop-info-basket-subtotal">
            Subtotal: {PriceFormatter.DEFAULT.format(workshop.price * quantity)}{' '}
            EUR
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

import classNames from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { WorkshopCategory } from '../enums'
import {
  BrushIcon as DesignIcon,
  FrontendIcon,
  BackendIcon,
  FlashIcon as MarketingIcon,
} from '../util'

const NAVIGATION_ICON = {
  [WorkshopCategory.DESIGN]: <DesignIcon className="navigation-item__icon" />,
  [WorkshopCategory.FRONTEND]: (
    <FrontendIcon className="navigation-item__icon" />
  ),
  [WorkshopCategory.BACKEND]: <BackendIcon className="navigation-item__icon" />,
  [WorkshopCategory.MARKETING]: (
    <MarketingIcon className="navigation-item__icon" />
  ),
}

type Props = {
  category?: WorkshopCategory
}

export function NavigationItem(props: Props) {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames('navigation-item', {
          'navigation-item--active': isActive,
        })
      }
      to={props.category ? `/${props.category}` : '/'}
      end={true}
    >
      {props.category && NAVIGATION_ICON[props.category]}
      <span
        className={classNames('navigation-item__text', {
          'no-icon': !props.category,
        })}
      >
        {props.category || 'all'}
      </span>
    </NavLink>
  )
}

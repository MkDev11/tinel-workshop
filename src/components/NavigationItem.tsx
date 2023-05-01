import classNames from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { CategoryIcon } from './CategoryIcon'

type Props = {
  category?: string
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
      <CategoryIcon
        category={props.category}
        className="navigation-item__icon"
      />
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

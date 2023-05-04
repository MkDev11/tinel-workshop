import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { ChevronDownIcon, WorkshopCategory } from '../util'
import { NavigationItem } from './NavigationItem'

type Props = {
  activeCategory?: WorkshopCategory
}

export function Navigation(props: Props) {
  const [mobileNavExpanded, setMobileNavExpanded] = useState(false)

  useEffect(() => {
    function collapseMobileNav(e: MouseEvent) {
      const activeCategory = document.querySelector('.active-category')
      if (activeCategory && !activeCategory.contains(e.target as Node)) {
        setMobileNavExpanded(false)
      }
    }

    window.addEventListener('mouseup', collapseMobileNav)

    return () => {
      window.removeEventListener('mouseup', collapseMobileNav)
    }
  }, [])

  return (
    <div className="nav-wrapper">
      <div
        className="active-category"
        onClick={() => setMobileNavExpanded(true)}
      >
        <ChevronDownIcon className="active-category__arrow" />
        <span className="active-category__text">
          {props.activeCategory || 'all'}
        </span>
      </div>
      <span className="navigation-title">Filter by category:</span>
      <nav
        className={classNames({
          'navigation--expanded': mobileNavExpanded,
        })}
      >
        <NavigationItem />
        <NavigationItem category={WorkshopCategory.DESIGN} />
        <NavigationItem category={WorkshopCategory.FRONTEND} />
        <NavigationItem category={WorkshopCategory.BACKEND} />
        <NavigationItem category={WorkshopCategory.MARKETING} />
      </nav>
    </div>
  )
}

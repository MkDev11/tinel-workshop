import React, { cloneElement } from 'react'
import {
  BrushIcon as DesignIcon,
  FrontendIcon,
  BackendIcon,
  FlashIcon as MarketingIcon,
  WorkshopCategory,
} from '../util'

const CATEGORY_ICON: { [category: string]: JSX.Element } = {
  [WorkshopCategory.DESIGN]: <DesignIcon />,
  [WorkshopCategory.FRONTEND]: <FrontendIcon />,
  [WorkshopCategory.BACKEND]: <BackendIcon />,
  [WorkshopCategory.MARKETING]: <MarketingIcon />,
}

const getCategoryIcon = (category: string, className?: string) => {
  const Icon = CATEGORY_ICON[category]
  return cloneElement(Icon, { className })
}

type Props = {
  category?: string
  className?: string
}

export function CategoryIcon(props: Props) {
  return (
    <>{props.category && getCategoryIcon(props.category, props.className)}</>
  )
}

import React from 'react'
import { WorkshopApi } from '../api'

const workshopApi = WorkshopApi.getInstance()

type Props = {
  category?: string
}

export function WorkshopListContainer(props: Props) {
  return <div>{props.category}</div>
}

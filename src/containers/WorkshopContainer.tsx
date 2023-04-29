import React from 'react'
import { WorkshopApi } from '../api'

const workshopApi = WorkshopApi.getInstance()

type Props = {
  id?: string
}

export function WorkshopContainer(props: Props) {
  return <div>{props.id}</div>
}

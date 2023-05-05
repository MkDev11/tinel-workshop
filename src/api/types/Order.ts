import { WorkshopOrder } from './WorkshopOrder'

export type Order = {
  id: number
  userId: number
  products: WorkshopOrder[]
  total: number
}

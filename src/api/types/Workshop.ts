import { User } from './User'

export type WorkshopShort = {
  id: number
  title: string
  desc: string
  price: number
  category: string
  date: string
  imageUrl: string
  userId: number
}

export type WorkshopFull = WorkshopShort & {
  user: User
}

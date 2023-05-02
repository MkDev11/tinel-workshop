import { User } from './User'

export type WorkshopShort = {
  id: string
  title: string
  desc: string
  price: number
  category: string
  date: string
  imageUrl: string
  userId: string
}

export type WorkshopFull = WorkshopShort & {
  user: User
}

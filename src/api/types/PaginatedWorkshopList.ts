import { Workshop } from './Workshop'

export type PaginatedWorkshopList = {
  items: Workshop[]
  nextPage?: number
}

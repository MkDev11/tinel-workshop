import { WorkshopShort } from './Workshop'

export type PaginatedWorkshopList = {
  items: WorkshopShort[]
  nextPage?: number
}

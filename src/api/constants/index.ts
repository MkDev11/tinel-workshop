import { PaginatedWorkshopList } from '../types'

export const API_URL = 'http://localhost:3001'

export const API_WORKSHOP_LIST_LIMIT = 9

export const EMPTY_PAGINATED_WORKSHOP_LIST: PaginatedWorkshopList = {
  items: [],
  nextPage: 0,
}

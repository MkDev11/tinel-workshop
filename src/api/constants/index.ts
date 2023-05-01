import { PaginatedWorkshopList } from '../types'

export const API_URL = 'http://localhost:3001'

export const API_WORKSHOPS_LIMIT = 9

export const EMPTY_PAGINATED_WORKSHOP_LIST: PaginatedWorkshopList = {
  items: [],
  nextPage: 0,
}

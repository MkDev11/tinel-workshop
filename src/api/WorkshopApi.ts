import { API_WORKSHOPS_LIMIT, API_URL } from './constants'
import { PaginatedWorkshopList } from './types'

export class WorkshopApi {
  private static instance: WorkshopApi

  public static getInstance(): WorkshopApi {
    if (!WorkshopApi.instance) {
      WorkshopApi.instance = new WorkshopApi()
    }

    return WorkshopApi.instance
  }

  public async getWorkshopList(
    page: number,
    category?: string
  ): Promise<PaginatedWorkshopList> {
    const requestUrl = `${API_URL}/workshops?_page=${page}&_limit=${API_WORKSHOPS_LIMIT}${
      category ? `&category=${category}` : ''
    }&_sort=date&_order=desc`

    const response = await fetch(requestUrl)

    if (!response.ok) {
      throw new Error('Invalid request')
    }

    return {
      items: await response.json(),
      nextPage:
        page * API_WORKSHOPS_LIMIT <
        parseInt(response.headers.get('x-total-count') || '0')
          ? page + 1
          : undefined,
    }
  }
}

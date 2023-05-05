import { API_WORKSHOP_LIST_LIMIT, API_URL } from './constants'
import {
  PaginatedWorkshopList,
  WorkshopFull,
  WorkshopOrder,
  WorkshopShort,
} from './types'

export class Api {
  private static instance: Api

  public static getInstance(): Api {
    if (!Api.instance) {
      Api.instance = new Api()
    }

    return Api.instance
  }

  public async getSimilarWorkshops(
    category: string,
    id: number
  ): Promise<WorkshopShort[]> {
    const requestUrl = `${API_URL}/workshops?id_ne=${id}&_limit=3&category=${category}&_sort=date&_order=desc`

    const response = await this.fetch(requestUrl)

    return await response.json()
  }

  public async getWorkshopDetails(id: number): Promise<WorkshopFull> {
    const requestUrl = `${API_URL}/workshops/${id}?_expand=user`

    const response = await this.fetch(requestUrl)

    return await response.json()
  }

  public async getWorkshopList(
    page: number,
    category?: string
  ): Promise<PaginatedWorkshopList> {
    const requestUrl = `${API_URL}/workshops?_page=${page}&_limit=${API_WORKSHOP_LIST_LIMIT}${
      category ? `&category=${category}` : ''
    }&_sort=date&_order=desc`

    const response = await this.fetch(requestUrl)

    return {
      items: await response.json(),
      nextPage:
        page * API_WORKSHOP_LIST_LIMIT <
        parseInt(response.headers.get('x-total-count') || '0')
          ? page + 1
          : undefined,
    }
  }

  public async postOrder(
    products: WorkshopOrder[],
    total: number,
    userId: number
  ): Promise<void> {
    const requestUrl = `${API_URL}/orders2`
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        products,
        total,
        userId,
      }),
    }

    await this.fetch(requestUrl, requestOptions)
  }

  private async fetch(url: string, options?: RequestInit) {
    let response: Response

    try {
      response = await fetch(url, options)
    } catch (e) {
      throw new Error(
        'The API server is currently not available. It is possible that it just needs a few minutes to start up.'
      )
    }

    if (!response.ok) {
      throw new Error('Invalid request')
    }

    return response
  }
}

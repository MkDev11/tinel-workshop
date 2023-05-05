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

    const response = await fetch(requestUrl)

    if (!response.ok) {
      throw new Error('Invalid request')
    }

    return await response.json()
  }

  public async getWorkshopDetails(id: number): Promise<WorkshopFull> {
    const requestUrl = `${API_URL}/workshops/${id}?_expand=user`

    const response = await fetch(requestUrl)

    if (!response.ok) {
      throw new Error('Invalid request')
    }

    return await response.json()
  }

  public async getWorkshopList(
    page: number,
    category?: string
  ): Promise<PaginatedWorkshopList> {
    const requestUrl = `${API_URL}/workshops?_page=${page}&_limit=${API_WORKSHOP_LIST_LIMIT}${
      category ? `&category=${category}` : ''
    }&_sort=date&_order=desc`

    const response = await fetch(requestUrl)

    if (!response.ok) {
      throw new Error('Invalid request')
    }

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
    const response = await fetch(`${API_URL}/orders2`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        products,
        total,
        userId,
      }),
    })

    if (!response.ok) {
      throw new Error('Invalid request')
    }

    console.log(await response.json())
  }
}

import { WorkshopCategory } from '../enums'
import { API_URL } from './constants'
import { Workshop } from './types'

export class WorkshopApi {
  private static instance: WorkshopApi

  public static getInstance(): WorkshopApi {
    if (!WorkshopApi.instance) {
      WorkshopApi.instance = new WorkshopApi()
    }

    return WorkshopApi.instance
  }

  public async getCategories(): Promise<WorkshopCategory[]> {
    const requestUrl = `${API_URL}/categories`

    const response = await fetch(requestUrl)

    if (!response.ok) {
      throw new Error('Invalid request')
    }

    const categories: WorkshopCategory[] = await response.json()

    return categories
  }

  public async getWorkshops(
    category: WorkshopCategory | null,
    page: number
  ): Promise<Workshop[]> {
    const requestUrl = `${API_URL}/workshops?_page=${page}&_limit=9${
      category ? `&category=${category}` : ''
    }`

    const response = await fetch(requestUrl)

    if (!response.ok) {
      throw new Error('Invalid request')
    }

    const workshops: Workshop[] = await response.json()

    return workshops
  }
}

import { useMemo } from 'react'
import { WorkshopApi, WorkshopFull, WorkshopShort } from '../api'
import { handleError, minDuration } from '../util'
import { useQuery } from '@tanstack/react-query'

const workshopApi = WorkshopApi.getInstance()

export function useWorkshopInfo(workshopId?: string) {
  const getWorkshopInfo = async () => {
    if (!workshopId || isNaN(Number(workshopId))) {
      return { workshop: null, similarWorkshops: [] }
    }

    try {
      const workshop = await minDuration(
        workshopApi.getWorkshopDetails(Number(workshopId)),
        500
      )
      const similarWorkshops = await minDuration(
        workshopApi.getSimilarWorkshops(workshop.category, Number(workshopId)),
        500
      )
      return { workshop, similarWorkshops }
    } catch (e) {
      handleError(e)
      return { workshop: null, similarWorkshops: [] }
    }
  }

  const query = useQuery({
    queryKey: ['workshopInfo', workshopId],
    queryFn: getWorkshopInfo,
    staleTime: 1000 * 60 * 5, // fresh for 5 minutes
  })

  const value: {
    workshop: WorkshopFull | null
    similarWorkshops: WorkshopShort[]
    loading: boolean
  } = useMemo(() => {
    return {
      workshop: query.data && query.data.workshop ? query.data.workshop : null,
      similarWorkshops:
        query.data && query.data.similarWorkshops
          ? query.data.similarWorkshops
          : [],
      loading: query.isLoading,
    }
  }, [query.data, query.isLoading])

  return value
}

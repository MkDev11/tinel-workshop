import { useMemo } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import {
  EMPTY_PAGINATED_WORKSHOP_LIST,
  WorkshopApi,
  WorkshopShort,
} from '../api'
import { handleError, minDuration } from '../util'

const workshopApi = WorkshopApi.getInstance()

export function useWorkshops(category?: string) {
  const getWorkshopList = async ({ pageParam = 1 }) => {
    try {
      const list = await minDuration(
        workshopApi.getWorkshopList(pageParam, category)
      )
      return list
    } catch (e) {
      handleError(e)
      return EMPTY_PAGINATED_WORKSHOP_LIST
    }
  }

  const query = useInfiniteQuery({
    queryKey: ['workshopList', category],
    queryFn: getWorkshopList,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    staleTime: 1000 * 60 * 5, // fresh for 5 minutes
  })

  const value: {
    workshops: WorkshopShort[]
    loadingInitial: boolean
    loadingMore: boolean
    hasMore: boolean
    onLoadMore: () => void
  } = useMemo(() => {
    return {
      workshops: query.data
        ? query.data.pages.flatMap((page) => page.items)
        : [],
      loadingInitial: query.isLoading,
      loadingMore: query.isFetchingNextPage,
      hasMore: !!query.hasNextPage,
      onLoadMore: () => query.fetchNextPage(),
    }
  }, [query])

  return value
}

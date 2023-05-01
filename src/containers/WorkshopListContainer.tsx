import React from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { EMPTY_PAGINATED_WORKSHOP_LIST, WorkshopApi } from '../api'
import { handleError, minDuration } from '../util'
import { WorkshopList } from '../components'

const workshopApi = WorkshopApi.getInstance()

type Props = {
  category?: string
}

export function WorkshopListContainer(props: Props) {
  const getWorkshopList = async ({ pageParam = 1 }) => {
    try {
      const list = await minDuration(
        workshopApi.getWorkshopList(pageParam, props.category)
      )
      return list
    } catch (e) {
      handleError(e)
      return EMPTY_PAGINATED_WORKSHOP_LIST
    }
  }

  const query = useInfiniteQuery({
    queryKey: ['workshopList', props.category],
    queryFn: getWorkshopList,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    staleTime: 1000 * 60 * 5, // fresh for 5 minutes
  })

  return (
    <WorkshopList
      workshops={
        query.data ? query.data.pages.flatMap((page) => page.items) : []
      }
      loadingInitial={query.isLoading}
      loadingMore={query.isFetchingNextPage}
      hasMore={!!query.hasNextPage}
      onLoadMore={() => query.fetchNextPage()}
    />
  )
}

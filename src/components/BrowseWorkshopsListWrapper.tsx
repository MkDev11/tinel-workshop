import React from 'react'
import { Button, Spinner, WorkshopList } from '.'
import { WorkshopCategory } from '../enums'
import { useWorkshops } from '../hooks'
import { EmptyIcon } from '../util'

type Props = {
  category?: WorkshopCategory
}

export function BrowseWorkshopsListWrapper(props: Props) {
  const { workshops, loadingInitial, loadingMore, hasMore, onLoadMore } =
    useWorkshops(props.category)

  return (
    <div className="browse-workshops-list-wrapper">
      <h1 className="browse-workshops-list-wrapper__title">Workshops</h1>
      {loadingInitial ? (
        <Spinner />
      ) : workshops.length === 0 ? (
        <EmptyIcon className="empty-icon" />
      ) : (
        <>
          <div className="browse-workshops-list-wrapper__subtitle">
            Displayed:{' '}
            <span className="displayed-count">{workshops.length}</span>
          </div>
          <WorkshopList workshops={workshops} />
          {hasMore && (
            <Button
              variant="text"
              loading={loadingMore}
              disabled={loadingMore}
              className="load-more-button"
              onClick={onLoadMore}
            >
              Load more
            </Button>
          )}
        </>
      )}
    </div>
  )
}

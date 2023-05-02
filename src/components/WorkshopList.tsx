import classNames from 'classnames'
import React from 'react'
import { WorkshopShort } from '../api'
import { Spinner } from './Spinner'
import { Button } from './Button'
import { EmptyIcon } from '../util'
import { WorkshopCard } from './WorkshopCard'

type Props = {
  workshops: WorkshopShort[]
  loadingInitial: boolean
  loadingMore: boolean
  hasMore: boolean
  onLoadMore: () => void
}

export function WorkshopList(props: Props) {
  return (
    <div className="workshop-list-wrapper">
      <h1 className="workshop-list-title">Workshops</h1>
      {props.loadingInitial ? (
        <Spinner />
      ) : props.workshops.length === 0 ? (
        <EmptyIcon className="empty-icon" />
      ) : (
        <>
          <div className="workshop-list-subtitle">
            Displayed:{' '}
            <span className="displayed-count">{props.workshops.length}</span>
          </div>
          <ul
            className={classNames('workshop-list', {
              'workshop-list--full': !props.hasMore,
            })}
          >
            {props.workshops.map((workshop) => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </ul>
          {props.hasMore && (
            <Button
              variant="text"
              loading={props.loadingMore}
              disabled={props.loadingMore}
              className="load-more-button"
              onClick={props.onLoadMore}
            >
              Load more
            </Button>
          )}
        </>
      )}
    </div>
  )
}

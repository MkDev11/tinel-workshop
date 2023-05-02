import classNames from 'classnames'
import React from 'react'

type Props = {
  type: 'browse' | 'info'
  children: React.ReactNode
}

export function Main(props: Props) {
  return (
    <main>
      <div className={classNames('main-content', 'container', props.type)}>
        {props.children}
      </div>
    </main>
  )
}

import React from 'react'

type Props = {
  children: React.ReactNode
}

export function Main(props: Props) {
  return (
    <main>
      <div className="container">{props.children}</div>
    </main>
  )
}

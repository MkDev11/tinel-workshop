import React from 'react'
import { WorkshopCategory } from '../enums'

type Props = {
  category: WorkshopCategory | null
}

export function Page(props: Props) {
  return (
    <>
      <header>HEADER</header>
      <main>{props.category}</main>
      <footer>FOOTER</footer>
    </>
  )
}

import React from 'react'
import { WorkshopCategory } from '../enums'
import { Header } from './Header'
import { Footer } from './Footer'

type Props = {
  category: WorkshopCategory | null
}

export function Page(props: Props) {
  return (
    <>
      <Header />
      <main>{props.category}</main>
      <Footer />
    </>
  )
}

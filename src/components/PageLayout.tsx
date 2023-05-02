import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Main } from './Main'

type Props = {
  type: 'browse' | 'info'
  children: React.ReactNode
}

export function PageLayout(props: Props) {
  return (
    <>
      <Header />
      <Main type={props.type}>{props.children}</Main>
      <Footer />
    </>
  )
}

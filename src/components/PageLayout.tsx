import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Main } from './Main'

type Props = {
  children: React.ReactNode
}

export function PageLayout(props: Props) {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </>
  )
}

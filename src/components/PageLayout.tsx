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
      <div className="scrollable-page-content">
        <Main>{props.children}</Main>
        <Footer />
      </div>
    </>
  )
}

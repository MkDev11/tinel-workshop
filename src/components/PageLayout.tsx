import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Main } from './Main'

type Props = {
  type: 'list' | 'details'
  children: React.ReactNode
}

export function PageLayout(props: Props) {
  return (
    <>
      <Header />
      <div className="scrollable-page-content">
        <Main type={props.type}>{props.children}</Main>
        <Footer />
      </div>
    </>
  )
}

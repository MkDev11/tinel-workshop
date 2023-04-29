import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Page } from './components'
import { WorkshopCategory } from './enums'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path={''} element={<Page category={null} />} />
          <Route
            path={`/${WorkshopCategory.DESIGN}`}
            element={<Page category={WorkshopCategory.DESIGN} />}
          />
          <Route
            path={`/${WorkshopCategory.FRONTEND}`}
            element={<Page category={WorkshopCategory.FRONTEND} />}
          />
          <Route
            path={`/${WorkshopCategory.BACKEND}`}
            element={<Page category={WorkshopCategory.BACKEND} />}
          />
          <Route
            path={`/${WorkshopCategory.MARKETING}`}
            element={<Page category={WorkshopCategory.MARKETING} />}
          />
          <Route
            path="*"
            element={
              <>TODO: Not found</>
            } /*TODO: implement this page when we have the design */
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

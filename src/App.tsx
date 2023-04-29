import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WorkshopCategory } from './enums'
import { WorkshopListPage, WorkshopPage } from './pages'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path={''} element={<WorkshopListPage />} />
          <Route
            path={`/${WorkshopCategory.DESIGN}`}
            element={<WorkshopListPage category={WorkshopCategory.DESIGN} />}
          />
          <Route
            path={`/${WorkshopCategory.FRONTEND}`}
            element={<WorkshopListPage category={WorkshopCategory.FRONTEND} />}
          />
          <Route
            path={`/${WorkshopCategory.BACKEND}`}
            element={<WorkshopListPage category={WorkshopCategory.BACKEND} />}
          />
          <Route
            path={`/${WorkshopCategory.MARKETING}`}
            element={<WorkshopListPage category={WorkshopCategory.MARKETING} />}
          />
          <Route path="/workshops/:id" element={<WorkshopPage />} />
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

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WorkshopCategory } from './enums'
import { BrowseWorkshopsPage, WorkshopInfoPage } from './pages'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path={''} element={<BrowseWorkshopsPage />} />
          <Route
            path={`/${WorkshopCategory.DESIGN}`}
            element={<BrowseWorkshopsPage category={WorkshopCategory.DESIGN} />}
          />
          <Route
            path={`/${WorkshopCategory.FRONTEND}`}
            element={
              <BrowseWorkshopsPage category={WorkshopCategory.FRONTEND} />
            }
          />
          <Route
            path={`/${WorkshopCategory.BACKEND}`}
            element={
              <BrowseWorkshopsPage category={WorkshopCategory.BACKEND} />
            }
          />
          <Route
            path={`/${WorkshopCategory.MARKETING}`}
            element={
              <BrowseWorkshopsPage category={WorkshopCategory.MARKETING} />
            }
          />
          <Route path="/workshops/:id" element={<WorkshopInfoPage />} />
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

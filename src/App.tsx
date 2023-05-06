import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowseWorkshopsPage, NotFoundPage, WorkshopInfoPage } from './pages'
import { persistor, store } from './store'
import { WorkshopCategory } from './util'
import { PageLayout } from './components/PageLayout'

const queryClient = new QueryClient()

export function App() {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <PageLayout>
            <Router>
              <Routes>
                <Route path={''} element={<BrowseWorkshopsPage />} />
                <Route
                  path={`/${WorkshopCategory.DESIGN}`}
                  element={
                    <BrowseWorkshopsPage category={WorkshopCategory.DESIGN} />
                  }
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
                    <BrowseWorkshopsPage
                      category={WorkshopCategory.MARKETING}
                    />
                  }
                />
                <Route path="/workshops/:id" element={<WorkshopInfoPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Router>
          </PageLayout>
        </QueryClientProvider>
      </PersistGate>
    </StoreProvider>
  )
}

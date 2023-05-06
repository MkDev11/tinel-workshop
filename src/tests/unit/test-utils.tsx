import { render, RenderOptions } from '@testing-library/react'
import React, { ReactElement } from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from '../../store'

const queryClient = new QueryClient()

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>{children}</Router>
      </QueryClientProvider>
    </StoreProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }

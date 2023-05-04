import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { cartReducer } from './slices'

const persistConfig = {
  key: 'cart',
  storage,
}

export const store = configureStore({
  reducer: {
    cart: persistReducer(persistConfig, cartReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch

export const useStoreDispatch: () => StoreDispatch = useDispatch
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector

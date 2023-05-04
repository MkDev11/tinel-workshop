import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WorkshopShort } from '../../api'

interface CartState {
  products: (WorkshopShort & { quantity: number })[]
  total: number
}

const initialState: CartState = {
  products: [],
  total: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // uses Immer to allow mutating state in reducers
  reducers: {
    addWorkshop: (state, action: PayloadAction<WorkshopShort>) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      )
      if (product) {
        state.total += product.price
        product.quantity++
      } else {
        state.total += action.payload.price
        state.products.push({ ...action.payload, quantity: 1 })
      }
    },
    setWorkshopQuantity: (
      state,
      action: PayloadAction<WorkshopShort & { quantity: number }>
    ) => {
      const { id, quantity } = action.payload
      const product = state.products.find((product) => product.id === id)
      if (product) {
        state.total += (quantity - product.quantity) * product.price
        product.quantity += quantity
      } else {
        state.total += quantity * action.payload.price
        state.products.push(action.payload)
      }
    },
    removeWorkshop: (state, action: PayloadAction<number>) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      )
      if (product) {
        state.total -= product.quantity * product.price
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        )
      }
    },
  },
})

export const { addWorkshop, setWorkshopQuantity, removeWorkshop } =
  cartSlice.actions
export const cartReducer = cartSlice.reducer

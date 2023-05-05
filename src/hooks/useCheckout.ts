import { useCallback, useMemo, useState } from 'react'
import { Api, WorkshopOrder } from '../api'

const api = Api.getInstance()

export const useCheckout = () => {
  const [loading, setLoading] = useState(false)

  // We would normally pass the id of the authenticated user
  const submitOrder = useCallback(
    async (products: WorkshopOrder[], total: number, userId = 5) => {
      setLoading(true)

      try {
        await api.postOrder(products, total, userId)
        return true
      } catch (e) {
        return false
      } finally {
        setLoading(false)
      }
    },
    []
  )

  const value: {
    loading: boolean
    submitOrder: (
      products: WorkshopOrder[],
      total: number,
      userId?: number
    ) => Promise<boolean>
  } = useMemo(() => {
    return {
      loading,
      submitOrder,
    }
  }, [loading, submitOrder])

  return value
}

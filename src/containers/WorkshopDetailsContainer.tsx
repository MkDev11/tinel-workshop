import React, { useEffect, useState } from 'react'
import { WorkshopApi, WorkshopFull, WorkshopShort } from '../api'
import { handleError, minDuration } from '../util'
import { SimilarWorkshops, Spinner, WorkshopDetails } from '../components'

const workshopApi = WorkshopApi.getInstance()

type Props = {
  id?: string
}

export function WorkshopDetailsContainer(props: Props) {
  const [workshop, setWorkshop] = useState<WorkshopFull | null>(null)
  const [similarWorkshops, setSimilarWorkshops] = useState<WorkshopShort[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getWorkshopDetails = async (id: number) => {
      setLoading(true)
      try {
        const workshop = await minDuration(
          workshopApi.getWorkshopDetails(id),
          500
        )
        const similarWorkshops = await minDuration(
          workshopApi.getSimilarWorkshops(workshop.category, id),
          500
        )
        setWorkshop(workshop)
        setSimilarWorkshops(similarWorkshops)
      } catch (e) {
        handleError(e)
        setWorkshop(null)
        setSimilarWorkshops([])
      }
      setLoading(false)
    }

    if (props.id && !isNaN(Number(props.id))) {
      getWorkshopDetails(Number(props.id))
    }

    return () => {
      setWorkshop(null)
      setSimilarWorkshops([])
    }
  }, [props.id])

  if (!props.id || isNaN(Number(props.id)) || (workshop === null && !loading)) {
    return <>NOT FOUND</> //TODO
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <WorkshopDetails workshop={workshop} loading={loading} />
      <SimilarWorkshops workshops={similarWorkshops} />
    </>
  )
}

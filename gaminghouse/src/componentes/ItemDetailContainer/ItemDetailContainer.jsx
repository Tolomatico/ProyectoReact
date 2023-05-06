import React, { useEffect, useState } from 'react'
import { ItemDetalle } from '../ItemDetalle/ItemDetalle'

import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

export const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})

  const { productoid } = useParams()

  useEffect(() => {

    const db = getFirestore()

    const queryDoc = doc(db, "productos",productoid)

    getDoc(queryDoc)
      .then(resp => setProducto({ id: resp.id, ...resp.data() }))
  }, [])


  return (

    <ItemDetalle producto={producto} />
  )
}


import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import { ItemDetail } from '../ItemDetail/ItemDetail'




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

    <ItemDetail producto={producto} />
  )
}


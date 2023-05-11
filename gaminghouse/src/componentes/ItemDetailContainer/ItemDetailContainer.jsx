import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import { ItemDetail } from '../ItemDetail/ItemDetail'




export const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})

  const { productId } = useParams()

  useEffect(() => {

    const db = getFirestore()

    const queryDoc = doc(db, "productos",productId)

    getDoc(queryDoc)
      .then(resp => setProduct({ id: resp.id, ...resp.data() }))
  }, [])


  return (

    <ItemDetail product={product} />
  )
}


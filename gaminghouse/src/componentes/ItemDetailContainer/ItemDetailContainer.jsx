import React, { useEffect, useState } from 'react'
import { ItemDetalle } from '../ItemDetalle/ItemDetalle'
import mockFeth from '../../Utils/mockFeth'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {

const [producto,setProducto]=useState({})

const {productoid}= useParams()

  useEffect(()=>{

    mockFeth(productoid)
    .then(resp=>setProducto(resp))
    .catch((err)=>console.log(err))

  },[])

  return (

   <ItemDetalle  producto={producto}/>
  )
}


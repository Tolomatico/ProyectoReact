import React, { useEffect, useState } from 'react'
import { ItemDetalle } from '../ItemDetalle/ItemDetalle'
import mockFeth from '../../Utils/mockFeth'

export const ItemDetailContainer = () => {

const [producto,setProducto]=useState({})

  useEffect(()=>{

    mockFeth(`1`)
    .then(resp=>setProducto(resp))
    .catch((err)=>console.log(err))

  },[])

  return (

   <ItemDetalle  producto={producto}/>
  )
}


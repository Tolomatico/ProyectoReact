import React from 'react'
import { useCount } from '../../hooks/useCount'

export const ItemCount = ({ initial = 1, stock, min = 1 , onAdd}) => {

    const { contador, increment, decrement} = useCount(1, stock, initial)

 const handleOnAdd=()=>{

onAdd(contador)

}


    return (

        <div>

            <h2>Cantidad: {contador} </h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={handleOnAdd()} >Agregar al carrtito</button>
        </div>


    )
}

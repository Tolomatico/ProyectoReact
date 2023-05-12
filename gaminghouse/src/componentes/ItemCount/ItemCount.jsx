import { useState } from 'react'
import { useCount } from '../../hooks/useCount'

export const ItemCount = ({ initial = 1, stock, onAdd, btn }) => {

    const { count, increment, decrement } = useCount(1, stock, initial)

    const [outOfStock,setOutOfStock]=useState(false)

    const handleOnAdd = () => {

        if(stock===0){

            setOutOfStock(true)
        }else{

        onAdd(count)
    }
    }
    return (
        <div className='div_itemcount'>

            {btn ?  <p>Este producto ya se encuentra en el carrito.</p>   :
            <div>
                {outOfStock ?  <p>No hay stock disponible</p> :
                    <div>
                <h2>Cantidad: {count} </h2>
                <div >
                <button onClick={decrement}>-</button>
                <button onClick={handleOnAdd}>Agregar al carrtito</button>
                <button onClick={increment}>+</button>
                </div>
                </div>
                }
            </div>

}
        </div>
    )
}

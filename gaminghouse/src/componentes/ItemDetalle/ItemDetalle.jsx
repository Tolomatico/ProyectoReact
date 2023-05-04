import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"



export const ItemDetalle = ({ producto }) => {

  const [conCantidad, setConCantidad] = useState(false)
  const { agregarAlCart} = useCartContext()

  const onAdd = (cantidad) => {
    agregarAlCart({ ...producto, cantidad })
    setConCantidad(true)
  }

  return (

    <div className="div_detail">
      <img src={producto.imagen} className="imagen" alt="imagen" />
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
      <p>{producto.stock}u.</p>

      <div>
        {conCantidad ?

          <>
            <Link to="/"> <button>Seguir comprando</button> </Link>
            <Link to="/cart"> <button>Ir al carrito</button></Link>
          </>
          :
          <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
        }
      </div>
    </div>
  )
}

import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"



export const ItemDetalle = ({ producto }) => {

  const [conCantidad, setConCantidad] = useState(false)
  const { agregarAlCart } = useCartContext()

  const onAdd = (cantidad) => {
    agregarAlCart({ ...producto, cantidad })
    setConCantidad(true)
  }

  return (

    <div className="div_detail ">

      <div className="card_carrito" >
        <img src={producto.imagen} alt="imagen" className="imagen card_img" />
        <div className="div_info" >
          <h3>Producto:{producto.nombre}</h3>
          <p>Precio:${producto.precio}</p>
          <p>Unidades:{producto.stock}</p>
        </div>
        {conCantidad ?

          <div className='div_itemcount'>
            <Link to="/"> <button>Seguir comprando</button> </Link>
            <Link to="/cart"> <button>Ir al carrito</button></Link>
          </div>
          :
          <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
        }
      </div>
    </div>
  )
}

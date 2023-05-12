import { Link } from "react-router-dom"
import { useState } from "react"

import { useCartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"



export const ItemDetail = ({ product }) => {

  const [emptyCart, setEmptyCart] = useState(false)
  const { addToCart, cartList } = useCartContext()
  const [btnOff, setBtnOff] = useState(false)



  const onAdd = (quantity) => {

    const indice = cartList.findIndex(prod => prod.id === product.id)


    if (indice === -1) {


      addToCart({ ...product, quantity })
      setEmptyCart(true);
    } else {

      setBtnOff(true)
    }

  }


  return (

    <div className="div_detail ">

      <div className="card_carrito" >
        <img src={product.imagen} alt="imagen" className="imagen card_img" />
        <div className="div_info" >
          <h3>{product.nombre}</h3>
          <p>Precio:${product.precio}</p>
          <p>Unidades:{product.stock}</p>
        </div>
        {emptyCart ?

          <div className='div_itemcount'>
            <Link to="/"> <button>Seguir comprando</button> </Link>
            <Link to="/carrito"> <button>Ir al carrito</button></Link>
          </div>
          :

          <ItemCount initial={1} stock={product.stock} onAdd={onAdd} btn={btnOff} />
        }
      </div>
    </div>
  )
}

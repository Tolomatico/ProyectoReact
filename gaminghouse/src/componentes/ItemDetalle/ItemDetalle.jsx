import { useCartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"



export const ItemDetalle = ({ producto }) => {

    const { agregarAlCart , cartList} = useCartContext()

   const onAdd = (cantidad) => {

    console.log(cantidad )

  //  agregarAlCart({producto})

 }

  return (

    <div >
      <img src={producto.imagen} alt="" />
      <p>{producto.nombre}</p>
      <p>{producto.precio}</p>
      <p>{producto.stock}</p>

      <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />



    </div>
  )
}

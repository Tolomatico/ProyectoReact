import { ItemCount } from "../ItemCount/ItemCount"


export const ItemDetalle = ({producto}) => {
  
    const onAdd=(cantidad)=>{
   
           console.log(cantidad)
         
         }
   

  return (

<div>
    <img src={producto.imagen} alt="" />
    <p>{producto.nombre}</p>
    <p>{producto.precio}</p>
    <p>{producto.stock}</p>

    <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
   
 </div>
  )
}

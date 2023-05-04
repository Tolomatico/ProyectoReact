import { memo } from "react"
import { Link } from "react-router-dom"


export const Item = memo(({ producto }) => {

    return (

        <div key={producto.id} className="card_item">



            <img className={"imagen"} src={producto.imagen} alt="imagen" />

           
                <h3>{producto.nombre}</h3>
                <p>${producto.precio}</p>
                <p>{producto.stock}u.</p>
                <Link to={`/detail/${producto.id}`}><button>Detalle</button></Link>
            
        </div>

    )
})

import { Link } from "react-router-dom"


export const Item = ({ product }) => {

    return (

        <div key={product.id} className="card_item">



            <img className={"imagen"} src={product.imagen} alt="imagen" />

           
                <h3>{product.nombre}</h3>
                <p>${product.precio}</p>
                <p>{product.stock}u.</p>
                <Link to={`/detalle/${product.id}`}><button>Detalle</button></Link>
            
        </div>

    )
}

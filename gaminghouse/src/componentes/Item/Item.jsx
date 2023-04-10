
export const Item = ({ producto }) => {

    return (

        <div key={producto.id}>  <div >

            <img className={"imagen"} src={producto.imagen} alt="imagen" />

            <p>{producto.nombre}</p>
            <p>{producto.precio}</p>
            <p>{producto.stock}</p>
            <button>Detalle</button>

        </div>
        </div>


    )
}
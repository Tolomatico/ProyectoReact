import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, doc, getDoc, getFirestore, updateDoc } from "firebase/firestore"

export const CartContainer = () => {

    const { cartList, vaciarCarrito, totalCarrito, eliminarProducto } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const [formData, setFormData] = useState({ nombre: "", telefono: "", email: "" })

    console.log(cartList)

    console.log(formData)


    const hanndleVaciarCarrito = () => {

   vaciarCarrito()

        }

      

    

const hanndleEnviarOrden = (event) => {

    event.preventDefault()
    const precio = totalCarrito()
    const order = {
        buyer: formData,
        productos: cartList.map(({ id, nombre, precio, cantidad }) => ({ id, nombre, precio, cantidad })),
        total: { precio }
    }

    const db = getFirestore()
    const queryCollection = collection(db, "orders")

     for (let i = 0; i < cartList.length; i++) {

            const productoOrdenado = cartList[i].cantidad
    
            const productDoc = doc(db, "productos", cartList[i].id)
            getDoc(productDoc)
                .then((productGetDoc) => {
                    const stockActual = productGetDoc.data().stock
                    const nuevoStock = stockActual - productoOrdenado 
                    updateDoc(productDoc, { stock: nuevoStock })
                })
                .catch((err) => {
                    console.error(err)
                })}

   


    addDoc(queryCollection, order)
        .then(resp => setOrderId(resp.id))
        .catch(err => console.log(err))
        .finally(() => console.log("finalizar compra"))

       

    vaciarCarrito()

    /// updates
    // const queryDoc =doc(db,"productos","7W8c1cQs7SZVEap2joy4")
    // updateDoc(queryDoc,{
    //     stock: 99,
    // })
}

const handleOnChangeNombre = (event) => {

    setFormData({
        ...formData,
        [event.target.name]: [event.target.value]
    })



}

const handleOnChangeTelefono = (event) => {

    if (isNaN(event.target.value)) {

        console.log(formData)
    } else {

        setFormData({
            ...formData,
            [event.target.name]: [event.target.value],

        })
    }
}




const handleOnChangeEmail = (event) => {

    setFormData({
        ...formData,
        [event.target.name]: [event.target.value],

    })
}




return (
    <div className="div_cart"> {orderId !== null ?

        <p>"Muchas gracias por su compra", el id de su compra es: {orderId}</p>

        :

        <div>

            <h1>  Tú carrito </h1>

            {cartList.map((producto) => (
                <div key={producto.id} className="card_carrito" >

                    <div className="card_carrito" >
                        <img src={producto.imagen} alt="imagen" className="imagen card_img" />
                        <div className="div_info" >
                            <h3>Producto:{producto.nombre}</h3>
                            <p>Precio:${producto.precio}</p>
                            <p>Unidades:{producto.cantidad}</p>
                        </div>
                    </div>
                    <div className="div_btn">

                        <button className="btn btn-danger" onClick={() => eliminarProducto(producto.id, producto.cantidad)}>Elimar del carrito</button>
                    </div>
                </div>




            ))}


            <div>

                {cartList.length !== 0 ?
                    <div>
                        <h3>Precio total: ${totalCarrito()}</h3>
                        <button onClick={hanndleVaciarCarrito}>Vaciar carrito</button>

                        <form onSubmit={hanndleEnviarOrden}>
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Ingrese su nombre"
                                onChange={handleOnChangeNombre}
                                value={formData.nombre}
                            />
                            <input
                                type="text"
                                name="telefono"
                                placeholder="Ingrese su telefono"
                                onChange={handleOnChangeTelefono}
                                value={formData.telefono}
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder="Ingrese su email"
                                onChange={handleOnChangeEmail}
                                value={formData.email}
                            />

                            <button >Finalizar compra</button>
                        </form>
                    </div>

                    : <p>No tiene ningún producto en el carrito</p>
                }
            </div>

        </div>}
    </div>
)
}

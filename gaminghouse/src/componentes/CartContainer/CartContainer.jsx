import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, doc, getDoc, getFirestore, updateDoc } from "firebase/firestore"


export const CartContainer = () => {

    const { cartList, clearCart, totalCart, clearProduct } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const [formData, setFormData] = useState({ name: "", phone: "", email: "" })
    const [email, setEmail] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")
    const [error, setError] = useState("")
    const [checkout, setCheckout] = useState(false)

  

    const handleOnChangeNombre = (event) => {

        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })


    }

    const handleOnChangePhone = (event) => {

        if (isNaN(event.target.value)) {

            setError("Ingrese un número.")
        } else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
            })
        }
    }

    const handleSubmit = (event) => {

        event.preventDefault()

        if (email === confirmEmail) {

            setFormData({
                ...formData, email
            })

            setError("")
           setCheckout(true)


        } else {

            setError("Los mails no coinciden.")
        }
    }









    const handleClearCart = () => {
        clearCart()
    }


    const handleSendOrder = (event) => {

        event.preventDefault()

        const price = totalCart()
        const order = {
            buyer: formData,
            products: cartList.map(({ id, nombre, precio, quantity }) => ({ id, nombre, precio, quantity })),
            total: { price }
        }

        const db = getFirestore()
        const queryCollection = collection(db, "orders")

        for (let i = 0; i < cartList.length; i++) {

            const orderedProducts = cartList[i].quantity

            const productDoc = doc(db, "productos", cartList[i].id)
            getDoc(productDoc)
                .then((productGetDoc) => {
                    const actualStock = productGetDoc.data().stock
                    const newStock = actualStock - orderedProducts
                    updateDoc(productDoc, { stock: newStock })
                })
                .catch((err) => {
                    console.error(err)
                })
        }

        addDoc(queryCollection, order)
            .then(resp => setOrderId(resp.id))
            .catch(err => console.log(err))
        clearCart()


    }

    return (
        <div className="div_cart"> {orderId !== null ?

            <p>"Muchas gracias por su compra", el id de su compra es: {orderId}</p>

            :

            <div>

                <h1>  Tú carrito </h1>

                {cartList.map((product) => (
                    <div key={product.id} className="card_carrito" >

                        <div className="card_carrito" >
                            <img src={product.imagen} alt="imagen" className="imagen card_img" />
                            <div className="div_info" >
                                <h3>{product.nombre}</h3>
                                <p>Precio:${product.precio}</p>
                                <p>Unidades:{product.quantity}</p>
                            </div>
                        </div>
                        <div className="div_btn">

                            <button className="btn btn-danger" onClick={() => clearProduct(product.id, product.quantity)}>Elimar del carrito</button>
                        </div>
                    </div>




                ))}


                <div>

                    {cartList.length !== 0 ?
                        <div>
                            <h3>Precio total: ${totalCart()}</h3>
                            <button onClick={handleClearCart}>Vaciar carrito</button>

                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Ingrese su nombre"
                                    onChange={handleOnChangeNombre}
                                    value={formData.name}
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Ingrese su telefono"
                                    onChange={handleOnChangePhone}
                                    value={formData.phone}
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Ingrese su email"
                                    onChange={(event) => setEmail(event.target.value)}
                                    value={email}
                                />
                                <input
                                    type="email"
                                    name="confirmEmail"
                                    placeholder="Confirme su email"
                                    onChange={(event) => setConfirmEmail(event.target.value)}
                                    value={confirmEmail}
                                />

                                <p className="error">{error}</p>

                                {checkout ? <button onClick={handleSendOrder} > Finalizar compra </button> : <button >Confirmar Datos</button>}
                            </form>




                        </div>

                        : <p>No tiene ningún product en el carrito</p>
                    }
                </div>

            </div>}
        </div>


    )
}

import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { createContext, useContext, useState } from "react";



export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const agregarAlCart = (newProduct) => {

        const indice = cartList.findIndex((producto => producto.id === newProduct.id))

        if (indice == -1) {


            setCartList([...cartList, newProduct])
        }

        else  {
            cartList[indice].cantidad += newProduct.cantidad
            setCartList([...cartList])
        }
    }

    const vaciarCarrito = () => {
        
        setCartList([])
    }

    const totalCarrito = () => {
        return cartList.reduce((precioTotal, producto) =>
            precioTotal = precioTotal + (producto.precio * producto.cantidad), 0)
    }

    const cantidadEnCarrito = () => {
        return cartList.reduce((cantidadTotal, cantidadProducto) =>
            cantidadTotal = cantidadTotal + cantidadProducto.cantidad, 0)

    }

    const eliminarProducto = (pid,pcantidad) => {
        setCartList(cartList.filter(producto => producto.id !== pid))

    const productoActual=+ pcantidad 
  
    const db =getFirestore()
    
    const productDoc=doc(db,"productos",pid)
    updateDoc(productDoc,{stock:productoActual})


    }



    return (

        <CartContext.Provider
            value={{
                cartList,
                agregarAlCart,
                vaciarCarrito,
                totalCarrito,
                cantidadEnCarrito,
                eliminarProducto
            }}>

            {children}
        </CartContext.Provider>
    )
}


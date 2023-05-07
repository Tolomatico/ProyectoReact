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

         else if (cartList[indice].cantidad + newProduct.cantidad > newProduct.stock ){

             console.log("No hay stock suficiente")

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

    const eliminarProducto = (pid) => {
        setCartList(cartList.filter(producto => producto.id !== pid))
        
    
    }



    return (

        <CartContext.Provider
            value={{
                cartList,
                agregarAlCart,
                vaciarCarrito,
                totalCarrito,
                cantidadEnCarrito,
                eliminarProducto,
                
               
            }}>

            {children}
        </CartContext.Provider>
    )
}


import { createContext, useContext, useState } from "react";



export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    
    const addToCart = (newProduct) => {

        const index = cartList.findIndex((product => product.id === newProduct.id))

        if (index == -1) {


            setCartList([...cartList, newProduct])
        }

         else if (cartList[index].quantity + newProduct.quantity > newProduct.stock ){

          

        }

        else  {
            cartList[index].quantity += newProduct.quantity
            setCartList([...cartList])
        }
    }

    const clearCart = () => {
        
        setCartList([])
    }

    const totalCart = () => {
        return cartList.reduce((totalPrice, product) =>
            totalPrice = totalPrice + (product.precio * product.quantity), 0)
    }

    const quantityInTheCart = () => {
        return cartList.reduce((totalQuantity, QuantityOfProduct) =>
            totalQuantity = totalQuantity + QuantityOfProduct.quantity, 0)

    }

    const clearProduct = (pid) => {
        setCartList(cartList.filter(product => product.id !== pid))
        
    
    }



    return (

        <CartContext.Provider
            value={{
                cartList,
                addToCart,
                clearCart,
                totalCart,
                quantityInTheCart,
                clearProduct,
                
               
            }}>

            {children}
        </CartContext.Provider>
    )
}


import { createContext, useContext, useState } from "react";



export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const agregarAlCart = (newProduct) => {
        setCartList([...cartList, newProduct])
    }

    return (

        <CartContext.Provider value={{
            cartList,
            agregarAlCart
        }}>
            {children}
        </CartContext.Provider>
    )
}


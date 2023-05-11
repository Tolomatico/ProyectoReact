import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import { CartContextProvider } from './context/CartContext'
import { CartContainer } from './componentes/CartContainer/CartContainer'

import './App.css'

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
          <Route path="/detalle/:productId" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartContainer />} />
          <Route path="*" element={<Navigate to="/" />} />


        </Routes>




      </BrowserRouter>
    </CartContextProvider>

  )
}

export default App


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import { CartContextProvider } from './context/CartContext'


function App() {

  return (
<CartContextProvider> 
      <BrowserRouter>

      
      
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer titulo={`gaminghouse`} />} />
            <Route path="/categoria/:categoriaid" element={<ItemListContainer titulo={`gaminghouse`} />} />
            <Route path="/detail/:productoid" element={<ItemDetailContainer />} />
            <Route path="*" element={<Navigate to="/" />} />


          </Routes>


        

      </BrowserRouter>
      </CartContextProvider> 

  )
}

export default App


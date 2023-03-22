import { useState } from 'react'
import './App.css'
import ItemContainerList from './componentes/ItemContainerList/ItemContainerList'
import NavBar from './componentes/NavBar/NavBar'

function App() {
  const [carrito, setCarrito] = useState(0)

  return (

    <>
       <NavBar />

      <ItemContainerList  titulo={`gaminghouse`} />

 
   
        <div>

          <button onClick={() => setCarrito((carrito) => carrito + 1)}>
            Agregar al carrito  {carrito}
          </button>
        </div>  
 
      

</>
  )
}

export default App

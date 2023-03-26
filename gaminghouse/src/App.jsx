import { useState } from 'react'
import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'

function App() {
  const [carrito, setCarrito] = useState(0)

  return (

    <>
       <NavBar />

      <ItemListContainer  titulo={`gaminghouse`} subtitulo={`productos`} ayudapls={`como subo a github pages el proyecto`} />

 
   
        <>

          <button onClick={() => setCarrito((carrito) => carrito + 1)}>
            Agregar al carrito  {carrito}
          </button>
        </>  
 
      

</>
  )
}

export default App

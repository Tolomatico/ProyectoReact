import { useEffect, useState } from "react"
import mockFeth from "../../Utils/mockFeth"
import { ItemList } from "../ItemList/ItemList"



const ItemListContainer = ({titulo}) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {

        mockFeth()
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(() => console.log("al final"))


    }, [])

    console.log(productos)

    return (
        <>

            <h3 className={`title`}>Bienvenidos a {titulo}</h3>


           
        <div style={{
            
            display: `flex`,
            flexDirection: "row",
            flexWrap: `wrap`,
            gap: `20px`,
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
        }}>

            {productos.length !== 0 ?

<ItemList productos={productos}/>

            

                : <h2>Cargando... </h2>

            }
        </div>
           
        </>
    )
}

export default ItemListContainer


import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { Loading } from "../Loading/Loading"
import { collection, getDoc, getFirestore, doc, getDocs, query, where, } from "firebase/firestore"
import { Filter } from "../Filter/Filter"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { categoriaid } = useParams()
    const [filtroPrecio, setFiltroPrecio] = useState("")




    useEffect(() => {

        const db = getFirestore()
        const queryCollection = collection(db, "productos")

        if (categoriaid) {

            const queryFilter = query(queryCollection, where("categoria", "==", categoriaid))
            getDocs(queryFilter)
                .then(resp => setProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
                .catch(err => console.log(err))
                .finally(() => setIsLoading(false))
        }
        else {

            getDocs(queryCollection)
                .then(resp => setProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
                .catch(err => console.log(err))
                .finally(() => setIsLoading(false))
        }
    }, [categoriaid])


    const handleFiltroPrecio = () => {

        if (filtroPrecio === "menorPrecio") {
            return [...productos].sort((a, b) => a.precio - b.precio)

        } else if (filtroPrecio === "mayorPrecio") {
            return [...productos].sort((a, b) => b.precio - a.precio)

        } else {
            return productos
        }
    }


    const handleProductosFiltrados = ({ filterState, filterOnChange }) => {

        return (

            <>
                <div className="div_buscador">
                    <h3 className="buscador">Buscar producto</h3>

                    <input className="input_buscador" type="text" value={filterState} onChange={filterOnChange} placeholder="Nombre del producto..." />

                    <select className="select_filtro" value={filtroPrecio} onChange={(event) => setFiltroPrecio(event.target.value)}>
                    <option >Ordenar por precio</option>
                    <option value="menorPrecio">Menor precio</option>
                    <option value="mayorPrecio">Mayor precio</option>
                </select>
                </div>

               

                <div className="listcard_container">
                    <ItemList

                        productos={filterState === "" ? handleFiltroPrecio() : handleFiltroPrecio().filter(producto => producto.nombre.toLowerCase().includes(filterState))

                        }
                    />
                </div>
            </>

        )
    }


    return (
        <div >


            {isLoading ?

                <Loading />
                :

                <Filter className="listcard_container">


                    {handleProductosFiltrados}

                </Filter>
            }


        </div>
    )
}

export default ItemListContainer
import { memo, useEffect, useState } from "react"

import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { Loading } from "../Loading/Loading"
import { collection, getDoc, getFirestore, doc, getDocs, query, where, } from "firebase/firestore"
import { Filter } from "../Filter/Filter"

const ItemListContainer = ({ titulo }) => {
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { categoriaid } = useParams()


    // console.log(categoriaid)

    // useEffect(() => {

    //     if (categoriaid) {

    //         mockFeth()
    //             .then(resp => setProductos(resp.filter(prod => prod.categoria === categoriaid)))
    //             .catch(err => console.log(err))
    //             .finally(() => console.log("al final"))


    //     }
    //     else {
    //         mockFeth()
    //             .then(resp => setProductos(resp))
    //             .catch(err => console.log(err))
    //             .finally(() => setIsLoading(false))
    //     }

    // }, [categoriaid])


    // useEffect(() => {

    //     const db = getFirestore()
    //     const queryDoc = doc(db, "productos", "7W8c1cQs7SZVEap2joy4")
    //     getDoc(queryDoc)
    //     .then(resp=>console.log({id:resp.id,...resp.data()}))
    //  }, [])



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


    const handleProductosFiltrados = ({ filterState, filterOnChange }) => {

        return (

            <>
                <div className="div_buscador">
                    <h3 className="buscador">Buscar producto</h3>

                    <input className="input_buscador" type="text" value={filterState} onChange={filterOnChange} placeholder="Nombre del producto..." />
                </div>
                <div className="listcard_container">
                    <ItemList

                        productos={filterState === "" ? productos : productos.filter(producto => producto.nombre.toLowerCase().includes(filterState))

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
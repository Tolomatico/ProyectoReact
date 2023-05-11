import { collection, getFirestore, getDocs, query, where, } from "firebase/firestore"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { ItemList } from "../ItemList/ItemList"
import { Loading } from "../Loading/Loading"
import { Filter } from "../Filter/Filter"



const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { categoryId } = useParams()
    const [filterPrice, setFilterPrice] = useState("")




    useEffect(() => {


        const db = getFirestore()
        const queryCollection = collection(db, "productos")



        const queryFilter = categoryId ? query(queryCollection, where("categoria", "==", categoryId)) : queryCollection
        getDocs(queryFilter)
            .then(resp => setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() }))))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))


    }, [categoryId])





    const handleFilterPrice = () => {

        if (filterPrice === "lowerPrice") {
            return [...products].sort((a, b) => a.precio - b.precio)

        } else if (filterPrice === "higherPrice") {
            return [...products].sort((a, b) => b.precio - a.precio)

        } else {
            return products
        }
    }


    const filterProducts = ({ filterState, filterOnChange }) => {

        return (

            <>
                <div className="div_buscador">
                    <h3 className="buscador">Buscar producto</h3>

                    <input className="input_buscador" type="text" value={filterState} onChange={filterOnChange} placeholder="Nombre del product..." />

                    <select className="select_filtro" value={filterPrice} onChange={(event) => setFilterPrice(event.target.value)}>
                        <option >Ordenar por precio</option>
                        <option value="lowerPrice">Menor precio</option>
                        <option value="higherPrice">Mayor precio</option>
                    </select>
                </div>



                <div className="listcard_container">
                    <ItemList

                        products={filterState === "" ? handleFilterPrice() : handleFilterPrice().filter(product => product.nombre.toLowerCase().includes(filterState))

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


                    {filterProducts}

                </Filter>
            }


        </div>
    )
}

export default ItemListContainer
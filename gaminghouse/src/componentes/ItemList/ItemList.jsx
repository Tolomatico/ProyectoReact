import { Item } from "../Item/Item"

export const ItemList = ({ productos }) => {

    return (

        productos.map(producto => <Item producto={producto}/>
        ))
}
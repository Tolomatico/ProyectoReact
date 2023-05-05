import { useCount } from '../../hooks/useCount'

export const ItemCount = ({ initial = 1, stock, min = 1, onAdd }) => {

    const { contador, increment, decrement } = useCount(1, stock, initial)

    const handleOnAdd = () => {

        if(stock<1){

            console.log("no hay stock")
        } else {
        onAdd(contador)}
    }
    return (
        <div className='div_itemcount'>
            <div>
                <h2>Cantidad: {contador} </h2>

                <div >
                <button onClick={decrement}>-</button>
                <button onClick={handleOnAdd} >Agregar al carrtito</button>
                <button onClick={increment}>+</button>
                </div>
            </div>
        </div>
    )
}

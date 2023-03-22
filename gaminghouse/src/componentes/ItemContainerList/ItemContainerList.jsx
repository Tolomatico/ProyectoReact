const ItemContainerList = (props) => {

    const {titulo}=props
    console.log(titulo)
    return (
        <>

            <h3 className={`title`}>Bienvenidos a {titulo}</h3>
            
        </>
    )
}

export default ItemContainerList


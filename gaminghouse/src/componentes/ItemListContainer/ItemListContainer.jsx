const ItemListContainer = ({titulo,subtitulo,ayudapls}) => {

    return (
        <>

            <h3 className={`title`}>Bienvenidos a {titulo}</h3>
            <h4 className={`title`}>Subtitulos de {subtitulo}</h4>
            <h5 className={`title`}>Profe {ayudapls}</h5>
        </>
    )
}

export default ItemListContainer

import CartWidget from "../CartWidget/CartWidget"

function NavBar() {

    return (
        <div className={`navBar`}>

            <div><h1>GamingHouse</h1></div>

            <div> <input className={`barraBusqueda`} type="search" placeholder="Buscar producto" />
            </div>
            <ul>
            <li>  <a href=""> Placas de video</a></li>
            <li>  <a href="">Procesadores</a></li>
            <li>  <a href="">Memorias Ram</a></li>
            <li>  <a href="">Mothers</a></li>
            </ul>

            <div>
                <CartWidget />
            </div>

        </div>
    )
}

export default NavBar
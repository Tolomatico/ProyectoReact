import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';

function NavBar() {

    return (

        <Container className={`navBar`}>
        

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

       
        </Container> 
    )
}

export default NavBar
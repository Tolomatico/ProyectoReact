import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';

function NavBar() {

    return (

        <Container className={`navBar`}>
        

            <div><h1><Link to="/">GamingHouse</Link></h1></div>

            <div> <input className={`barraBusqueda`} type="search" placeholder="Buscar producto" />
            </div>
            <ul>
            <li>  <Link to="/categoria/placasdevideo"> Placas de video</Link></li>
            <li>  <Link to="/categoria/procesadores">Procesadores</Link></li>
            <li>  <Link to="/categoria/memoriasram">Memorias Ram</Link></li>
            <li>  <Link to="/categoria/mothers">Mothers</Link></li>
            </ul>

            <div>
                  <Link to="/cart"><CartWidget /> </Link>
            </div>

       
        </Container> 
    )
}

export default NavBar
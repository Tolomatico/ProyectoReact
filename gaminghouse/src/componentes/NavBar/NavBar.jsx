import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"


function NavBar() {

    return (

        

            <div className={`navBar`}>


                <h1><Link to="/">GamingHouse</Link></h1>


                <ul>
                    <li>  <Link to="/categoria/placasdevideo"> Placas de video</Link></li>
                    <li>  <Link to="/categoria/procesadores">Procesadores</Link></li>
                    <li>  <Link to="/categoria/memoriasram">Memorias Ram</Link></li>
                    <li>  <Link to="/categoria/mothers">Mothers</Link></li>
                </ul>

                <div>
                    <Link to="/cart">
                        <CartWidget />
                    </Link>
                </div>


            </div>
      
    )
}

export default NavBar

import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">
                <button className="botonMenu">Home</button>
            </Link>
            <Link to="/type/Planta">
                <button className="btn btn-outline-dark mx-2">Planta</button>
            </Link>
            <Link to="/type/Fuego">
                <button className="btn btn-outline-dark mx-2">Fuego</button>
            </Link>
            <Link to="/Cart">
                <button className="botonMenu">Carrito</button>
            </Link>

        </nav>
    )
}

import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">
                <button className="botonMenu">Home</button>
            </Link>            
            <Link to="/Cart">
                <button className="botonMenu">Carrito</button>
            </Link>

        </nav>
    )
}
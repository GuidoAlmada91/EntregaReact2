
import { Link } from "react-router-dom"
import { Character } from "../Character/Character"

export const CharacterDetail = ({ img, name, id, precio, tipo, ability1, ability2 }) => {
    return (
        <>
            <div className="tarjeta">
                <div className="imagenTarjeta">
                    <img src={img} alt="" />
                </div>
                <div className="datosTarjeta">
                <p>° Nombre: {name} </p>
                <p>° Id: {id}</p>
                <p>° Tipo: {tipo}</p>
                <p>° Ability: {ability1}</p>
                <p>° Ability 2: {ability2}</p>
                </div>
                <Link to="/">
                    <button className="btn btn-primary">Volver</button>
                </Link>
            </div>
            
        </>

    )
}



import { useContext } from "react";
import { CharacterCount } from "../CharacterCount/CharacterCount";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";


export const CharacterDetail = ({ id, name,type, img, ability1, ability2, price, stock }) => {

  const { addItem } = useContext(CartContext);

  const onAdd = ( quantity ) => { 

    const pokemon = {
      id,
      price,
      name,
      ability1
    }
    
    addItem(pokemon, quantity)

    Swal.fire({
      icon: "success",
      title: "Se agrego el producto al carrito"
    })

   }

  return (
    <div className="border m-2">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <img src={img} alt="" />
          <p className="card-text"> {type} </p>
          <p> Habilidad: {ability1} </p>
          <p>Precio: {price} </p>
          <CharacterCount stock={stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};
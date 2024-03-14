import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Character } from "../Character/Character";

export const Cart = () => {
  const { cart, clearCart, removeItem, total } = useContext(CartContext);

  const handleDeleteItem = (character) => { 
    

    Swal.fire({
      icon: "question",
      title: `¿Estas seguro que deseas eliminar ${character.name} del carrito? `,
      showCancelButton: true,
      showConfirmButton: true,
      
    }).then( resp => {
      if(resp.isConfirmed) {
        removeItem(character.id)
        Swal.fire({
          icon: "success",
          title: "Producto eliminado"
        })
      }
    })

   }

  return (
    <>
      <div className="container my-4">
        {cart.map((character) => (
          <div key={character.id} className="d-flex flex-column p-3 my-2 border border-1 w-50 ">
            <p key={character.id}>Nombre: {character.name} </p>
            <p>Cantidad: {character.quantity} </p>
            <p>Precio Unitario: {character.price} </p>
            <p>Subtotal: ${character.subTotal}</p>
            <div>
              <button className="btn btn-danger" onClick={() => handleDeleteItem(character)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        {total > 0 ? (
          <>
            <h4>Total ${total} </h4>
            <button className="btn btn-outline-success" onClick={clearCart}>
              Vaciar Carrito
            </button>
            <Link to="/checkout">
              <button className="ms-2 btn btn-success">Comprar</button>
            </Link>
          </>
        ) : (
          <h4>Carrito vacío :(</h4>
        )}
      </div>
    </>
  );
};
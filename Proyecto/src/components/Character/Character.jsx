
import { Link } from "react-router-dom";

export const Character =  ({ id, name,type, img, ability1, ability2, price, stock  }) => {
  return (
    <div className="border m-2">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <img src={img} alt="" />
          <p className="card-text"> {type} </p>
          <Link to={`/character/${id}`} >
            <button className="btn btn-outline-success">Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );


  }



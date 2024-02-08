export const Character = ({ id, name, img }) => {
  return (
    <div className="tarjetas">
      <p>Nombre: {name} </p>
      <p>Id: {id}</p>
      <img src={img} alt={Character.name} />
      <div>
        <button type="button" class="btn btn-primary"> - </button>
        <span> 0 </span>
        <button type="button" class="btn btn-primary"> + </button>

      </div>
      <button type="button" class="btn btn-primary">Detalle</button>
    </div>
  )
}



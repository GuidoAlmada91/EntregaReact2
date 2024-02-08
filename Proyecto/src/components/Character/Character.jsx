export const Character = ({id, name, img}) => {
  return (
    <div className="tarjetas">
      <p>Nombre: {name} </p>
      <p>Id: {id}</p>
      <img src={img} alt={Character.name} />
      <div>
        <button> + </button>
        <span> 1 </span>
        <button> - </button>
        
      </div>
      <button> Detalle </button>
    </div>
  )
}



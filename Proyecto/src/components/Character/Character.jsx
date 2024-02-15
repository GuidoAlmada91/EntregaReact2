import { useCount } from "../../hooks/useCount";

export const Character = ({ id, name, img, tipo, precio }) => {
  const getTypeClass = (tipo) => {
    switch (tipo) {
      case 'water':
        return 'agua';
      case 'fire':
        return 'fuego';
      case 'grass':
        return 'planta';
      case 'bug':
        return 'bicho';
      case 'normal':
        return 'normal';
      case 'poison':
        return 'veneno';
      case 'electric':
        return 'electrico';
      case 'ground':
        return 'tierra';
      case 'fairy':
        return 'hada'
      default:
        return '';
    }
  };

  const { count, increment, decrement, reset } = useCount();
  const tipoClass = getTypeClass(tipo);
  return (
    <div className={`tarjetas ${tipoClass}`}>
      <p className="nombre">Nombre: {name} </p>
      <p className="id"># {id}</p>

      <p className={`tipo ${tipoClass}`}>Tipo: {tipo}</p>
      <img src={img} alt={Character.name} />
      <div className="contenedorPrecio">
        <p className="precio"> $ {precio}</p>
      </div>
      <div>
        <button type="button" className="btn btn-primary" onClick={decrement}> - </button>
        <span> {count} </span>
        <button type="button" className="btn btn-primary" onClick={increment}> + </button>

      </div>
      <button type="button" className="btn btn-primary">AGREGAR AL CARRITO</button>
    </div>
  )
}



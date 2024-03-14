const pokecoleccion = [
    { name: "Ivysaur", img: "url-img", price: 10, type: "Planta", id: 2, stock: 10, ability1: "Overgrow", ability2: "Chlorophyll" },
  
  ];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      if (pokecoleccion.length > 0) {
        setTimeout(() => {
          resolve(pokecoleccion);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };
  
  export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
  
      if (pokecoleccion.length > 0) {
        const product = pokecoleccion.find((p) => p.id == id);
        setTimeout(() => {
          if (!product) {
            reject(`No se encuentra el producto con el id ${id}`);
          } else {
            resolve(product);
          }
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };
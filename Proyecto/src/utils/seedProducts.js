import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const pokecoleccion = [
  { name: "Ivysaur", img: "url-img", price: 10, type: "Planta", id: 2, stock: 10, ability1: "Overgrow", ability2: "Chlorophyll" },
  
];


export const seedProducts = () => { 

  pokecoleccion.forEach( pokemon => {
      // Agregamos el producto a nuestra base de datos
      addDoc( collection( db, "pokecoleccion" ),  pokemon  )
  }  )

 }
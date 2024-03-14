import React, { useEffect, useState } from "react";
import { CharacterList } from "../CharacterList/CharacterList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { useParams } from "react-router-dom";
import { seedProducts } from "../../utils/seedProducts";

export const CharacterListContainer = () => {
  const {type} = useParams ();
  const [pokecoleccion, setPokemon] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const getCharacters = ( type ) => {
    const myCharacters = type ? query( collection(db,"pokecoleccion"), where( "type", "==", type)) : collection(db,"pokecoleccion")

    getDocs(myCharacters)
      .then(response => {
        //const item = {
          //id: response.docs[0].id,
          //... response.docs[0].data()
        const pokeList = response.docs.map(doc => {
          const item = {
            id: doc.id,
            ...doc.data()

          }
          return item;

          })  
        
        setPokemon(pokeList)
        setIsloading(false);
    })
  };

  useEffect(() => {
    setIsloading(true)
    
    getCharacters(type);
  }, [type]);

  return (
    <>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <CharacterList characters={pokecoleccion} />
      )}
    </>
  );
};
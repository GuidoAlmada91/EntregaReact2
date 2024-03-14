import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterDetail } from "../CharacterDetail/CharacterDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { Character } from "../Character/Character";


export const CharacterDetailContainer = () => {

  const { id } = useParams();
  const [Character, setCharacter] = useState(null);

  const getCharacters = (id) => { 
    // Referencia a nuestro producto
    const characterRef = doc( db, "pokecoleccion", id );

    getDoc(characterRef)
      .then( response => {
          const pokemon = {
            id: response.id,
            ...response.data()
          }

          setCharacter(pokemon);
      } )

   }

  useEffect(() => { 

   getCharacters(id);

   }, [])

  return (
    <>
    {/* Falta poner el isLoading */}
    {Character && <CharacterDetail {...Character} />}
    </>
  )
}
import { useEffect, useState } from "react";
import { Character } from "../Character/Character";

export const CharacterListContainer = () => {

  const [characters, setcharacters] = useState([])
  
  const getCharacters = async () =>{

  
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await resp.json();
    setcharacters(data.results)
    
    
  }

  useEffect(() => {
    getCharacters ();
  
  }, []);
  
  return (

    <>
      {characters.map(character => <p key={character.id}> Nombre:  {character.name}</p>)}
    </>
  )
}

import { useEffect, useState } from "react";
import { Character } from "../Character/Character";
import {CharacterList} from "../CharacterList/CharacterList"

export const CharacterListContainer = () => {

  const [characters, setcharacters] = useState([])

  const generarPrecioRandom = () => {
    return Math.floor(Math.random() * 30) + 1;
  };

  
  
  const getCharacters = async () =>{
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=50");
    const lista = await response.json();
    const {results} = lista
        
    const newcharacter = results.map(async(character) =>{
      const response = await fetch(character.url)
      const poke = await response.json()
      
      return{
        id: poke.id,
        name: poke.name,
        img: poke.sprites.other.dream_world.front_default,
        tipo: poke.types[0].type.name,
        ability1: poke.abilities[0]?.ability.name,
        ability2: poke.abilities[1]?.ability.name,
        

        
      }
    })
      setcharacters(await Promise.all(newcharacter))
    }
    
  

  useEffect(() => {
    getCharacters ();
    
  
  }, []);
  console.log(characters)
  return (
    <>
    <CharacterList characters={characters}/>
    </>
  )
  }

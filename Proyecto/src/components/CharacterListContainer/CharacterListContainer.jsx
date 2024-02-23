import React, { useEffect, useState } from "react";
import { CharacterList } from "../CharacterList/CharacterList";


export const CharacterListContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  

  const getTipos = async () => {
    try {
      const traerTipos = await fetch('https://pokeapi.co/api/v2/type/');
      const tiposPokemon = await traerTipos.json();
      const tipos = tiposPokemon.results.map((tipo) => tipo.name);
      setTypes(tipos);
    } catch (error) {
      console.error("Error al obtener tipos de Pokémon:", error);
    }
  };

  const getCharacters = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=50");
    const lista = await response.json();
    const { results } = lista;

    const newCharacters = await Promise.all(
      results.map(async (character) => {
        const response = await fetch(character.url);
        const poke = await response.json();

        // Filtrar por tipo si hay un tipo seleccionado
        if (!selectedType || poke.types.some((t) => t.type.name === selectedType)) {
          return {
            id: poke.id,
            name: poke.name,
            img: poke.sprites.other.dream_world.front_default,
            tipo: poke.types[0].type.name,
            ability1: poke.abilities[0]?.ability.name,
            ability2: poke.abilities[1]?.ability.name,
          };
        } else {
          return null; // No agregar a la lista si no cumple con el tipo seleccionado
        }
      })
    );

    setCharacters(newCharacters.filter(Boolean)); // Filtrar elementos nulos (los que no cumplen con el tipo seleccionado)
  };

  useEffect(() => {
    getTipos();
    getCharacters();
  }, [selectedType]);

  const handleTypeButtonClick = (tipo) => {
    setSelectedType(tipo);
  };

  return (
    <>
      <div className="contendorTipos">
        {types.map((tipo) => (
          <button key={tipo} className={`tipoButton ${tipo}`}  onClick={() => handleTypeButtonClick(tipo)}>
            {tipo}
          </button>
        ))}

      </div>
      <CharacterList characters={characters} />
    </>
  );
};
import { useEffect, useState } from "react";
import { CharacterDetail } from "../CharacterDetail/CharacterDetail";
import { useParams } from "react-router-dom";

export const CharacterDetailContainer = () => {
    const[character, setCharacter] = useState(null)
    const[isLoading, setIsLoading] = useState(true)

    const {id} = useParams();

    const getCharacter = async (id) => {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await resp.json();
        setCharacter(data)
        setIsLoading(false)

    }

    useEffect(() => {
        getCharacter(id);

    })

    return (
        <>
        {isLoading ? <h2>Cargando...</h2> :
        <CharacterDetail
        id={character.id}
        name={character.name}
        img={character.sprites.other.dream_world.front_default}
        tipo={character.types[0].type.name}
        ability1={character.abilities[0].ability.name}
        ability2={character.abilities[1]?.ability.name}

        
    />}
    </>
    )
}


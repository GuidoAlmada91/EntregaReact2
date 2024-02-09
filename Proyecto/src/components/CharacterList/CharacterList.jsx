import { Character } from "../Character/Character"


export const CharacterList = ({characters}) => {
  return (
    <>
      {characters.map((character) => (
      <Character key={character.id} id={character.id} name={character.name} img={character.img} tipo={character.tipo}/>
      ))}
    </>
  )
}



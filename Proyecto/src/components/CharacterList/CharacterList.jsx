import { Character } from "../Character/Character"


export const CharacterList = ({characters}) => {
  return (
    <>
      {characters.map((characters) => (
      <Character key={characters.id} id={characters.id} name={characters.name} img={characters.img} type={characters.type} habilidad1={characters.ability1}/>
      ))}
    </>
  )
}



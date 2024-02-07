
export const CharacterListContainer = () => {
  
  const getCharacters = async () =>{
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await resp.json();
    console.log(data)
      
  }

  getCharacters()
  
  return (

    <div>
      CharacterListContainer
    </div>
  )
}

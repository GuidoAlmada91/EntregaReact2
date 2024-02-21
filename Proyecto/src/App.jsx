import Cart from "./components/Cart/Cart"
import { CharacterDetail } from "./components/CharacterDetail/CharacterDetail"
import { CharacterDetailContainer } from "./components/CharacterDetailContainer/CharacterDetailContainer"
import { NavBar } from "./components/NavBar/NavBar"
import { CharacterListContainer } from "./components/characterListContainer/characterListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const App = () => {
  return (
    <>

      {/*<CharacterListContainer />*/}
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<CharacterListContainer />} />
          <Route path="/characters" element={<CharacterListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/character/:id" element={<CharacterDetailContainer/>} />
        
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App


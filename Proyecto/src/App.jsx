
import { Cart } from "./components/Cart/Cart"
import { CartContextProvider } from "./Context/CartContext"
import { CharacterDetail } from "./components/CharacterDetail/CharacterDetail"
import { CharacterDetailContainer } from "./components/CharacterDetailContainer/CharacterDetailContainer"
import { NavBar } from "./components/NavBar/NavBar"
import { CharacterListContainer } from "./components/CharacterListContainer/CharacterListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const App = () => {
  return (
    <>

      {/*<CharacterListContainer />*/}
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<CharacterListContainer />} />
            <Route path="/type/:type" element={<CharacterListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Character/:id" element={<CharacterDetailContainer />} />

          </Routes>
        </BrowserRouter>
      </CartContextProvider>



    </>
  )
}

export default App


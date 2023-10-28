import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage.jsx'
import { ChampionsProvider } from "./context/champions.jsx"
import DatailChapion from "./pages/DatailChapion.jsx"
import Navbar from "./componets/Navbar.jsx"

function App() {

  return (
   <ChampionsProvider>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<h1>items</h1>} />
          <Route path="/detail/:champion" element={<DatailChapion/>} />
          <Route path="/about" element={<h1>home</h1>} />
        </Routes>
      </BrowserRouter>
   </ChampionsProvider>
  )
}

export default App

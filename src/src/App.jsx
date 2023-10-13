import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage.jsx'


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/champeions" element={<h1>champions</h1>} />
          <Route path="/items" element={<h1>items</h1>} />
          <Route path="/detailchampion" element={<h1>home</h1>} />
          <Route path="/detailitem" element={<h1>home</h1>} />
          <Route path="/about" element={<h1>home</h1>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

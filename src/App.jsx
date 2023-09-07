import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonDetails from './pages/PokemonDetails'
import { Route, Routes } from 'react-router-dom'
import Page404 from './pages/Page404'
import PrivateRoutes from './components/auth/PrivateRoutes'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} /> 

      <Route element={<PrivateRoutes />}>
        <Route path='/pokedex' element={<Pokedex />} /> 
        <Route path='/pokedex/:pokemonId' element={<PokemonDetails />} /> 
      </Route>

      <Route path='*' element={<Page404 />} /> 
    </Routes>
  )
}

export default App

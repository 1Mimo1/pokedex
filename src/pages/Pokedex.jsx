import PokemonList from "../components/pokedex/PokemonList"
import HeaderPokedex from "../components/layout/HeaderPokedex"
import usePokedex from "../hooks/usePokedex"
import { paginateData } from "../utils/pagination"
import { useState } from "react"
import Pagination from "../components/pokedex/Pagination"

const Pokedex = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const {
    handleChange, 
    name, 
    pokemonName, 
    pokemonType, 
    pokemonsByName, 
    setPokemonName, 
    setPokemonType,
    types,
  } 
    = usePokedex()

    const {itemsInCurrentPage, lastPage, pagesInCurrentBlock} = paginateData(pokemonsByName, currentPage)

  return (
    <div className="pokedex">
      <HeaderPokedex />
      <div className="search">
        <p className="search-p"><span className="search-span">Welcome {name},</span> you can find your favorite pokemons here!</p>
        <form className="search-form">
          <div className="search-buttondiv">
            <input value={pokemonName} onChange={handleChange(setPokemonName)} className="search-input" placeholder="Search for a Pokemon..." type="text" />
          </div>
          <select value={pokemonType}onChange={handleChange(setPokemonType)} className="search-select">
            <option className="search-option" value="">All Pokemons</option>
            {
              types.map((type) => <option key={type.name} value={type.name}>{type.name}</option>)
            }
          </select>
        </form>
      </div>
      <PokemonList pokemons={itemsInCurrentPage} />
      <Pagination lastPage={lastPage} pagesInCurrentBlock={pagesInCurrentBlock} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
  )
}
export default Pokedex
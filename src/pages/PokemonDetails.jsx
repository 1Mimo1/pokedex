import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPokemonById } from "../services/pokemons"
import PokemonStat from "../components/pokemonDetail/PokemonStat"

const PokemonDetails = () => {
  const [pokemonData, setPokemonData] = useState(null)
  const {pokemonId} = useParams()
   useEffect (() => {
      getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err))
   }, [])

  return (
    <main className="pokedetails-main">
      <article className="pokedetails-article">
        <header>
          <div className="image-gradient-div">
            <img className="pokedetails-img" src={pokemonData?.image} alt=""/>
            <div className={`pokedetails-gradient ${pokemonData?.types[0]}_gradient`}></div>
          </div>
        </header>
        <section className="pokedetails-section">
          <span className={`pokedetails-span ${pokemonData?.types[0]}_span`}>{pokemonData?.name}</span>
          <PokemonStat stats={pokemonData?.stats}/>
        </section>
      </article>
    </main>
  )
}
export default PokemonDetails
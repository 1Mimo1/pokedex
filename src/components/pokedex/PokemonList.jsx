
import PokemonCard from "./PokemonCard"

const PokemonList = ({pokemons}) => {
  return (
    <div className="pokemonlist">
        {
            pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />))
        }
    </div>
  )
}
export default PokemonList
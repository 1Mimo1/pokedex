import { useEffect, useState } from "react"
import { getPokemonByUrl, joinPokemonTypes } from "../../services/pokemons"
import PokeStats from "./PokeStats"
import { Link } from "react-router-dom"

const PokemonCard = ({pokemonUrl}) => {
    const [pokemonInfo, setPokemonInfo] = useState(null)

    const bgStyleByType = {
        "grass": "grass-style", 
        "normal": "normal-style",
        "fighting": "fighting-style",
        "ice": "ice-style",
        "fire": "fire-style",
        "water": "water-style", 
        "electric": "electric-style",
        "poison": "poison-style",
        "ground": "ground-style",
        "flying": "flying-style",
        "psychic": "psychic-style",
        "bug": "bug-style",
        "rock": "rock-style",
        "ghost": "ghost-style", 
        "dragon": "dragon-style",
        "dark": "dark-style",
        "steel": "steel-style",
        "fairy": "fairy-style" 
    }
    useEffect (() => {
        getPokemonByUrl(pokemonUrl)
        .then((data) => setPokemonInfo(data))
        .catch((err) => console.log(err))
    }, []);
  return (
    <Link
    to={`/pokedex/${pokemonInfo?.id}`}
    className="link-card" >
        <div className={`article-container_div ${bgStyleByType[pokemonInfo?.types[0]]}`}>
                <header className={`header-card ${bgStyleByType[pokemonInfo?.types[0]]}_bg`}>
                    <div className="header-div_card">
                        <img className="header-img_card" src={pokemonInfo?.image} alt=""/>
                    </div>
                </header>
                <section className="section-card">
                    <div className="section-card_div">
                        <h3 className={`section-card_h3  ${bgStyleByType[pokemonInfo?.types[0]]}_words`}>
                            {pokemonInfo?.name}
                        </h3>
                        <h4 className="section-card_h4">
                            {joinPokemonTypes(pokemonInfo?.types)}
                        </h4>
                        <h5 className="section-card_h5">Types</h5>
                    </div>
                    <PokeStats stats={pokemonInfo?.stats}/>
                </section>
        </div>
    </Link>
  )
}
export default PokemonCard
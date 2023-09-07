import BarProg from "./BarProg"

const PokemonStat = ({stats}) => {
  return (
    <section >
        <h2 className="pokemonstat-h2">Stats</h2>
        <section className="pokemonstat-section">
            {
                stats?.map((stat) => <BarProg key={stat.name} stat={stat}/>)
            }
        </section>
    </section>
  )
}
export default PokemonStat
const PokeStats = ({stats}) => {
  return (
    <ul className="pokestats-ul">
        {
            stats?.map((stat) => <li className="pokestats-li" key={stat.name}>{stat.name}: <strong>{stat.value}</strong></li>)
        }
    </ul>
  )
}
export default PokeStats
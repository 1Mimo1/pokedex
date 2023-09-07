const BarProg = ({stat}) => {
    const percentage = (statValue) => {
        const MAX_V = 255
        const percent = (100 * statValue) / MAX_V 
        return 
    }
  return (
    <article className="barprog-article">
        <section>
            <h5 className="barprog-h5">{stat.name}</h5>
            <span>{stat.value}/255</span>
        </section>
    </article>
  )
}
export default BarProg
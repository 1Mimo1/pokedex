import { useDispatch } from "react-redux"
import FooterPokedex from "../components/layout/FooterPokedex"
import { trainerLogin } from "../store/slices/trainer.slice"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const trainerName = e.target.trainerName.value;
        dispatch(trainerLogin(trainerName));
        navigate("/pokedex")
    };

  return (
    <main className="main">
        <section className="section-home">
            <div className="div-home">
                <div className="home-img">
                    <img src="/images/pokedex-img.png" alt="" />
                </div>
                <div className="home-text">
                    <h2 className="home-text_h2">Hello trainer!</h2>
                    <p className="home-text_p">Give us your name...</p>
                </div>
                <div className="home-writting">
                    <form className="home-form" onSubmit={handleSubmit}>
                        <input 
                        className="home-input" 
                        id="trainerName"
                        placeholder="Your name..." 
                        type="text" 
                        />
                        <button className="home-button"> Start </button>
                    </form>
                </div>
            </div>
        </section>
        <FooterPokedex />
    </main>
  )
}
export default Home
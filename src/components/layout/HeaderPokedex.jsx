import { useDispatch } from "react-redux"
import { logout } from "../../store/slices/trainer.slice"

const HeaderPokedex = () => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <header className="header">
             <button onClick={handleLogout}className="header-circle">
                <div className="circle-wb">
                    <div className="circle-gb">
                    </div>
                </div>
            </button>
            <div className="header-red"></div>
            <div className="header-black"></div>
        </header>
      )
    }
export default HeaderPokedex
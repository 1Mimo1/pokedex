import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = () => {
    
    const {name} =  useSelector((store) => store.trainer)

    useEffect (() => {

    }, []);

    if(name) {
        return <Outlet />
    } 
    return <Navigate to="/" /> 
}
export default PrivateRoutes
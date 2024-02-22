import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ProtectedRoute = () => {
    const { isLogged } = useAuth()
    console.log(isLogged);

    return isLogged
        ? <Outlet />
        : <Navigate to="/login" />
}

export default ProtectedRoute
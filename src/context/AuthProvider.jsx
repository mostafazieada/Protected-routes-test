import { createContext, useState } from "react"


export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const token = localStorage.getItem("token")

    const [auth, setAuth] = useState({})

    const [isLogged, setIsLogged] = useState(token || false)

    return (
        <AuthContext.Provider value={{
            auth,
            setAuth,
            isLogged,
            setIsLogged
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
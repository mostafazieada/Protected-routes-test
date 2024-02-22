import { Form, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth";

const Login = () => {
    const navigate = useNavigate()
    const { setIsLogged } = useAuth()

    const handleLogin = () => {
        setIsLogged(true)
        navigate("/")
    }
    return (
        <Form method="post" action="/login" replace>
            <h1>login</h1>
            <input type="text" name={"name"} />
            <br />
            <br />
            <input type="password" name={"password"} />
            <button onClick={handleLogin} type="submit">ok</button>
        </Form>
    )
}

export default Login

export const loginAction = async ({ request }) => {
    const form = await request.formData()
    const name = form.get("name")
    const password = form.get("password")

    return null
}
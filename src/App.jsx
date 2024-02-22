import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Login, { loginAction } from "./pages/login"
import Home from "./pages/home"
import AuthProvider from "./context/AuthProvider"
import ProtectedRoute from "./pages/ProtectedRoute"

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(

    <Route path="/" >
      <Route element={<ProtectedRoute />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="login" element={<Login />} action={loginAction} />
    </Route >

  ))

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
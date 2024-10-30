import { lazy } from "react"
import { Route, Routes } from 'react-router-dom'
import { PageRoutes } from "shared/config/pages"

const MainPage = lazy(() => import('./main-page'))
const LoginPage = lazy(() => import ('./login-page'))

export default function Routing() {
    return (
        <Routes>
            <Route
                path={PageRoutes.MainPage}
                element={<MainPage />}
            />
            <Route
                path={PageRoutes.LoginPage}
                element={<LoginPage />}
            />
        </Routes>
    )
}
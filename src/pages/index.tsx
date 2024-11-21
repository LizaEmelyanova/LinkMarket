import { lazy } from "react"
import { Route, Routes } from 'react-router-dom'
import { PageRoutes } from "shared/config/pages"

const MainPage = lazy(() => import('./main-page'))
const LoginPage = lazy(() => import ('./login-page'))
const Profile = lazy(() => import('./profile'))
const GoodPage = lazy(() => import('./good-page'))
const Basket = lazy(() => import('./basket'))
const Chats = lazy(() => import('./chats'))

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
            <Route
                path={PageRoutes.Profile}
                element={<Profile />}
            />
            <Route
                path={PageRoutes.GoodPage}
                element={<GoodPage />}
            />
            <Route
                path={PageRoutes.Basket}
                element={<Basket />}
            />
            <Route
                path={PageRoutes.Chats}
                element={<Chats />}
            />
        </Routes>
    )
}
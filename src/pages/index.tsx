import { lazy } from "react"
import { Route, Routes } from 'react-router-dom'
import { PageRoutes } from "shared/config/pages"

const MainPage = lazy(() => import('./main-page'))

export default function Routing() {
    return (
        <Routes>
            <Route
                path={PageRoutes.MainPage}
                element={<MainPage />}
            />
        </Routes>
    )
}
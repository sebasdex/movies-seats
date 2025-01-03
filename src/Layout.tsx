import { Outlet } from "react-router"
import Footer from "./components/Footer"
import Header from "./components/Header"

function Layout() {
    return (
        <>
            <Header />
            <main className="container mx-auto mt-20 flex-1">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout
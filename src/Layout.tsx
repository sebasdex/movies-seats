import { Outlet } from "react-router"
import Footer from "./components/Footer"
import Header from "./components/Header"

function Layout() {
    return (
        <>
            <Header />
            <main className="container mx-auto my-20">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout
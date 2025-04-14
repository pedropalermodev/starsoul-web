import { Outlet } from "react-router-dom"
import Header from "../../components/User/Header"
import Footer from "../../components/User/Footer"

function UserLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default UserLayout
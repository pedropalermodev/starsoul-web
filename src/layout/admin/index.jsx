import './styles.scss'
import { Outlet } from "react-router-dom"
import Header from "../../components/Admin/Header"
import Aside from "../../components/Admin/Aside"

function AdminLayout() {
    return (
        <div className="adminlayout__container">
            <Aside />
            <main className="adminlayout__container-content">
                <Header />
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout
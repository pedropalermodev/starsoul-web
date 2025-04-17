import './styles.scss'
import { Outlet } from "react-router-dom"
import Header from "../../components/Admin/Header"
import Aside from "../../components/Admin/Aside"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminLayout() {
    return (
        <div className="adminlayout__container">
            <Aside />
            <main className="adminlayout__container-content">
                <Header />
                <Outlet />
            </main>
            <ToastContainer className="toast-container-custom" position="top-center" />
        </div>
    )
}

export default AdminLayout
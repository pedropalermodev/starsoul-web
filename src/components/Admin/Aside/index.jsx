import './styles.scss'
import { Link, useLocation } from 'react-router-dom'
import starsoulLogo from '../../../assets/branding/starsoul-lettermark-blue.png'

import profilePicture from '../../../assets/branding/starsoul-icon.png'

function Aside() {
    const location = useLocation()
    const currentPath = location.pathname

    const links = [
        { to: '/console/dashboard', icon: 'bi-box-fill', label: 'Dashboard' },
        { to: '/console/access-management', icon: 'bi-person-lines-fill', label: 'Acessos' },
        { to: '/console/content-management', icon: 'bi-body-text', label: 'Conteúdos' },
        { to: '/console/content-management/tags', icon: 'bi-tags-fill', label: 'Tags' },
        { to: '/console/content-management/categories', icon: 'bi-bookmarks-fill', label: 'Categorias e Seções' }
    ]

    const user = {
        name: 'Pedro Henrique', 
        email: 'pedropalermo.dev@gmail.com', 
        profilePicture: profilePicture
    }
    

    return (
        <div className="aside__container">
            <div className='aside__navbar'>
                <div className='aside__navbar-logo'>
                    <img src={starsoulLogo} alt="" />
                </div>
                <nav className='aside__navbar-content'>
                    <div className='aside__navbar-content-ul'>
                        {links.map(({ to, icon, label }, index) => (
                            <Link
                                key={index}
                                to={to}
                                className={`aside__navbar-content-ul-li ${currentPath.startsWith(to) ? 'active' : ''}`}
                            >
                                <i className={`bi ${icon}`}></i>
                                {label}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>

            <div className='aside__profile'>
                <div className='aside__profile-widget'>
                    <img src={user.profilePicture} alt="" />
                    <div className='aside__profile-widget-account'>
                        <h3 className='aside__profile-widget-account--name'>{user.name}</h3>
                        <p className='aside__profile-widget-account--email'>{user.email}</p>
                    </div>
                </div>
                <Link to={'/'} className='aside__profile-logout'>
                    <i className="bi bi-box-arrow-left"></i>
                    Logout
                </Link>
            </div>
        </div>
    )
}

export default Aside

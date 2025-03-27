import { useState } from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

// Images
import starSoulLogo from '../../assets/branding/starsoul-combinationmark-white.png';

function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className={`header ${menuOpen ? 'open' : ''}`}>
            <div className="header__content">
                <div className='header__content-logo'><img src={starSoulLogo} alt="" /></div>

                <div className="header__content-menu" onClick={toggleMenu}>
                    {menuOpen ? <i className="bi bi-x-lg" style={{color: '#fff', fontSize: '24px'}}></i> : <i className="bi bi-list" style={{color: '#fff', fontSize: '24px'}}></i>}
                </div>

                <nav className='header__content-navbar'>
                    <li className='header__content-navbar--li'>
                        <Link to={'/'}>Inicial</Link>
                        <div className='header__content-navbar--li-line'></div>
                    </li>
                    <li className='header__content-navbar--li'>
                        <Link to={'/about-meditation'}>Conheça a meditação</Link>
                        <div className='header__content-navbar--li-line'></div>
                    </li>
                    <li className='header__content-navbar--li'>
                        <Link to={'/about-us'}>Sobre Nós</Link>
                        <div className='header__content-navbar--li-line'></div>
                    </li>
                    <li className='header__content-navbar--li'>
                        <Link>Empresa StarSoul</Link>
                        <div className='header__content-navbar--li-line'></div>
                    </li>
                    <li className='header__content-navbar--li'>
                        <Link to={'/contact'}>Contato</Link>
                        <div className='header__content-navbar--li-line'></div>
                    </li>
                </nav>

                <div className="header__content-midias">
                    <i className="bi bi-facebook" style={{color: '#fff', fontSize: '20px'}}></i>
                    <i className="bi bi-instagram" style={{color: '#fff', fontSize: '20px'}}></i>
                    <i className="bi bi-youtube" style={{color: '#fff', fontSize: '20px'}}></i>
                    <i className="bi bi-twitter" style={{color: '#fff', fontSize: '20px'}}></i>
                </div>
            </div>
        </header>
    )
}

export default Header
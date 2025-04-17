import './styles.scss'

import profilePicture from '../../../assets/branding/starsoul-icon.png'


function Header() {
    return (
        <div className="headeradmin__container">
            <div className='headeradmin__profile'>
                <img src={profilePicture} alt="" />
                <p>Bem vindo(a) de volta <span>Pedro!</span></p>
            </div>
            <div className='settings'>
                <i className="bi bi-gear-wide-connected"></i>
            </div>
        </div>
    )
}

export default Header
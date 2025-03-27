import './styles.scss'
import { Link } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";

// Images
import starSoulIcon from '../../assets/branding/starsoul-lettermark-white.png';
import downloadOnAppStore from '../../assets/midias/download-on-appleStore_versionWhite.svg';
import downloadOnPlayStore from '../../assets/midias/download-on-googlePlay_versionWhite.svg';

function Footer() {
    return(
        <footer className='footer'>
            <div className="footer__content">
                <div className="footer__content-above">
                    <p>Encontre a StarSoul nas redes sociais!</p>
                    <div className="footer__content-above-midias">
                        <i className="bi bi-facebook" style={{color: '#fff', fontSize: '20px'}}></i>
                        <i className="bi bi-instagram" style={{color: '#fff', fontSize: '20px'}}></i>
                        <i className="bi bi-youtube" style={{color: '#fff', fontSize: '20px'}}></i>
                        <i className="bi bi-twitter" style={{color: '#fff', fontSize: '20px'}}></i>
                    </div>
                </div>

                <div className='footer__content-line'/>

                <div className="footer__content-main">
                    <div className="footer__content-main-box">
                        <img src={starSoulIcon} alt="starSoul Logo" />
                        <img src={downloadOnAppStore} alt="Baixe pela App Store" />
                        <img src={downloadOnPlayStore} alt="Baixe pela Google Play" />
                    </div>
                    <div className="footer__content-main-box">
                        <h4 className="footer__content-main-box--h4">SOBRE NÓS</h4>
                        <div className="footer__content-main-box--line"></div>
                        <Link className="footer__content-main-box--link" to="/about-us">Quem Somos nós?</Link>
                        <Link className="footer__content-main-box--link" to="/about-meditation">Sobre a meditação</Link>
                        <Link className="footer__content-main-box--link" to="/faq">FAQ</Link>
                    </div>
                    <div className="footer__content-main-box">
                        <h4 className="footer__content-main-box--h4">LINKS</h4>
                        <div className="footer__content-main-box--line"></div>
                        <Link className="footer__content-main-box--link" to="/">Inicial</Link>
                        <Link className="footer__content-main-box--link" to="/contact">Contato</Link>
                        <Link className="footer__content-main-box--link" to="/faq">Políticas de Privacidade e Termos de Uso</Link>
                        <Link className="footer__content-main-box--link" to="/console/auth">Entre como administrador</Link>
                    </div>
                    <div className="footer__content-main-box">
                        <h4 className="footer__content-main-box--h4">CONTATO</h4>
                        <div className="footer__content-main-box--line"></div>
                        <div className="footer__content-main-box-div">
                            <div className="footer__content-main-box-div--contact">
                                <i className="bi bi-house-fill" style={{color: '#fff', fontSize: '20px'}}></i>
                                <p>R. interna Grupo Bandeirante 138 - Jardim Belval | Barueri - São Paulo</p>
                            </div>
                            <div className="footer__content-main-box-div--contact">
                                <i className="bi bi-envelope-fill" style={{color: '#fff', fontSize: '20px'}}></i>
                                <p>starsoul.empresa@gmail.com</p>
                            </div>
                            <div className="footer__content-main-box-div--contact">
                                <i className="bi bi-telephone-fill" style={{color: '#fff', fontSize: '20px'}}></i>
                                <p>(11) 12345-6789</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='footer__content-line'/>

                <div className="footer__content">
                    <div className="footer__content-below"><p>© 2025 StarSoul - Meditações e Guias para conhecimento. Todos os direitos reservados.</p></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
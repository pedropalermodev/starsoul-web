import './styles.scss';

import Container from '../../../components/User/Container';
import Content from '../../../components/User/Content';
import Button from '../../../components/User/Button'

function Contact(){
    return(
        <>
            <Container className='contact__container'>
                <Content className='contact__container-hero'>
                    <div className="contact__container-hero-box">
                        <h1 className='contact__container-hero-box--title'>Sua mensagem <br/> é importante para nós.
                        <br/>Estamos à disposição para o que você  <br/> precisar.</h1>
                        <h3 className='contact__container-hero-box--subtitle'>Sua dúvida ou feedback são sempre bem-vindos.  ⭐ ✨</h3>
                        <div className='contact__container-hero-box-email'>
                            <div className='contact__container-hero-box-email--icon'><i className='bi bi-envelope' style={{color: 'white', fontSize: 18}} /></div>
                            <div className='contact__container-hero-box-email-text'>
                                <p className='contact__container-hero-box-email-text--title' >Fale conosco pelo email</p>
                                <p className='contact__container-hero-box-email-text--email'>starsoul.empresa@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact__container-hero-box">
                        <h1 className='contact__container-hero-box--message'>Envie sua dúvida e receba nosso suporte. 🚀</h1>
                        <form action="" className='contact__container-hero-box-form'>
                            <input type="text" name='Name' className="contact__container-hero-box-form--input" placeholder='Digite seu nome*' />
                            <input type="text" name='Email' className="contact__container-hero-box-form--input" placeholder='Informe seu email*' />
                            <input type="text" name='Subject' className="contact__container-hero-box-form--input" placeholder='De qual assunto sua mensagem trata?*' />
                            <p style={{fontWeight: 600}}>Diga-nos mais sobre o seu problema*</p>
                            <textarea className='contact__container-hero-box-form--input' name="Message" rows={8} style={{resize: 'none'}} />
                            <button className='btn' type='submit'>Enviar Mensagem</button>
                        </form>

                    </div>
                </Content>
            </Container>

            <Container className='contact__container'>
                <Content className='contact__container-address'>
                <iframe className='contact__container-address--map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.560411723541!2d-46.89235592571575!3d-23.512337959790994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03e63bc7a06d%3A0xc14462a7d6d04032!2sITB%20Bras%C3%ADlio%20Flores%20de%20Azevedo%20(FIEB)!5e0!3m2!1spt-BR!2sbr!4v1721347004819!5m2!1spt-BR!2sbr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Content>
            </Container>
        </>
    )
}

export default Contact;
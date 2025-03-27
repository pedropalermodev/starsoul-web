import './styles.scss';

import Container from '../../components/Container'
import Content from '../../components/Content'


function AboutMeditation(){
    return(
        <div className='aboutmeditation'>
            <Container className='aboutmeditation__container'>
                <Content className='aboutmeditation__container-content'>
                    <aside className="aboutmeditation__container-content-box">
                        <div className='aboutmeditation__container-content-box-aside'>
                            <h1 className='aboutmeditation__container-content-box-aside--h1'>Nesta página</h1>
                            <a href="" className="aboutmeditation__container-content-box-aside--link">Introdução à Meditação</a>
                            <a href="" className="aboutmeditation__container-content-box-aside--link">Origem e Evolução</a>
                            <a href="" className="aboutmeditation__container-content-box-aside--link">Vantagens para Corpo e Mente</a>
                            <a href="" className="aboutmeditation__container-content-box-aside--link">Passo a Passo para Praticar</a>
                            <a href="" className="aboutmeditation__container-content-box-aside--link">Impacto na Saúde Mental</a>
                            <a href="" className="aboutmeditation__container-content-box-aside--link">Métodos e Abordagens Populares</a>
                            <a href="" className="aboutmeditation__container-content-box-aside--link">Os 10 Princípios Essenciais</a>
                            <a href="" className="aboutmeditation__container-content-box-aside--link">Verdades e Mal-entendidos</a>
                        </div>
                    </aside>

                    <div className='aboutmeditation__container-content-box'> 
                        <div className="aboutmeditation__container-content-box-info"><h1 className="aboutmeditation__container-content-box-info--title">Introdução à Meditação</h1></div>
                        <div className="aboutmeditation__container-content-box-info"><h1 className="aboutmeditation__container-content-box-info--title">Origem e Evolução</h1></div>
                        <div className="aboutmeditation__container-content-box-info"><h1 className="aboutmeditation__container-content-box-info--title">Vantagens para Corpo e Mente</h1></div>
                        <div className="aboutmeditation__container-content-box-info"><h1 className="aboutmeditation__container-content-box-info--title">Passo a Passo para Praticar</h1></div>
                        <div className="aboutmeditation__container-content-box-info"><h1 className="aboutmeditation__container-content-box-info--title">Impacto na Saúde Mental</h1></div>
                        <div className="aboutmeditation__container-content-box-info"><h1 className="aboutmeditation__container-content-box-info--title">Métodos e Abordagens Populares</h1></div>
                        <div className="aboutmeditation__container-content-box-info"><h1 className="aboutmeditation__container-content-box-info--title">Os 10 Princípios Essenciais</h1></div>
                        <div className="aboutmeditation__container-content-box-info"><h1 className="aboutmeditation__container-content-box-info--title">Verdades e Mal-entendidos</h1></div>
                    </div>
                </Content>
            </Container>
        </div>
    )
}

export default AboutMeditation;
import { Children } from 'react'
import './styles.css'

function Banner({children}) {
    return (
        <main>
            <section className='banner banner--hero'>
                <div className='banner__title'>{children}</div>
            </section>
        </main>
    )
}

export default Banner
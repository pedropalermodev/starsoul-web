import './styles.css'

const Container = ({ children, className = '', ...props }) => {
    return(
        <section className={`container ${className}`} {...props}>
            {children}
        </section>
    )
}

export default Container
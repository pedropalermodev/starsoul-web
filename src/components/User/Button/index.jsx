import './styles.css';
import { Link } from 'react-router-dom';

const Button = ({ text, to, className = '' }) => {
    return (
        <Link 
            className={`button ${className}`} 
            to={to} 
        >
            {text}
        </Link>
    );
};

export default Button;

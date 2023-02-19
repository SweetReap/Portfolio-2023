import './styles.scss';
import { Link } from 'react-router-dom';
// import { useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar(){
    return ( 
    <nav className="nav-bar">
        <Link to="/home" className="page-title">
            <img src='./images/sam_r_logo.svg' alt='logo' width='100px' />
        </Link>
        <ul>
            <li>
                <Link to="/about_me">About Me</Link>
            </li>
            <li>
                <Link to="/contact_me">Contact</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
        </ul>
    </nav>
    )
}
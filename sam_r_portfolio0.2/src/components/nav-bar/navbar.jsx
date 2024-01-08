import './styles.scss';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return ( 
    <nav className="nav-bar">
        <Link to="/" className="page-title">
            <img src='./images/final-logo/SVG/logo-white.svg' alt='logo' width='65px' />
        </Link>
        <ul>
             <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li> 
         
            <li>
                <Link to="/about_me">About Me</Link>
            </li>
        </ul>
        <div className='contact-div'>
            <ul>
                <li className='fa-brands fa-github' />
                <li className='fa-brands fa-linkedin' />
            </ul>
        </div>
        {/* <div className='color-theme-toggle'>
            <p>Color Mode</p>
            <button>Light</button>
        </div> */}
    </nav>
    )
}
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    PRVK <i className="fas fa-fist-raised"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-links" onClick={closeMobileMenu}>Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/courses" className="nav-links" onClick={closeMobileMenu}>Courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/twm" className="nav-links" onClick={closeMobileMenu}>Train With Me | TWM</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/twu" className="nav-links" onClick={closeMobileMenu}>Train With Us | TWU</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about-us" className="nav-links" onClick={closeMobileMenu}>About Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

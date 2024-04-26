import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown';

const Navbar = () => {
    
    const [drop, setDrop] = useState(false);

    const toggleDropdown = () => {
        setDrop(!drop);
    };

    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="Logo" className='logoimg'/>
            </div>
            <div className="header">
                <ul>
                    <li>Stay</li>
                    <li>Experiences</li>
                    <li>Online Experiences</li>
                </ul>
            </div>
            <div className="left-header">
                <a href=''>Airbnb your home</a>
                <span>
                    <FontAwesomeIcon icon={faGlobe} className='globe' />
                </span>
                <button onClick={toggleDropdown} className='dropdown-menu' >
                    <FontAwesomeIcon onClick={toggleDropdown} icon={faBars} className='bar'/>
                    <FontAwesomeIcon onClick={toggleDropdown} icon={faUser} className='bar user'/>
                </button>
            </div>
            <Dropdown drop={drop} />
        </div>
    );
};

export default Navbar;

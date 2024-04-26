import React from 'react';
import './Navbar.css';

const Dropdown = ({ drop }) => {
    return (
        <div className={`dropdown ${drop ? 'active' : ''}`}>
            <div className="top">
                <ul>
                    <li>Sign Up</li>
                    <li>Log In</li>
                </ul>
            </div>
            <div className="bottom">
                <ul>
                    <li>Gift card</li>
                    <li>Airbnb home</li>
                    <li>Help center</li>
                </ul>
            </div>
        </div>
    );
}

export default Dropdown;

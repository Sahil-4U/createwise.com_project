import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div className='nav-container'>
            <div className='nav-logo'>
                Logo
            </div>
            <div className='nav-search-box'>
                <input type='search' />
                <span >search</span>
            </div>
            <div className='nav-buttons'>
                <div className='nav-cart'>
                    cart
                </div><div className='nav-login-register'>
                    login/Register
                </div>
            </div>
        </div>
    )
}

export default Navbar
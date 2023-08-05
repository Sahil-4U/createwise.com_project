import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div className='nav-container'>
            <div className='nav-logo'>
                Logo
            </div>
            <div className='nav-search-box'>
                <input type='search' placeholder='search' />
                <div className='nav-search-symbol' ><i class="fa-solid fa-magnifying-glass"></i></div>
            </div>
            <div className='nav-buttons'>
                <div className='nav-cart'>
                    <i class="fa-sharp fa-solid fa-bag-shopping"></i> cart
                </div><div className='nav-login-register'>
                    login/Register
                </div>
            </div>
        </div>
    )
}

export default Navbar
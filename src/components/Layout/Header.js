import React from 'react';
import './header.css';

function Header() {
    return (
        <div className='header-container'>
            <div>
                <select>
                    <option selected>By Category</option>
                    <option >By Name</option>
                    <option>By Products</option>
                </select>
            </div>
            <div>All Products</div>
            <div>Our Goal</div>
            <div>FAQs</div>
            <div>Contact</div>
        </div>
    )
}

export default Header
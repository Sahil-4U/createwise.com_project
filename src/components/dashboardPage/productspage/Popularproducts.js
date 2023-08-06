import React from 'react';
import './popularproducts.css';

function Popularproducts({ link }) {
    return (
        <div className='popularproducts-container' style={{ backgroundImage: `url(${link})` }}>
            <div className='popularproducts-text'>
                <h2>Lorem Ipsum</h2>
                <p>10 Products</p>
            </div>
            <div className='popularproducts-button'>
                <button>
                    SHOP NOW
                </button>
            </div>
        </div>
    )
}

export default Popularproducts
import React from 'react';
import './footerone.css';

function FooterOne() {
    return (
        <div className='footerone-container'>
            <div style={{ textAlign: 'center' }}>
                <h1>
                    SIGN FOR OUR NEWSLETTER
                </h1>
                <p>Suscribe to the weekly newsletter for all the updates</p>
            </div>
            <div className='footerone-inputbox'>
                <input type='text' placeholder='enter your email address' />
                <button>
                    SEND
                </button>
            </div>
        </div>
    )
}

export default FooterOne
import React from 'react';
import './sectiontwo.css';

function SectionTwo() {
    return (
        <div className='sectiontwo-container'>
            <div className='sectiontwo-freeshipping'>
                <div className='freeshipping-logo'>
                    <i class="fa-regular fa-truck"></i>
                </div>
                <div className='freeshipping-text'>
                    <h6>FREE SHIPPING</h6>
                    <p>on all order above $49</p>
                </div>
            </div>

            <div className='sectiontwo-freereturn'>
                <div className='freereturn-logo'>
                    <i class="fa-solid fa-rotate-left"></i>
                </div>
                <div className='freereturn-text'>
                    <h6>FREE RETURN</h6>
                    <p>Returns are free within 9 days</p>
                </div>
            </div>
            <div className='sectiontwo-payment'>
                <div className='payment-logo'>
                    <i class="fa-sharp fa-solid fa-money-bill-1-wave"></i>
                </div>
                <div className='payment-text'>
                    <h6>100% PAYMENT SECURE</h6>
                    <p>Your payments are safe with us</p>
                </div>
            </div>
            <div className='sectiontwo-support'>
                <div className='support-logo'>
                    <i class="fa-solid fa-phone-volume"></i>
                </div>
                <div className='support-text'>
                    <h6>SUPPORT 24/7</h6>
                    <p>Contact us 24 hours a day</p>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
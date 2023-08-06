import React from 'react';
import './footertwo.css';

function FooterTwo() {
    return (
        <div className='footertwo'>


            <div className='footertwo-container'>
                {/* logo one */}
                <div className='footertwo-logo'>
                    <div className='logo-divone'>
                        <h1>logo</h1>
                    </div><div className='logo-symbols'>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-pinterest"></i>
                    </div>
                </div>
                <div className='sectionone-divone'>
                    <h4>
                        BROWSE BY CATEGORIES
                    </h4>
                    <p>
                        Beverages
                    </p>
                    <p>
                        Grocery
                    </p>
                    <p>
                        Instant Meals & nodles
                    </p>
                    <p>
                        snakes and deserts
                    </p>
                </div>
                <div className='sectionone-divone'>
                    <h4>
                        BROWSE BY Countries
                    </h4>
                    <p>
                        Vitenam
                    </p>
                    <p>
                        Korea
                    </p>
                    <p>
                        Thailand
                    </p>
                    <p>
                        America
                    </p>
                </div>
                <div className='sectionone-divone'>
                    <h4>
                        INFORMATION
                    </h4>
                    <p>
                        About us
                    </p>
                    <p>
                        Contact us
                    </p>
                    <p>
                        FAQs
                    </p>
                    <p>
                        Privacy Policy
                    </p>
                    <p>
                        Term & Conditions
                    </p>
                </div>

            </div>
            {/* text one */}
            <div className='footertwo-categories'>
                <div className='category-sectionone'>
                    <h4>
                        CONTACT US
                    </h4>
                    <p>
                        <i class="fa-sharp fa-solid fa-envelope"></i>  If you have any questions, please contact us at support@xyz.com
                    </p>
                    <p>
                        <i class="fa-solid fa-location-dot"></i> Lonsage street , park villa
                    </p>
                    <p>
                        <i class="fa-solid fa-phone"></i>  +9199999999999
                    </p>
                    <p>
                        please conctact us for any query support@xyz.com
                    </p>
                </div>

            </div>
        </div>
    )
}

export default FooterTwo
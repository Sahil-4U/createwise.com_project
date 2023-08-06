import React from 'react';
import './sectionfive.css';

function SectionFive({ link }) {
    return (
        <div className='sectionfive-container' style={{
            backgroundImage: `url(${link})`
        }}>
            <button>
                SHOP NOW
            </button>
        </div>
    )
}

export default SectionFive
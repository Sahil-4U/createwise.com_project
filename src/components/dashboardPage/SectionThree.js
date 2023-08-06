import React from 'react';
import './sectionthree.css';

function SectionThree({ heading, text }) {
    return (
        <>
            <div className='sectionthree-container'>
                <div className='sectionthree-divone'>

                </div>
                <div className='sectionthree-divtwo'>
                    <h1>{heading}</h1>
                    <p>{text}</p>
                </div>
                <div className='sectionthree-divthree'>

                </div>

            </div>



        </>
    )
}

export default SectionThree
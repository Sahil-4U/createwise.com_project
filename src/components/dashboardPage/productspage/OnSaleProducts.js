import React from 'react';
import './onsaleproduct.css';

function OnSaleProducts({ url, productname, weight, pricevalue }) {
    return (
        <div className='onsaleproducts-container'>
            <div className='onsaleproducts-image'>
                <img src={url} alt='loading...' />
            </div>
            <div className='products-heading'>
                <div>
                    {productname}
                </div>
                <div>
                    {weight}
                </div>
            </div>

            <div className='product-price'>
                <h1> {pricevalue}</h1>
            </div>
            <div className='product-button'>
                <button>
                    Add To Cart
                </button>
            </div>
        </div>
    )
}

export default OnSaleProducts;
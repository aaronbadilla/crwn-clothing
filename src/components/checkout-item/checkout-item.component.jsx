import React from 'react'

import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem: {name, quantity, price, imageUrl}}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl}></img>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove'>
            <span>&#10005;</span>  
        </div>
    </div>
)

export default CheckoutItem
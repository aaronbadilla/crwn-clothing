import React from 'react'

import {connect} from 'react-redux'

import './checkout-item.styles.scss'

import {removeItemFromCart, subtractItem, addItem} from '../../redux/cart/cart.actions.js'

const CheckoutItem = ({cartItem, removeItem, addItem, subtractItem}) => {

    const {name, quantity, price, imageUrl} = cartItem;
    return (
        <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl}></img>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => subtractItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => removeItem(cartItem)}>&#10005; </div>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItemFromCart(item)),
    subtractItem: item => dispatch(subtractItem(item)),
    addItem: item => dispatch(addItem(item))

})

export default connect(null, mapDispatchToProps)(CheckoutItem)
import React from 'react'

import './checkout.styles.scss'

import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect'
import {selectCartItems} from '../../redux/cart/cart.selectors.js'
import {selectCartItemTotalPrice} from '../../redux/cart/cart.selectors.js'

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        CHECKOUT PAGE
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        }
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
            <div className='test-warning'>
                *Please use the following test credit card for payments*
                <br/>
                4242 4242 4242 4242 - EXP: 01/22 - CVV: 123
            </div>
            <div className='stripe-checkout-button'>
                <StripeCheckoutButton price={total}/>
            </div>
 

            

    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage)
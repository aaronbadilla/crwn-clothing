import CartActionTypes from './cart.types.js'

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item,
})

export const subtractItem = (item) => ({
    type: CartActionTypes.SUBTRACT_ITEM,
    payload: item,
})

export const removeItemFromCart = (item) => ({
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item,
})
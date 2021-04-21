import CartActiontypes from './cart.types.js'

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActiontypes.TOGGLE_CART_HIDDEN:
            return {
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer
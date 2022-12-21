import * as actionTypes from './shopping-types'

const INITIAL_STATE = {
    cart: [],  //{productId, productName,price, productImg, quantity}
    currentItem: null
}

const shopReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const cartItem = action.payload

            const existItem = state.cart.find(item => item.productId === cartItem.productId)

            if(existItem){
                return {
                    ...state,
                    cart: state.cart.map((item) => item.productId === cartItem.productId
                    ?{...item, quantity: item.quantity + 1 }
                    :item
                    )
                }
            } else {
                return{
                    ...state,
                    cart: [...state.cart,{...cartItem,quantity:1}]
                }
            }
           
        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cart: state.cart.filter(item => item.productId !== action.payload.productId)
            }
        case actionTypes.UPDATE_CART:
            return{
                ...state,
                cart: state.cart.map(item => item.productId === action.payload.productId ? {...item, quantity: action.payload.quantity} : item)
            }
        default:
             return state
    }
}

export default shopReducer;
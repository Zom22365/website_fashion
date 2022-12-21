import * as actionTypes from './shopping-types';

export const addToCart = (productId,productName,productImg,price) =>{
    return{
        type: actionTypes.ADD_TO_CART,
        payload: {
            productId: productId,
            productName: productName,
            productImg: productImg,
            price: price

        }
    }
}


export const removeFromCart = (itemId) =>{
    return{
        type: actionTypes.REMOVE_FROM_CART,
        payload:{
            productId: itemId
        }
    }
}

export const updateCart = (itemId, qty) =>{
    return {
        type: actionTypes.UPDATE_CART,
        payload: {
            productId: itemId,
            quantity: qty
        }
    }
}

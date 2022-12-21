import React, { useState } from 'react'
import HeaderComponet from './HeaderComponet'
import { connect } from 'react-redux'
import {removeFromCart, updateCart} from '../../redux/Shopping/shopping-actions'

const CartItem = ( {itemData,removeFromCart,updateCart}) => {

  const [input, setInput] = useState(itemData.quantity)

  const onChangeQuantity = (e) =>{
    setInput(Number(e.target.value))
    updateCart(itemData.productId,Number(e.target.value))
  }
  const vnd = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(itemData.price)
  return (
   <>
   <tr className='info-cell-cart'>
      <td className='product-name'>
        <img className='img-pro-small' src={itemData.productImg} alt="" />
        <span>{itemData.productName}</span>
      </td>
        <td>{vnd}</td>
        <td>
        <input 
        min="1" 
        type="number"
         name="quantity" 
         id="quantity" 
         value={input}
         onChange={onChangeQuantity} />
       </td>
       <td>
       <i class="fa-solid fa-xmark" onClick={() => removeFromCart(itemData.productId)}></i>
       </td>
   </tr>

   </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (productId) => dispatch(removeFromCart(productId)),
    updateCart: (productId, quantity) => dispatch(updateCart(productId,quantity))
  }
}

export default connect(null,mapDispatchToProps)(CartItem)
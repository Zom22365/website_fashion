import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const CardProductComponent = (props) => {
  const location = useLocation()
  const vnd = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.price)
  return (
    <div className={`${props.classname} card-product col-12 col-sm-6 col-lg-4 col-xl-3`} >
        <span style={{display:"none"}} >{props.productId}</span>
        <div  className='image-product'>
          <Link to={`${props.obj}`==="Nữ"?`/women/product/${props.productId}`:`/men/product/${props.productId}`} >
            <img className='productImg' src={props.productImg} alt="" />
          </Link>
        </div>
        <div className="card-product-detail">
          <Link className='link-product-name' to={`${props.obj}`=="Nu"?`/women/product/${props.productId}`:`/men/product/${props.productId}`} >
            <p className='product-name'>{props.productName}</p>
          </Link>
            <p className='product-price'>{vnd}</p>
        </div>
    </div>
  )
}

export default CardProductComponent
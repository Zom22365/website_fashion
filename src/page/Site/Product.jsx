import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import FooterComponet from '~/components/Site/FooterComponet'
import HeaderComponent from '~/components/Site/HeaderComponet'
import {addToCart} from '../../redux/Shopping/shopping-actions'
import '~/css/Product.css'

const PRODUCT_API_BASE_URL = "http://localhost:9000/product"
const Product = ({addToCart}) => {
    const {id} = useParams()
    const[product, setProduct] = useState({})

    useEffect(()=>{
        axios.get(`${PRODUCT_API_BASE_URL}/${id}`)
    .then(res =>{
        setProduct(res.data)
    })
    },[id])

    const vnd = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)
  return (
    <>
        <HeaderComponent/>
        <div className="container">
            <div className="content">
                <div className="content-left col-12 col-sm-12 col-md-7">
                    <img className='img-product' src={`${PRODUCT_API_BASE_URL}/images/${product.productImg}`} alt="" />
                </div>
                <div className="content-right col-12 col-sm-12 col-md-5">
                    <h2 className='name-product'>{product.productName}</h2>
                    <p className='price-product'>{vnd}</p>
                    {/* <label className='lable' htmlFor="quantity">Số lượng:</label>
                    <input type="number" name="quantity" className='quantity' value="1"/> */}
                    {/* <p className='quantity-product'>Số lượng có sẵn: {product.stockQuantity}</p> */}
                    <div className='add-to-card'>
                        <button onClick={() => addToCart(product.productId,product.productName,`${PRODUCT_API_BASE_URL}/images/${product.productImg}`,product.price)} 
                        className='btn-add-to-card'>Thêm vào giỏ hàng</button>
                    </div>
                    <p className='des-product'></p>
                </div>
            </div>
        </div>
        <FooterComponet/>
    </>
  );


}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (productId,productName,productImg,price) => dispatch(addToCart(productId,productName,productImg,price))
    }
  }

export default connect(null, mapDispatchToProps)(Product)
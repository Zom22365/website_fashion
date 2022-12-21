import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardProductComponent from './CardProductComponent'

const PRODUCT_API_BASE_URL = "http://localhost:9000/home/sale"
const SliderProductComponent = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    axios.get(PRODUCT_API_BASE_URL)
          .then(res =>{
            setProducts(res.data)
          })
  },[])


  let slider = document.getElementsByClassName("slider-product-sale")[0]
  let cardProduct = document.getElementsByClassName("cardProductSale")

  const prev = ()=>{
    slider.prepend(cardProduct[cardProduct.length-1]);
  }

  const next = ()=>{
    slider.appendChild(cardProduct[0]);
  }
  return (
    <div className="slider-product slider-product-sale">
    <i class="fa-solid fa-angle-left" onClick={prev}></i>
    <i class="fa-solid fa-angle-right" onClick={next}></i>

    {
      products.map((product,index) =>{
        return(
          <CardProductComponent
          classname="cardProductSale"
          key={index}
          productId = {product.productId}
          productName = {product.productName}
          productImg = {`${PRODUCT_API_BASE_URL}/images/${product.productImg}`}
          price = {product.price}
          obj = {product.obj}
          />
        )
      })
    }
   
  </div>
  )
}

export default SliderProductComponent
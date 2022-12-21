import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardProductComponent from './CardProductComponent'

const PRODUCT_API_BASE_URL = "http://localhost:9000/home/new"
const SliderProductComponent = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    axios.get(PRODUCT_API_BASE_URL)
          .then(res =>{
            setProducts(res.data)
          })
  },[])


  let slider = document.getElementsByClassName("slider-product-new")[0]
  let cardProduct = document.getElementsByClassName("cardProductNew")

  const prevCard = ()=>{
    slider.prepend(cardProduct[cardProduct.length-1]);
  }

  const nextCard = ()=>{
    slider.appendChild(cardProduct[0]);
  }
  return (
    <div className="slider-product  slider-product-new">
    <i class="fa-solid fa-angle-left" onClick={prevCard}></i>
    <i class="fa-solid fa-angle-right" onClick={nextCard}></i>

    {
      products.map((product,index) =>{
        return(
          <CardProductComponent
          classname="cardProductNew"
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
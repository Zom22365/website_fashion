import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import CardCategory from './CardCategory'

const CATEGORY_API_BASE_URL = "http://localhost:9000/category"
const SliderCategory = () => {

   
  const [categorys, setCategorys] = useState([])
  const location = useLocation()

  useEffect(()=>{
    axios.get(`${CATEGORY_API_BASE_URL}${location.pathname}`)
          .then(res =>{
            setCategorys(res.data)
          })
  },[location])


  let slider = document.getElementsByClassName("slider-category")[0]
  let cardCate = document.getElementsByClassName("cardCate")

  const prevCate = ()=>{
    slider.prepend(cardCate[cardCate.length-1]);
  }

  const nextCate = ()=>{
    slider.appendChild(cardCate[0]);
  }
  return (
    <div className="slider-category">
        <i class="fa-solid fa-angle-left" onClick={prevCate}></i>
        <i class="fa-solid fa-angle-right" onClick={nextCate}></i>

        {
        categorys.map((category,index) =>{
            return(
                <CardCategory
                classname="cardCate"
                key={index}
                categoryId = {category.categoryId}
                categoryName = {category.categoryName}
                categoryImg = {`${CATEGORY_API_BASE_URL}/images/${category.categoryImg}`}
                />
            )
        })
        }

    </div>
  )
}

export default SliderCategory
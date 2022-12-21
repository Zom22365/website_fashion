import React from 'react'
import Women from '~/assets/imgs/women3.jpg'
import Men from '~/assets/imgs/men3.jpg'
import '~/css/SliderHomePage.css'
import { Link } from 'react-router-dom'

const SliderHomePage = () => {
  return (
    <div className='SliderHomePage'>
        <div className='Content col-12 col-sm-12 col-lg-6'>
        <Link to={"/women"} ><img src={Women} alt="" /></Link> 
            <p className='Context'>Shop Nữ</p>
        </div>
        <div className='Content col-12 col-sm-12 col-lg-6'>
        <Link to={"/men"}><img src={Men} alt="" /></Link>
            <p className='Context'>Shop Nam</p>
        </div>
    </div>
  )
}

export default SliderHomePage
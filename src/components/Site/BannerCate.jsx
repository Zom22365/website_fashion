import React from 'react'
import bannerWomen from '~/assets/imgs/women2.jpg'
import bannerMen from '~/assets/imgs/men2.jpg'
import { useLocation } from 'react-router-dom'

const BannerCate = () => {
    const location = useLocation()
  return (
    <div class="banner-cate">
        <img className='banner-cate-img' src={location.pathname.includes("/women")==true?bannerWomen:bannerMen} alt="" />
    </div>
  )
}

export default BannerCate
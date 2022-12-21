import React from 'react'
import '~/css/Products.css'
import HeaderComponent from '~/components/Site/HeaderComponet'
import BannerCate from '~/components/Site/BannerCate'
import Categories from '~/components/Site/Categories'
const Products = () => {
  return (
    <>
    <HeaderComponent/>
    <BannerCate/>
    <div className='pros-page'>
      <Categories/>
    </div>
    </>
  )
}

export default Products
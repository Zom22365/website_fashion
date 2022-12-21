import React from 'react'
import BannerCate from '~/components/Site/BannerCate'
import CardCategory from '~/components/Site/CardCategory'
import FooterComponet from '~/components/Site/FooterComponet'
import HeaderComponent from '~/components/Site/HeaderComponet'
import ProductNew from '~/components/Site/ProductNew'
import SliderCategory from '~/components/Site/SliderCategory'
import '~/css/Category.css'


const Category = () => {

  return (
    <>
    <HeaderComponent/>
    <BannerCate/>
    <h2 className='title-page-cate'>Danh mục sản phẩm</h2>
    <SliderCategory/>
    <h2 className='title-page-cate'>Sản phẩm mới</h2>
    <ProductNew/>
    <FooterComponet/>
    </>
  )
}

export default Category
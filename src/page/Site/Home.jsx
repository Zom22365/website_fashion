import React from 'react'
import HeaderComponent from '~/components/Site/HeaderComponet'
import FooterComponent from '~/components/Site/FooterComponet'
import SliderHomePage from '~/components/Site/SliderHomePage'
import SliderProductNew from '~/components/Site/SliderProductNew'
import SliderProductBestSaler from '~/components/Site/SliderProductBestSaler'
import '~/css/Home.css'

const Home = () => {
  return (
    <>
    <HeaderComponent/>
    <SliderHomePage/>
    <p className='title-product-new'>Sản phẩm mới</p>
    <SliderProductNew/>
    <p className='title-product-new'>Sản phẩm bán chạy</p>
    <SliderProductBestSaler/>
    <FooterComponent/>
    </>
  )
}

export default Home
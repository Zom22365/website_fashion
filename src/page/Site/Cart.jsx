import React, { useEffect, useState } from 'react'
import HeaderComponet from '~/components/Site/HeaderComponet'
import Logo from '~/assets/imgs/logo.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '~/css/cart.css'
import CartItem from '~/components/Site/CartItem'
const Cart = ({cart}) => {
    const [totalPrice, setTotalPrice] =  useState(0)
    const [totalItem, setTotalItem] =  useState(0)
  
    useEffect(() => {
        let items = 0;
        let price =0;

        cart.forEach(item => {
            items += item.quantity;
            price += item.quantity * item.price
        });
        setTotalPrice(price);
        setTotalItem(items)
    },[cart,totalPrice, totalItem,setTotalPrice,setTotalItem])

    const vnd = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)
  return (
    <>
      <header>
            <nav id="header" style={{padding:"0px 40px"}}>
                <div className="headerMenu">
                    <div className="headerItem">
                        <Link to="/home">
                        <img id="logo-page" src={Logo} alt="" />
                        </Link>
                    </div>
                    
                    <div className="header__navbar-menu">
                        THANH TOÁN ĐƠN HÀNG
                    </div>
                </div>

                <div className="headerMenu">
                    <Link to="/home" className='go-back'>
                        <span>TIẾP TỤC MUA SẮM</span>
                    </Link>
                </div>

            </nav>
        </header>

    <div className='page-cart'>
        <div className='cart-items col-12 col-sm-12 col-md-8'>
            <h3 className='title-total-order'>({totalItem}) Sản phẩm</h3>
            <table className='table table-cart'>
                <thead>
                    <th className='thead-cart'>SẢN PHẨM</th>
                    <th className='thead-cart'>GIÁ</th>
                    <th className='thead-cart'>SỐ LƯỢNG</th>
                    <th className='thead-cart'></th>
                </thead>
                <tbody>
                    {
                        cart.map((item) =>{
                            return(
                                <CartItem
                                key={item.productId}
                                itemData = {item}
                                />
                            )
                         
                        })
                    }
                </tbody>
            </table>
        </div>

        <div className='cart-summary col-12 col-sm-12 col-md-3'>
        <h3 className='title-total-order'>Đơn hàng</h3>
            <table className='total'>
                    <tr>
                    <th className='total-price'>Tổng tiền thanh toán</th>
                    <td>{vnd}</td>
                    </tr>
            </table>

        <div style={{textAlign:"center", margin: "20px", paddingTop:"20px", borderTop:"1px solid #e8e8ea"}}>
            <button className='btn-buy'>ĐẶT HÀNG</button>
        </div>
        </div>
    </div>
    </>
  )
}

const mapStateToProps = state =>{
    return {
        cart: state.shop.cart
    }
}

export default  connect(mapStateToProps)(Cart)
 import React, { useEffect } from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { connect } from "react-redux"
import Logo from '~/assets/imgs/logo.png'
 import  '~/css/Header.css'
import Login from "./Login"
const HeaderComponent = ({cart})=>{
    const location = useLocation()
    const [show,setShow] = useState(false)
    const [countItem, setCountItem] = useState(0)

    useEffect(() => {
        let count =0;
        cart.forEach(item => {
            count += item.quantity
            
        });
        setCountItem(count)
    }, [cart, countItem])

    const check =() =>{
       let displayMenu = document.getElementsByClassName("header__navbar-menu")[0]
       if(displayMenu.style.right ==="100%"){
        displayMenu.style.right ="0%"
       }else{
        displayMenu.style.right ="100%"
       }
    }

    const showLogin =(event) =>{
        setShow(!show)
    }
    return(
        <header>
            <nav id="header">
                <input type="checkbox" id="checkbar" onClick={check}/>
                <label for="checkbar" className="checkbtn">
                    <i className="fa-solid fa-bars"></i>
                </label>
                <div className="headerMenu">
                    <div className="headerItem">
                        <Link to="/home">
                        <img id="logo-page" src={Logo} alt="" />
                        </Link>
                    </div>
                    
                    <div className="header__navbar-menu">
                        <Link to={"/home"} className="href-item-menu">
                        <li className={location.pathname==="/" || location.pathname==="/home"?"headerItemName active-header":"headerItemName "}>Trang chủ</li>
                        </Link>

                        <Link to={"/women"} className="href-item-menu"> 
                        <li className={location.pathname.includes("/women")?"headerItemName active-header":"headerItemName "}>Nữ</li>
                        </Link>

                        <Link to={"/men"} className="href-item-menu">
                        <li className={location.pathname.includes("/men")?"headerItemName active-header":"headerItemName "}>Nam</li>
                        </Link>
                    </div>
                </div>

                <div className="headerMenu">
                    <div  className="headerMenuSearch">
                          <form className="formSearch" action="">
                            <button className="btnSearch">  <i className="fa-solid fa-magnifying-glass"></i></button>
                            <input className="inputSearch" type="text" placeholder="Bạn tìm gì..." />                    
                        </form>
                    </div>

                    <div className="headerItem">
                   
                        <li><i className="headerItemIcon fa-solid fa-user fa-lg"
                        onClick={showLogin}></i></li>
                        {
                            show && (
                                <Login/>
                            )
                        }
                    <Link to={countItem>0?"/cart":""} className="href-item-menu">
                        <li className="icon-cart"><i className="headerItemIcon fa-solid fa-bag-shopping fa-lg"></i>
                        <span className="count-cart-item">{countItem}</span></li>
                        </Link>
                    </div>
                </div>

            </nav>
        </header>
    )
}

const mapStateToProps = (state) => {
    return{
        cart : state.shop.cart,
    }
}

export default connect(mapStateToProps)(HeaderComponent)
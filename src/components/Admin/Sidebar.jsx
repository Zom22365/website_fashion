import media from 'bootstrap-4-react/lib/components/media'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '~/assets/imgs/logo.png'
import '~/css/Sidebar.css'

const Sidebar = () => {

  const [selected, setSelected] = useState(0)
  const [exparded, setExparded] = useState(false)
  const location = useLocation()
  const SidebarMenu =[
      {
        icon: "fa-solid fa-house-chimney",
        heading: "Trang chủ",
        href:"/admin/home"
      },

      {
        icon: "fa-solid fa-clipboard-list",
        heading: "Danh mục",
        href:"/admin/category"
      },

      {
        icon: "fa-solid fa-shirt",
        heading: "Sản phẩm",
        href:"/admin/product"
      },

      {
        icon: "fa-solid fa-box",
        heading: "Đơn hàng",
        href:"/admin/order"
      },

      {
        icon: "fa-solid fa-user-group",
        heading: "Khách hàng",
        href:"/admin/user"
      }

  ];

  function closeSide(){
      if(exparded){
        return(
          document.getElementById("Sidebar").style.background="none",
          document.getElementById("side").style.display="none",
          setExparded(!exparded)
        )
      }else{
        return(
          document.getElementById("Sidebar").style.background=" #ffe0e0",
          document.getElementById("side").style.display="block",
          setExparded(!exparded)
        )
      }


  }

  return ( 
    <div className="Sidebar" id='Sidebar'>
        <div className='bar'>
          <i className={exparded?'fa-solid fa-angle-right': 'fa-solid fa-angle-left'} onClick= {closeSide} ></i>
        </div>
        <div id="side">
          <div className="logo">
              <img className='img-logo' src={Logo} alt="" />
          </div>
        
          <div className="menu">
            { SidebarMenu.map((item, index)=>{
              return(
              
                <div className={location.pathname.includes(item.href)==true?"menuItem active":"menuItem"}  
                key={item.href}
                onClick={()=>setSelected(index)}
                >
                  <Link to={item.href} 
                  style={{color:'#000',textDecoration:'none'}}>
                    <i className={item.icon}></i>
                    <span className='text'>{item.heading}</span>
                  </Link>
                </div>
               
              )
            })

            }

            <li className='menuItem'>
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </li>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [isLogin, setIsLogin] = useState(true)
  const [isLogout, setIsLogout] = useState(false)
  const [auth, setAuth] = useState(false)
  const navigative = useNavigate()

  const showFormLogin = (event) =>{
    document.getElementById("login").style.display="block";
    document.getElementById("logout").style.display="none";
    setIsLogin(true);
    setIsLogout(false);
  }

  const showFormLogout = (event) =>{
    document.getElementById("login").style.display="none";
    document.getElementById("logout").style.display="block";
    setIsLogin(false);
    setIsLogout(true);
  }

  const userLogin = () =>{

    // const user = {
    //   username: document.getElementById("username").value,
    //   password: document.getElementById("password").value
    // }
    
    const formData = new FormData();
    formData.append("username", "oanh")
    formData.append("password", "123")
    // const json = JSON.stringify(user)
    axios.post("http://localhost:9000/login",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }
    )
    .then(() =>{
     
      setAuth(true)
      console.log("o")
      navigative("/admin/home")
    })
    .catch((error)=>{
      // alert("Không thành công")
    })

    if(auth){
      alert("ok")
      // navigative("/admin/home")
    }

  }

  const userLogout = () =>{
   
  }

  return (
    <div className='background'>
      <div className='form-login'>
        <div className="header-form">
        <h2 onClick={showFormLogin} className={isLogin?'title-login active-form':'title-login'}>Đăng Nhập</h2>
        <h2 onClick={showFormLogout} className={isLogout?'title-login active-form':'title-login'}>Đăng Ký</h2>
        </div>
        <form action=""  id='login' onSubmit={userLogin}>
          <div className="form-group">
            <label htmlFor="userName">Tài khoản:</label>
            <input type="text" className="form-control" id="username" name="username"/>
          </div>
          <div className="form-group">
            <label htmlFor="userName">Mật khẩu:</label>
            <input type="text" className="form-control" id="password" name="password"/>
          </div>
          <div className='BtnLogin'>
          <button className='btnLogin' type="submit" >Đăng nhập</button>
          </div>
        </form>

        <form action="" id='logout'>
          <div className="form-group">
            <label htmlFor="userName">Tài khoản:</label>
            <input type="text" className="form-control" id="userName" name="userName"/>
          </div>
          <div className="form-group">
            <label htmlFor="userName">Mật khẩu:</label>
            <input type="text" className="form-control" id="userName" name="userName"/>
          </div>
          <div className='BtnLogin'>
          <button className='btnLogin' type="submit" onClick={userLogout}>Đăng ký</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
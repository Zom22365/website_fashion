import React from "react"
import {Routes, Route}from 'react-router-dom';
import Login from "~/components/Site/Login";
import Dashboard from "~/page/Admin/Dashboard";
import Cart from "~/page/Site/Cart";
import Category from "~/page/Site/Category";
import Home from "~/page/Site/Home";
import Product from "~/page/Site/Product";
import Products from "~/page/Site/Products";

const SiteComponent = ()=>{


    return(
        <div>
             <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/women/product/:id" element={<Product/>}/>
                <Route path="/men/product/:id" element={<Product/>}/>
                <Route path="/women/:id" element={<Products/>}/>
                <Route path="/men/:id" element={<Products/>}/>
                <Route path="/women" element={<Category/>}/>
                <Route path="/men" element={<Category/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/admin/home" element={<Dashboard/>}/>
            </Routes>
        </div>
    )
}

export default SiteComponent
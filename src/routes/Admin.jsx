
import {Routes, Route, useLocation}from 'react-router-dom';
import '~/css/AdminComponent.css';
import AddCategory from '../components/Admin/AddCategory';
import DeleteCategory from '../components/Admin/DeleteCategory';
import EditCategory from '../components/Admin/EditCategory';
import ListCategory from '../components/Admin/ListCategory';
import Dashboard from '../page/Admin/Dashboard';
import Addproduct from '../components/Admin/AddProduct';
import DeleteProduct from '../components/Admin/DeleteProduct';
import EditProduct from '../components/Admin/EditProduct';
import ListProduct from '../components/Admin/ListProduct';
import Sidebar from '../components/Admin/Sidebar';
import ListUser from '../components/Admin/ListUser';
import Category from '~/page/Admin/Category';
import Product from '~/page/Admin/Product';
import User from '~/page/Admin/User';
import Order from '~/page/Admin/Order';


const AdminComponent=()=>{
 const location = useLocation()
  return (
    <div className='App'>
    <div className='AppGlass'>

      { location.pathname.includes('/admin/category') && <Category/> }

      { location.pathname.includes('/admin/product') && <Product/> }

      { location.pathname.includes('/admin/user') && <User/> }

      <Routes>
          <Route path="/admin/home" element={<Dashboard/>}/>
          <Route path="/admin/order" element={<Order/>}/>
      </Routes>
    </div>
  </div>
  )
}

export default AdminComponent
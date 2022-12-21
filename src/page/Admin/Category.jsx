import React from 'react'
import {Routes, Route}from 'react-router-dom';
import AddCategory from '~/components/Admin/AddCategory';
import DeleteCategory from '~/components/Admin/DeleteCategory';
import EditCategory from '~/components/Admin/EditCategory';
import ListCategory from '~/components/Admin/ListCategory';
import Sidebar from '~/components/Admin/Sidebar'

const Category = () => {
  return (
    <>
    <Sidebar/>
    <Routes>
    <Route path="/admin/category" element={<ListCategory/>}/>
    <Route path="/admin/category/add" element={<AddCategory/>}/>
    <Route path="/admin/category/edit/:id" element={<EditCategory/>}/>
    <Route path="/admin/category/delete/:id" element={<DeleteCategory/>}/>
    </Routes>
    </>
  )
}

export default Category
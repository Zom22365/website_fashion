import React from 'react'
import {Routes, Route}from 'react-router-dom';
import ListUser from '~/components/Admin/ListUser'
import Sidebar from '~/components/Admin/Sidebar';

const User = () => {
  return (
    <>
    <Sidebar/>
    <Routes>
    <Route path="/admin/user" element={<ListUser/>}/>
    </Routes>
    </>
  )
}

export default User
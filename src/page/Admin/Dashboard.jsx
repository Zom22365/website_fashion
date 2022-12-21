import React from 'react'
import Cards from '../../components/Admin/Cards'
import Sidebar from '../../components/Admin/Sidebar'
import Table from '../../components/Admin/Table'
import '~/css/Dashboard.css'

const Dashboard = () => {
  return (
    <>
    <Sidebar/>
    <div className="main-dash">
        <h1 className='titlePageHome'>Trang chủ</h1>
        <Cards/>
        <h3 className='listOrder'>Đơn hàng</h3>
        <Table/>
    </div>
  </>
  )
}

export default Dashboard
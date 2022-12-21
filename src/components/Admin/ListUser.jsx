import React, { Component,useEffect,useState } from 'react'
import axios from "axios"
import '~/css/ListCategory.css'
import ReactPaginate from 'react-paginate'
import Sidebar from './Sidebar'

const USER_API_BASE_URL = "http://localhost:9000/admin/user"

const ListUser = () => {

    const [users, setUsers] = useState([])
        const [currentItems, setCurrentItems] = useState([]);
        const [pageCount, setPageCount] = useState(0);
        const [itemOffset, setItemOffset] = useState(0);
        const itemsPerPage = 5;
      
        useEffect(() => {
            axios.get(USER_API_BASE_URL).then(res => {
                setUsers(res.data)
                console.log(res.data)
                const endOffset = itemOffset + itemsPerPage;
                setCurrentItems(users.slice(itemOffset, endOffset));
                setPageCount(Math.ceil(users.length / itemsPerPage));
            })
         
        }, [users.length, itemOffset, itemsPerPage]);
      
        const handlePageClick = (event) => {
          const newOffset = (event.selected * itemsPerPage) % users.length;
          setItemOffset(newOffset);
        };
        

  return (
    <>
 
    <div className='pageCate'>
    <span className='titlePageCate'>Danh sách khách hàng</span>
    <div className='main'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Họ tên</th>
                    <th>Tên tài khoản</th>
                    <th>Đơn hàng</th>
                </tr>
            </thead>
            <tbody>
                {
                currentItems.map((row,index)=>{
                return(
                <tr>
                    <td>{row.fullname}</td>
                    <td>{row.username}</td>
                    <td>{row.username}</td>
                  
                </tr>
                )
                }

            )
                    
                }
            </tbody>
        </table>
    </div>
    <div>
    <ReactPaginate
        breakLabel="..."
        nextLabel="sau >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< trước"
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="activePage"
        renderOnZeroPageCount={null}
      />
    </div>
   
    </div>
</>

  )
}

export default ListUser
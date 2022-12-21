
import React, { Component,useEffect,useState } from 'react'
import axios from "axios"
import { Link} from 'react-router-dom'
import '~/css/ListCategory.css'
import ReactPaginate from 'react-paginate'
import Sidebar from './Sidebar'

const PRODUCT_API_BASE_URL = "http://localhost:9000/admin/product"

const ListProduct = () => {

    const [products,setProducts] = useState([])
        const [currentItems, setCurrentItems] = useState([]);
        const [pageCount, setPageCount] = useState(0);
        const [itemOffset, setItemOffset] = useState(0);
        const itemsPerPage = 5;
      
        useEffect(() => {
            axios.get(PRODUCT_API_BASE_URL).then(res => {
                setProducts(res.data)
                const endOffset = itemOffset + itemsPerPage;
                setCurrentItems(products.slice(itemOffset, endOffset));
                setPageCount(Math.ceil(products.length / itemsPerPage));
            })
         
        }, [products.length, itemOffset, itemsPerPage]);
      
        const handlePageClick = (event) => {
          const newOffset = (event.selected * itemsPerPage) % products.length;
          setItemOffset(newOffset);
        };
        

  return (
    <>
 
    <div className='pageCate'>
    <span className='titlePageCate'>Danh sách sản phẩm</span>
    <div className='BtnAdd'><Link to={`add`}><button className='btnAdd'>Thêm mới</button></Link></div>
    <div className='main'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Ảnh</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    {/* <th>Còn</th> */}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                currentItems.map((row,index)=>{
                return(
                <tr>
                    <td>
                    <img className='cateImg' src={`${PRODUCT_API_BASE_URL}/images/${row.productImg}`} alt="" /></td>
                    <td>{row.productName}</td>
                    <td>{row.price}</td>
                    {/* <td>{row.stockQuantity}</td> */}
                    <td>
                        <Link to={`edit/${row.productId}`}><i class="iconEdit fa-solid fa-pen-to-square"></i></Link>
                        <Link to={`delete/${row.productId}`}><i class="iconDelete fa-solid fa-trash-can"></i></Link>
                    </td>
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

export default ListProduct 
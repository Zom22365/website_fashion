import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useLocation, useParams } from 'react-router-dom'
import CardProductComponent from './CardProductComponent'

const CATEGORYS_API_BASE_URL = "http://localhost:9000/products"
const ListProducts = () => {
    const [products, setProducts]= useState([])
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12;
    let {id} = useParams()
    const location = useLocation()
    const [loca, setLoca] = useState();

    useEffect(()=>{
        axios.get(`${CATEGORYS_API_BASE_URL}/${id}`)
              .then(res =>{
                setProducts(res.data)
                const endOffset = itemOffset + itemsPerPage
                setCurrentItems(products.slice(itemOffset, endOffset))
                setPageCount(Math.ceil(products.length / itemsPerPage))
                setLoca(location.pathname)
              })
      },[products.length, id, loca, itemOffset, itemsPerPage])

    const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
    }

  return (
    <div>
        {/* <div>
            <button>oanh</button>
        </div> */}
        <div className='grid-product'>
            {
                currentItems.map((product,index) =>{
                    return(
                        <CardProductComponent
                        classname="product-new"
                        key={index}
                        productId = {product.productId}
                        productName = {product.productName}
                        productImg = {`${CATEGORYS_API_BASE_URL}/images/${product.productImg}`}
                        price = {product.price}
                        obj = {product.obj}
                        />
                    )
                })
            }
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
  )
}

export default ListProducts
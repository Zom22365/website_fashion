import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import CardProductComponent from './CardProductComponent'

const PRODUCT_NEW_API_BASE_URL = "http://localhost:9000/product-new"
const ProductNew = () => {
    const [products, setProducts] = useState([])
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12;
    const location = useLocation()
    useEffect(()=>{
        axios.get(`${PRODUCT_NEW_API_BASE_URL}${location.pathname}`)
              .then(res =>{
                let arr = []
                arr = res.data
                setProducts(res.data)
                const endOffset = itemOffset + itemsPerPage;
                setCurrentItems(arr.slice(itemOffset, endOffset));
                setPageCount(Math.ceil(arr.length / itemsPerPage));
              })
         console.log(products)
      },[products.length, location.pathname, itemOffset, itemsPerPage])

    const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
    }

  return (
    <div>
    <div className='grid-product'>
        {
            currentItems.map((product,index) =>{
                return(
                    <CardProductComponent
                    classname="product-new"
                    key={index}
                    productId = {product.productId}
                    productName = {product.productName}
                    productImg = {`${PRODUCT_NEW_API_BASE_URL}/images/${product.productImg}`}
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

export default ProductNew
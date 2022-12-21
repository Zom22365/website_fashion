import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import ListProducts from './ListProducts'

const CATEGORYS_API_BASE_URL = "http://localhost:9000/categories"
const Categories = () => {
    const [categories, setCategories]= useState([])
    const [category, setCategory]= useState({})
    const location = useLocation()
    let {id} = useParams()

    useEffect(()=>{
        axios.get(`${CATEGORYS_API_BASE_URL}/${id}`)
              .then(res =>{
                setCategories(res.data)
                let arr = []
                arr = res.data
                for (let i = 0; i < arr.length; i++) {
                  if(arr[i].categoryId==id){
                    setCategory(arr[i])
                  }
                 
           }
                
              })
      },[id])

  return (
    <>
    <h3 className='title-kind-cate'>Danh mục: {category.categoryName}</h3>
    <div className='content-pros'>
      <div className='slide-cate col-12 col-sm-12 col-md-2'>
        <div>
          <ul className='categories'>
          {
            categories.map((cate,index) =>{
              return (
                <Link to={location.pathname.includes("women")?`/women/${cate.categoryId}`:`/men/${cate.categoryId}`} className="cate-link">
                <li key={index}
                className={cate.categoryId==id?"cateItem cateActive":"cateItem"}>{cate.categoryName}</li>
                </Link>
              )
            })
          }
          </ul>
        </div>
      </div>
      <div className='col-12 col-sm-12 col-md-10'>
        <ListProducts/>
      </div>
    </div>  
    </>
  )
}

export default Categories
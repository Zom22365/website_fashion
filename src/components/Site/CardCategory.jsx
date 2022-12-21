import React from 'react'
import { Link } from 'react-router-dom'

const CardCategory = (props) => {
  return (
    <div className={`${props.classname} card-category col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2`} >
    <span style={{display:"none"}} >{props.categoryId}</span>
    <div className='image-category'>
      <Link to={`${props.categoryId}`}>
        <img className='categoryImg' src={props.categoryImg} alt="" />
      </Link>
    </div>
    <div className="card-category-detail">
      <Link  className='category-name' to={`${props.categoryId}`}>
        <span>{props.categoryName}</span>
      </Link>
    </div>
</div>
  )
}

export default CardCategory
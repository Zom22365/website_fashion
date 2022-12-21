import React from 'react'
import '~/css/Card.css'

const Card = (props) => {

  return (
    <div className="Card" style={props.color}>
        <div className='title'>{props.title}</div>
        <div className='detail'>
            <i className={props.png}></i>
            <div className='money'>100.000 vnd</div>
        </div>
    </div>
  )
}

export default Card
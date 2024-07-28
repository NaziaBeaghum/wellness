import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <div className="card_container">
        <Link to={`/Single/${item.id}`}><img src={item.image} alt="" className='card_image'/></Link>
       <p className='card_title roboto-medium'><Link to={`/Single/${item.id}`}>{item.title}</Link></p>
        <p className='roboto-regular'>{item.description}</p>
        <p className='roboto-medium' >Date:<span className='roboto-light'>{item.date}</span></p>
        <p className='roboto-medium'>Location:<span className='roboto-light'>{item.location}</span></p>
        <p className='roboto-medium'>Price:<span className='roboto-light'>${item.price}</span></p>
    </div>
  )
}

export default Card
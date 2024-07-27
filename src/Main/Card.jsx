import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <div className="card_container">
        <Link to="/Single"><img src={item.image} alt="" className='card_image'/></Link>
       <p className=' card_title roboto-medium'> {item.title}</p>
        <p>{item.description}</p>
        <p>Date<span>{item.date}</span></p>
        <p>Location<span>{item.location}</span></p>
        <p className='roboto-medium'>Price<span>${item.price}</span></p>
    </div>
  )
}

export default Card
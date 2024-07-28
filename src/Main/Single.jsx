import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import './Card.css'

const Single = () => {
  const{id}=useParams()
  const[detail,setDetail]=useState([])
  useEffect(()=>{axios.get(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/${id}`)
               .then((res)=>setDetail(res.data))},[])
               console.log(detail)
  return (
   <div className="main_container">
    <div className="sub_container">
      <img src={detail.image}  alt="" className='detail_img'/>
      <p className='roboto-bold'>{detail.title}</p>
     <ul>
      <li><p className='roboto-regular' >Duration:{detail.duration} hrs</p></li>
      <li><p className='roboto-regular'>Location:{detail.location}</p></li>
      <li><p className='roboto-regular'>Price:${detail.price}</p></li>
      <li><p className='roboto-regular'>{detail.description}</p></li>
      <p className='roboto-regular'>Main Focus on these three scenarios:</p>
     </ul >
     <ul className='list_style'>
      {detail?.tag?.map((item)=>(<li ><p className='roboto-regular'>{item}</p></li>))} 
      </ul>
      </div> 
   </div>
  ) 
}

export default Single

condition
: 
"Stress Relief"
date
: 
1692921600
description
: 
"A weekend retreat focused on yoga and meditation to relieve stress."
duration
: 
3
id
: 
"1"
image
: 
"https://cdn.midjourney.com/a287f9bc-d0fb-4e78-a0fa-e8136d3c408a/0_0.jpeg"
location
: 
"Goa"
price
: 
200
tag
: 
(3) ['relaxation', 'meditation', 'weekend']
title
: 
"Yoga for Stress Relief"
type
: 
"Signature"
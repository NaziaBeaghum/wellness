import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from './Card'

const Filter = () => {
    const{type}=useParams()
    console.log(type)
    const[filterresult,setfilterResult]=useState([])
    useEffect(()=>{axios.get(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?type=${type}`)
        .then((response)=>{setfilterResult(response.data)})
         .catch((error)=>console.log(error.message))
    },[])
  return (
    <div  className="card_section ">
      
     {filterresult?.map((item,index)=>(<div  key={index}>
      <Card item={item}/> 
      </div>))
     }
    
  </div>
  )
}

export default Filter
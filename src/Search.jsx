import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from './Main/Card'

const Search = () => {
    const {searchtext}=useParams()
    console.log(searchtext)
    const[searchresult,setSearchresult]=useState([])
    useEffect(()=>{axios.get(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?search=${searchtext}`)
        .then((response)=>{setSearchresult(response.data)})
         .catch((error)=>console.log(error.message))
    },[searchresult])
  return (
    <div  className="card_section">
          {searchresult?.map((item,index)=>(<div  key={index}>
            <Card item={item}/>
          </div>))}
        </div>
  )
}

export default Search
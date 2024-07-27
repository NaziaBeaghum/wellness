import React, { useEffect,useState } from 'react'
import './Main.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { appcontext } from '../Context/Context';
import { useContext } from 'react';
import axios from 'axios';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import Search from '../Search';

const Main = () => {
    
    const[alldatas,setalldatas]=useState([])
    const[searchtext,setSearchtext]=useState("")
    const[data,setData]=useState(0)
    const[type,setType]=useState("")
    const[page,setPage]=useState(1)
    const navigate=useNavigate()
    useEffect(()=>{axios.get("https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats")
        .then((response)=>setalldatas(response.data))
        .catch((error)=>console.log(error.message))
    },[page])
    console.log(alldatas)

    const handleSubmit=(e)=>{
       e.preventDefault();
       if(searchtext){
        navigate(`/Search/${searchtext}`)
        console.log(searchtext)
       }
       
       console.log("submit")
    }
    
    useEffect(()=>{
    if(data!==0)
     {
     navigate(`/Filter/${data}`)
     }
    },[data])
    
    useEffect(()=>{
      if(type!=""){
        navigate(`/Type/${type}`)
      }
    })
    console.log(type)
     const handlePrevious=async()=>
      {if(page===2){
        setPage(prev=>prev-1)
      const response=await axios.get(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${page}&limit=11`)  
      setalldatas(response.data)
      }
     }
     const handleNext= async()=>{
      if(page===1){
        setPage(prev=>prev+1)
      const response=await axios.get(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${page}&limit=11`)  
      setalldatas(response.data)
      }
      
      
     }
      
  return (
    <div className="main_container">
        <div className="section">
            <img src="/titleimage.jpg" alt="" className='img'/>
            <p className='title roboto-medium'>Discover Your Inner Peace</p>
            <p className='para roboto-regular '>Join us for a serious of wellness retreats designed to help you find tranquility and rejuvenation</p>
        </div>

    <div className="flexbox_buttons .roboto-bold">
          <div className="flex_item1">   
            <div className="date_section">
             
              <select className='date_btn' value={data} onChange={(e)=>setData(e.target.value)}>
                  <option value="0" >Filterby date</option>
                    {alldatas.map((item,index)=>(<option value={item.date} key={index} >{item.date}</option>))}
                  </select> 
              
              </div>
                
                <div className="type_section">
                  <select className='date_btn' value={type} onChange={(e)=>setType(e.target.value)}>
                  <option value="" >Filter by type</option>
                    {alldatas.map((item,index)=>(<option value={item.type}  key={index} >{item.type}</option>))}
                  </select>
                </div> 
      </div>
            
   
            <div className="title_section">
              <form onSubmit={handleSubmit}>
                <input className='title_input' type='text' placeholder='Search retreats by title' onChange={(e)=>setSearchtext(e.target.value)}/>
              </form>
            </div>        
    </div>

        <div  className="card_section">
          {alldatas?.slice(page*11-11,page*11).map((item,index)=>(<div  key={index}>
            <Card item={item}/>
          </div>))}
        </div>

        <div className="buttons">
          <button disabled={page===1} onClick={handlePrevious}>Previous</button>
          <button disabled={page===2} onClick={handleNext} className='next_btn'>Next</button>
        </div>
    </div>
  )
}

export default Main
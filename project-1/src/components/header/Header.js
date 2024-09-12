import React, { useState } from 'react'
import "./header.css"
import riban from "../../images/riban.png"
import sticker from "../../images/sticker.png"
import { Link } from 'react-router-dom'


const Header = () => {

  
    
   const [activelist,setActivelist]=useState(0)
  
   function activelistfunction(index){
    setActivelist(index)
   }
  const menu=['Home','Inteoduce',"Cupcakes","News","Gallery","Contact"]

  return (
    <div className='header'>
      <ul>
        {/* {
          menu.map((item,index)=>(
            <li key={index} className={`list ${activelist===index?"active":""}`} onClick={()=>activelistfunction(index)}>
            <a>
             <span>{item}</span>
             </a>
            </li>
          ))

        } */}
        <Link to="/"  style={{textDecoration:"none"}}>
        <li className={`list ${activelist===0?"active":""}`} onClick={()=>activelistfunction(0)}>
            <a>
             <span>Home</span>
             </a>
            </li>
        </Link>
  

        <Link to="/"  state={{data:1}} style={{textDecoration:"none"}}>
          <li className={`list ${activelist===1?"active":""}`} onClick={()=>activelistfunction(1)}>
            <a> 
             <span>Inteoduce</span> 
             </a>
            </li>
          </Link>
       
    

         <Link to="/" state={{data:2}} style={{textDecoration:"none"}}>
         <li className={`list ${activelist===2?"active":""}`} onClick={()=>activelistfunction(2)}>
            <a>
             <span>Cupcakes</span>
             </a>
            </li>
         </Link>
           
            <li className={`list ${activelist===3?"active":""}`} onClick={()=>activelistfunction(3)}>
            <a>
             <span>News</span>
             </a>
            </li>
            <li className={`list ${activelist===4?"active":""}`} onClick={()=>activelistfunction(4)}>
            <a>
             <span>Gallery</span>
             </a>
            </li>
            <li className={`list ${activelist===5?"active":""}`} onClick={()=>activelistfunction(5)}>
            <a>
             <span>Contact</span>
             </a>
            </li>
            
        <span className='image-container' style={{transform:`translateX(${activelist * 445}px)`}}>
            <img src={riban} alt=''/>
        </span>
        <img className='sticker' src={sticker} alt=''/>
      </ul>
    </div>
  )
}

export default Header
import React, { useEffect, useState } from 'react'
import './home.css'
import wave from "../../images/wave2.png"
import wave2 from "../../images/wave.png"
import cupcake1 from "../../images/cupcake1.png"
import cupcake2 from "../../images/cupcake2.png"
import cupcake3 from "../../images/cupcake3.png"

const Home = () => {

  const [currentindex,setCurrentindex]=useState(0);

  const data=[
    {
      "text1":"We are Implament your",
      "text2":"Delicios Deream...",
      "img1":cupcake1,
      "img2":cupcake2,
      "img3":cupcake3,

    },
    {
      "text1":"We are Implament your",
      "text2":"Delicios Deream...",
      "img1":cupcake2,
      "img2":cupcake1,
      "img3":cupcake3,

    },
    {
      "text1":"We are Implament your",
      "text2":"Delicios Deream...",
      "img1":cupcake1,
      "img2":cupcake3,
      "img3":cupcake2,

    }
  ]

const nextdata=()=>{
  setCurrentindex((prev)=>(prev+1)%data.length)
}

useEffect(()=>{
  const interval=setInterval(nextdata,3000)
  return()=>clearInterval(interval)
},[])

const setindex=()=>{
  setCurrentindex((prev)=>(prev+1)%data.length)
}
  
  return (
    <div className='home'>
        <div className='wave-up'>
            <img src={wave} alt=''/>
            <img src={wave} alt=''/>
            <img src={wave} alt=''/>
            <img src={wave} alt=''/>
            <img src={wave} alt=''/>
            <img src={wave} alt=''/>
            <img src={wave} alt=''/>
        </div>
        <div className='wave-down'>
            <img src={wave2} alt=''/>
            <img src={wave2} alt=''/>
            <img src={wave2} alt=''/>
            <img src={wave2} alt=''/>
            <img src={wave2} alt=''/>
            <img src={wave2} alt=''/>
            <img src={wave2} alt=''/>
        </div>
       
        <div className='text'>
            <span>{data[currentindex].text1}</span>
            <span>{data[currentindex].text2}</span>
        </div>
        <div className='h-image'>
          <img src={data[currentindex].img1} alt=''/>
          <img src={data[currentindex].img2} alt=''/>
          <img src={data[currentindex].img3}alt=''/>
        </div>

        <button className='btn1' onClick={setindex}>{'<'}</button>
        <button className='btn2' onClick={setindex}>{'>'}</button>


    </div>
  )
}

export default Home
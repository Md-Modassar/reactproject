import React from 'react'
import Header from '../../components/header/Header'
import Home from '../../components/navbar/Home'
import Description from '../../components/Description/Description'
import Team from "../../components/team/Team"
import Footer from "../../components/footer/Footer"
import Cupcake from "../../components/Cupcake/Cupacake"
import Introduce from "../../components/intro/Introduce"
import { useLocation } from 'react-router-dom'


const Homepage = () => {
  const location =useLocation()
  const data=location.state?.data

  
  
   const renderpage=()=>{
      switch(data){
        case 1:
          return <Introduce/>;
        case 2:
          return <Cupcake/>

        default :
          return <Description/>;

      }
   }

  return (
    <>
    <Header/>
    <Home/>
    {renderpage()}
    <Team/>
    <Footer/>
    </>

  )
}

export default Homepage
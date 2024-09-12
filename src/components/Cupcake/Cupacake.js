import React from 'react'
import "./cupcake.css"
import data from './data'
import Homepage from '../../pages/homepage/Homepage'

const Cupacake = () => {
   
  return (
    <>
   
        <div className='cupcake'>
        <span>{'{Most Popular Cupcakes}'}</span>
        <span>Vivamus leo lacus, mattis a ante id, ultrices semper odio. Meecenas gravida ac mauris a vestibulum.</span>
        <span>Ut ac tristique nisl ,vel porta nisi</span>
        <div className='card-container'>
            {
                data.map((item)=>(
                    <div className='c-card'>
                        <img src={item.image} alt=''/>
                        <span>{item.titel}</span>
                        <span>{item.des}</span>

                    </div>
                ))
            }

        </div>

    </div>
    </>

  )
}

export default Cupacake
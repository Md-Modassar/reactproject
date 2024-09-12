import React from 'react'
import "./description.css"
import image from "../../images/capcake.png"
import image1 from "../../images/delivery.png"
import image2 from "../../images/gift.png"

const Description = () => {
  return (
    <div className='description'>
      <div className='upper'>
        <div className='u-left'>
          <span>MADE FOR YOU</span>
          <span>{'{With Love}'}</span>
        </div>
        <div className='u-right'>
          <span>
            You can put in a button hore as well to urge visitors know more about your about you of your business. Duis autem vel cum iniure dolor in hendrerity in feugial esso  molestion consequal.
            vel illum dolore eu feugial nulla facillsis at vero eros et accuman zzi delemi augue duis dolore to fougail nulla facillisi,
            Dusis autem vel eum iniure dolore in hendrenit in vulpulate velit
            esse molestion consequal,
          </span>

        </div>

      </div>
      <div className='lower'>
        <div className='card'>
          <span className='card-image'>
          <img src={image1} alt=''/>
          </span>
          <span>Delivery</span>
          <span>only 30 minutes</span>
          <button>Read More</button>
        </div>
        <div className='card'>
          <span className='card-image'>
           <img src={image2} alt=''/>
          </span>
          <span>Package</span>
          <span>Free</span>
          <button>Read More</button>
        </div>
        <div className='card'>
          <span className='card-image'>
          <img src={image} alt=''/>
          </span>
          <span>Discount 15%</span>
          <span>Occassion of Opening</span>
          <button>Read More</button>
        </div>
      </div>

    </div>
  )
}

export default Description
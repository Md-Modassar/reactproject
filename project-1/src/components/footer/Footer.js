import React from 'react'
import "./footer.css"
import wave from "../../images/wave3.png"
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='f-wave'>
                <img src={wave} alt='' />
                <img src={wave} alt='' />
                <img src={wave} alt='' />
                <img src={wave} alt='' />
                <img src={wave} alt='' />
                <img src={wave} alt='' />
                <img src={wave} alt='' />

            </div>
            <div className='f-main'>
                <div className='news-l'>
                    <span>Newsletter</span>
                    <span>
                        Duis autem vel eum inure dolor in hendrerit in vulputate velit esse molesties consequat, vel illum
                    </span>
                    <div className='btn'>
                        <span>Subscribes...</span>
                        <span>Go</span>
                    </div>
                </div>
                <div className='latesnews'>
                    <span>Latest News</span>
                    <div className='news-1'>
                        <span className='image-container1'>
                            <img src='https://plus.unsplash.com/premium_photo-1723632256384-60dd4173debf?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                        </span>
                        <div className='news-1-text'>
                            <span>Postformate Gallery. Multiple images </span>
                            <span>August 22,2024</span>
                        </div>
                    </div>
                    <div className='news-2'>
                        <span className='image-container2'>
                            <img src='https://plus.unsplash.com/premium_photo-1723632256384-60dd4173debf?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                        </span>
                        <div className='news-2-text'>
                            <span>Snowboarding is fun</span>
                            <span>December 12, 2023 -9:11 pm</span>
                        </div>
                    </div>
                </div>
                <div className='tags'>
                    <span className='tags-titel'>Tags</span>
                    <div className='tags-catogry'>
                        <span>Agent Login</span>
                        <span>Customer Login</span>
                        <span>Not a Member?</span>
                        <span>Contact</span>
                        <span>New Horizons</span>
                        <span>Lanscape</span>
                        <span>Tags</span>
                        <span>Nice</span>
                        <span>Some</span>
                        <span>Portrait</span>
                    </div>
                </div>
                <div className='address'>
                    <span className='address-title'>Adress</span>
                    <span className='add-res'>
                        DieSachbearbeiter Schonhouser Allee
                        167c, 10435 Berlin Gemany
                    </span>
                    <span className='email'>
                        E-mail:Sweetcupcake@gmail.com
                    </span>
                    <div className='icons'>
                        <FaFacebookF className='icon' />
                        <FaLinkedinIn className='icon' />
                        <FaTwitter className='icon' />
                        <RiInstagramFill className='icon' />
                    </div>

                </div>
            </div>
            <hr />
            <div className='f-menu'>
                <span>Home</span>
                <span>::</span>
                <span>Introduce</span>
                <span>::</span>
                <span>Cupcakes</span>
                <span>::</span>
                <span>News</span>
                <span>::</span>
                <span>Gallery</span>
                <span>::</span>
                <span>Contact</span>
            </div>
            <span className='copy'>Copyright @sweetcupcake. All Right Reserved</span>


        </div>
    )
}

export default Footer
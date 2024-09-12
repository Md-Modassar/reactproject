import React from 'react'
import "./team.css"

const Team = () => {
    return (
        <div className='team'>
            <span className='t-titel'>{'{Our Teams}'}</span>
            <div className='t-card-container'>
                <div className='team-card'>
                    <span>
                    <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                    </span>
                    <span>KIMBERLY THOMPSON</span>
                    <span>Founder & CEO</span>
                </div>
                <div className='team-card'>
                    <span>
                    <img src='https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                    </span>
                    <span>JAME ADAMS</span>
                    <span>Assistant</span>
                </div>

                <div className='team-card'>
                    <span>
                    <img src='https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                    </span>
                    <span>BLAZ ROBAR</span>
                    <span>Design Master</span>
                </div>

            </div>


        </div>
    )
}

export default Team
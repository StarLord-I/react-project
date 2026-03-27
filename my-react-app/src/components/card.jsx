import React from 'react'
import { Bookmark } from 'lucide-react';
import amazonlogo from '../assets/amazon.png'
import './card.css'
function Card() {
  return (
    <div className="parent">

      <div className="card">

         <div className="top">
        <img src={amazonlogo} alt="logo" />
        <button>save <Bookmark size={12} /></button>
         </div>
         
         <div className="center">
          <h3>Amazon<span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div>
            <h4>part time</h4>
            <h4>Senior level</h4>
          </div>

         </div>



         <div className="bottom"> 
          <div>
            <h3>120$/hour</h3>
            <p>mumbai,India</p>
            <button>apply now</button>
          </div>
         </div>

      </div>
    </div>
  )
}

export default Card
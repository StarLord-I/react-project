import React from 'react'
import { Bookmark } from 'lucide-react';


function Card({company,position,type,level,salary,location,posted,img}) {
  return (
    <div className="card">

        <div>
           <div className="top">
        <img src={img} alt="logo" />
        <button>save <Bookmark size={12} /></button>
         </div>
         
         <div className="center">
          <h3>{company} <span> {posted}</span></h3>
          <h2>{position}</h2>
          <div className='tag'>
            <h4>{type}</h4>
            <h4>{level}</h4>
          </div>

         </div>
        </div>



         <div className="bottom"> 
           <div>
            <h3>{salary}</h3>
            <p>{location}</p>
            </div>

            <div>
            <button>apply now</button>
            </div>

           </div>
         

      </div>
  )
}

export default Card
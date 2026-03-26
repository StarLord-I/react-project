import React from 'react'
import './card.css'
function Card(props) {
  return (
    <div className='card'>
        <img src={props.imgSrc} alt="profile" className='profile-img'/>
       <h3 className='name'>{props.title}</h3>
       <p className='bio'>{props.desc}</p>
    </div>
  )
}

export default Card
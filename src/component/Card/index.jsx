import React from 'react'
// import ImageOne from '../../assets/selected-projects/imageone.png'
import './index.css'

function Card({imageCard, titleCard, descCard}) {
  return (
    <div className="col">
    <div className="cardSection">
        <img src={imageCard} alt="Image Ill" className='imagecard' />
        <div className="title">{titleCard}</div>
        <div className="description">{descCard}</div>
    </div>
    </div>
  )
}

export default Card
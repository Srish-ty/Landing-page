import React from 'react';
import '../styles/Firstpage.style.css';
import v1 from '../../images/v1-image.jpg'


export const V1 = () => {
  return (
    <div className='v1'>
        <img src={v1} alt='v1' className='v1-image'></img>
    </div>
  )
}
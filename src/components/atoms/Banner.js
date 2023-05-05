import React from 'react';
import '../styles/Banner.style.css';
import ms from '../../images/ms.png';
import nv from '../../images/nv.png';
import vir from '../../images/vir.png';
import len from '../../images/len.png';
import nec from '../../images/nec.png';
import sam from '../../images/sam.png';
import hyu from '../../images/hyu.png';

export const Banner = () => {
  return (
    <div className='banner'>
        <span className='cnt'>
        <img className='bnimg' alt='bn' src={ms} ></img>
        <img className='bnimg' alt='bn' src={nv}></img>
        </span>
        <span className='cnt'>
        <img className='bnimg' alt='bn' src={vir}></img>
        <img className='bnimg' alt='bn' src={len}></img>
        </span>
        <span className='cnt'>
        <img className='bnimg' alt='bn' src={nec}></img>
        <img className='bnimg' alt='bn' src={sam}></img>
        </span>
        <img className='bnimg' alt='bn' src={hyu}></img>
    </div>
  )
}

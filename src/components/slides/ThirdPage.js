import React from 'react';
import '../styles/Thirdpage.style.css';
import g1 from '../../images/g1.png'
import g2 from '../../images/g2.png'
import g3 from '../../images/g3.png'
import g4 from '../../images/g4.png'
import g5 from '../../images/g5.png'
import g6 from '../../images/g6.png'
import g7 from '../../images/g7.png'
import g8 from '../../images/g8.png'
import { BlueBu } from '../atoms/BlueBu';

export const ThirdPage = () => {
  return (
    <div className='thirdpage'>
        <span className='grid-item-head h1 '>
        <h1>AI Avatars</h1>
        </span>
        <span className='grid-item-head h2 '>
        <h1>Custom Avatars</h1>            
        </span>
        <span className='grid-item'>
<img className='gri-img' src={g1} alt='grid-item'></img> <caption className='gri-cap'>Jonathan</caption>
        </span>
        <span className='grid-item'>
<img className='gri-img' src={g2} alt='grid-item'></img> <caption className='gri-cap'>Jonathan</caption>
        </span>
        <span className='grid-item'>
<img className='gri-img' src={g3} alt='grid-item'></img> <caption className='gri-cap'>Jonathan</caption>
        </span>
        <span className='grid-item'>
<img className='gri-img' src={g4} alt='grid-item'></img> <caption className='gri-cap'>Jonathan</caption>
        </span>
        <span className='grid-item'>
<img className='gri-img' src={g5} alt='grid-item'></img> <caption className='gri-cap'>Jonathan</caption>
        </span>
        <span className='grid-item'>
<img className='gri-img' src={g6} alt='grid-item'></img> <caption className='gri-cap'>Jonathan</caption>
        </span>
        <span className='grid-item'>
<img className='gri-img' src={g7} alt='grid-item'></img> <caption className='gri-cap'>Jonathan</caption>
        </span>
        <span className='grid-item'>
<img className='gri-img' src={g8} alt='grid-item'></img> <caption className='gri-cap'>Jonathan</caption>
        </span>
        <span className='grid-item-l l1 '>
A diverse cast of over 100 fully licensed AI avatars ready to support your video productions. And with more than 55 languages, you can take your message global.
    <BlueBu>See All AI Avatars</BlueBu>
        </span>
        <span className='grid-item-l l2 '>
Enterprise-ready custom avatars can be created anytime. Perfect for celebrities, politicians, brand ambassadors, news anchors, and sports figures.
<BlueBu>Create Custom Avatar</BlueBu>        
        </span>
    </div>
  )
}

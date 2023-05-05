import React from 'react';
import '../styles/Secondpage.style.css';
import {BlueBu} from '../atoms/BlueBu'
import vidb1 from '../../images/vidb1.png';
import vidb2 from '../../images/vidb2.png';
import vidb3 from '../../images/vidb3.png';

export const SecondPage = () => {
  return (
    <section className='secondcont'>
      <div className='pcont'>
        <h1>Training and How to Videos</h1>
        <p>It’s all about connecting with your audience. Make your training videos come to life with hyper-realistic AI avatars. Teach something new by creating how-to videos with a human touch.</p>
        <BlueBu>Create a Free AI Video</BlueBu>
      </div>

      <nav className='vidb'>
        <span className='vgrp1'>
        <span className='vidcont'>
          <img src={vidb1} alt='bvid'></img> <caption className='cap'>Marketing Video</caption>
        </span>
        <span className='vidcont'>
          <img src={vidb2} alt='bvid'></img> <caption className='cap'>How-To Video</caption>
        </span>
        </span>
        <span className='vidcont'>
          <img src={vidb3} alt='bvid'></img> <caption className='cap'>Training Video</caption>
        </span>
      </nav>

    </section>
  )
}

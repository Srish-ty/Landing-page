import React from 'react'
import { BlueBu } from './BlueBu';import '../styles/Firstpage.style.css';
import Mailimg from '../../images/Vector.png';


export const P1 = () => {
  return (
    <div className='p1'>
        <h1>Instantly Create AI Videos Using Basic Text</h1>
        <p>Generate realistic AI Avatar videos quickly and easily. Simply prepare your script and use our Text-to-Speech feature to create your first AI video in 5 minutes or less.</p>
        <BlueBu>Create a Free AI Video</BlueBu>
        <p className='smalle'>
        <img src={Mailimg} alt='mail'></img> <span style={{ paddingLeft:'1vw', paddingRight:'1vw'}}> No credit card is required </span>
        </p>
    </div>
  )
}

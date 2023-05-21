import React from 'react';
import '../styles/Fifthpage.style.css';
import fi1 from '../../images/fif1.png';
import fi2 from '../../images/fif2.png';
import { BlueBu } from '../atoms/BlueBu';


export const FifthPage = () => {
  return (
    <div className='fifconta'>
        <h1 className='fifhead'>Benefits of AI Video Generator</h1>
        <div className='fifcont'>
            <div className='fifbox'>
                <img src={fi1} alt='fifbox'></img>
                <p>
                    <h1>Traditional Video Creation</h1>
                    <ul className='lis'>
                        <li>Need to hire anchor/actor and filming team</li>
                        <li>Equipment and studios required</li>
                        <li>Editing requires expertise and cost</li>
                        <li>Concerns and Risk with re-shooting</li>
                    </ul>
                </p>
            </div>
            <div className='fifbox'>
                <img src={fi2} alt='fifbox'></img>
                <p>
                    <h1>AI Video Creation</h1>
                    <ul className='lis'>
                    <li>Use custom-made AI avatar that best fits your brand</li>
                    <li>Intuitive tool that's super easy to use for beginners</li>
                    <li>Time saving in video preparation, filming, and editing</li>
                    <li>Cost-saving in the entire video production process</li>
                    </ul>
                </p>
            </div>
        </div>
        
        <BlueBu>Create a Free AI Video</BlueBu>

    </div>
 
  )
}

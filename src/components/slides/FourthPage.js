import React from 'react';
import '../styles/Fourthpage.style.css';
import fp1 from '../../images/fp1.png';
import fp2 from '../../images/fp2.png';
import fp3 from '../../images/fp3.png';
import { BlueBu } from '../atoms/BlueBu';

export const FourthPage = () => {
  return (
    <>
    <div className='fourth-page'>
      <div className='fpbox'>
        <p className='fpara'>
          <h1>Multi Language TTS Supported</h1> Our AI avatars can speak any language with text to speech. Create AI videos in English, Spanish, Chinese, German, French, Hindi, Arabic and more.
        </p>
        <img className='fimg' alt='fpimg' src={fp1}></img>
      </div>
      <div className='fpbox second'>
        <p className='fpara'>
          <h1>Various Video Templates To Start From</h1> Prebuilt video templates are available for training videos, how to videos, marketing videos, explainer videos, news videos. Also social media template for YouTube, Tiktok and Instagram.
        </p>
        <img className='fimg' alt='fpimg' src={fp2}></img>
      </div>
      <div className='fpbox'>
        <p className='fpara'>
          <h1>Hassle Free Online Video Editor</h1> Anyone can quickly create in online video editor. No training required for our easy-to-use, drag-and-drop interface with powerful features such as closed caption, backgrounds, sound tracks.
        </p>
        <img className='fimg' alt='fpimg' src={fp3}></img>
      </div>
      
    </div>
    <BlueBu>Create a Free AI Video</BlueBu>
    </>
  )
}

import React from 'react';
import { P1 } from '../atoms/P1';
import { V1 } from '../atoms/V1';import '../styles/Firstpage.style.css'

export const FirstPage = () => {
  return (
    <section className='fcontainer'>
      <P1></P1>
      <V1></V1>
    </section>
  )
}

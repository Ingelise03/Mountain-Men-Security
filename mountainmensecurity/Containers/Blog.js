import React from 'react';
import ImageSlider from './ImageSlider';
import {SliderData}from './SliderData';


const blog = () => {
  
  return (
    <div className='slides' id='blog'>
        <ImageSlider slides={SliderData} />
    </div>
     

  )
}

export default blog
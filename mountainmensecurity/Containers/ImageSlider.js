import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
        <div className='title'>
        <h1>Meet Our Team</h1>
        </div>
       
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
                    
                <div className='card'> 
                    
                    <div >
                    <img src={slide.image} alt='travel image' className='image'/>
                    </div>
                    <div className='cardContent'>
                    <div>
                        <p>{slide.title}</p>
                    </div>
                    <div>
                      <a href={slide.link}>
                      <p>{slide.text}</p>
                      </a>
                     
                      
                        
                    </div>
                    </div>
                    
                    </div>
                   
            )}
        
            
          </div>
         
          
        );
      })}
      
    </section>
  );
};

export default ImageSlider;
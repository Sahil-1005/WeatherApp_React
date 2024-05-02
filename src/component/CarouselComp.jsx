import React from 'react'
import { useRef,useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
const CarouselComp = () => {
  return (
    <div>
      <Carousel>
                <div>
                    <img src="vite.svg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="vite.svg" />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
    </div>
  )
}

export default CarouselComp

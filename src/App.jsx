import React from 'react';
import './index.css'
import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import images from './images';
const App = () => {

  const [width, setWidth] = useState(0);
  const carousel = useRef();
  
  useEffect(()=>{
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="App">
        <h1 className='logo'>REACT SLIDER{" >"}</h1>
        <motion.div ref={carousel} className='carousel'>
          <motion.div drag='x' whileTap={{cursor: 'grabbing'}} dragConstraints={{right:0, left: -width}} className='inner-carousel'>
            {images.map((image) => {
              return(
                <motion.div className='item' key={image}>
                  <img src={image} alt='' />
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
    </div>
  );
}

<style>

</style>


export default App;

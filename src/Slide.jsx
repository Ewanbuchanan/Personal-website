import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import programmer from "./Photos/2500121_7040861.svg";
import learner from "./Photos/69128452194__28B3E311-8BBC-4F13-A506-A548F13F5BF4 (1).svg";
import ubc from "./Photos/CS logo narrow 2020-07-29_12-16-18 (1) (1).svg";
import leader from "./Photos/IMG_0125.svg";
import team from "./Photos/IMG_3421.svg";
import ewan from "./Photos/IMG_3649.svg";
import llearner from "./Photos/IMG_4037.svg";


const slides = [
programmer, learner, ubc, leader, team, ewan, llearner
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={slides[index]}
          alt="slide"
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Slideshow;

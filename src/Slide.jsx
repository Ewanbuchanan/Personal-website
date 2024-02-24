import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import programmer from "./Photos/Software-developer.jpg";
import learner from "./Photos/IMG_1919.jpg";
import ubc from "./Photos/CS logo narrow 2020-07-29_12-16-18.jpg";
import leader from "./Photos/IMG_0125.jpg";
import ewan from "./Photos/IMG_3649.PNG";
import llearner from "./Photos/IMG_4037.jpg";


const slides = [
  ewan, programmer, ubc, learner, leader, llearner
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3450); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={slides[index]}
          alt="slide"
          className="absolute h-[50%] w-[50%] justify-center size-[60%] bg-gradient-to-bl
           from-blue-900 border-4 border-blue-900 to-white translate-y-[50%] translate-x-[50%] rounded object-scale-down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          exit={{ opacity: 0 }}
          transition={{}}
        />
      </AnimatePresence>
  );
};

export default Slideshow;

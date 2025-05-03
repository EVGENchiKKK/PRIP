import React from 'react';
import { motion } from 'framer-motion';

export const WaveBackground = () => {
  return (
    <div className="waves absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none">
      <motion.div 
        className="wave"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      <motion.div 
        className="wave"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      ></motion.div>
      <motion.div 
        className="wave"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
      ></motion.div>
    </div>
  );
};

export default WaveBackground;
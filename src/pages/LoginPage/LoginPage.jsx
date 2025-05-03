import React from 'react';
import Logo from './../../image/img/Иконка муз.дорожки.png';
import LoginForm from '../../components/LoginForm';
import WaveBackground from './../../components/WaveBackground';
import { motion } from 'framer-motion';
import './styles.css';

export const LoginPage = () => {
  return (
    <div className="gradient-background min-h-100vh w-full flex items-center justify-center p-4 relative">
      <WaveBackground />

      <motion.div
        className="bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl w-full max-w-6xl h-[600px] flex flex-col md:flex-row overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Left side with logo */}
        <div className="relative w-full md:w-1/2 p-8 flex flex-col items-center justify-center">
          <div className="logo-pulse">
            <img src={Logo} alt="" />
          </div>
          <motion.p
            className="text-white text-opacity-80 mt-4 text-center max-w-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Инновационная платформа для современных технологий
          </motion.p>
        </div>

        {/* Right side with form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <LoginForm />
        </div>
      </motion.div>
    </div>
  );
};


export default LoginPage;
import React from 'react';
import { motion } from 'framer-motion';


const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Text content */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-1 text-sm font-semibold text-white bg-[#C2DB62] rounded-full">
                Transforming Businesses Digitally
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              <span className="text-[#C2DB62]">Krishna</span> Software Solutions
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-700 mb-8 leading-relaxed"
            >
              We build cutting-edge software solutions that drive growth, enhance productivity, and transform businesses for the digital age.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#C2DB62] text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transition-all duration-300"
              >
                
                Watch Demo
              </motion.button>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-10 flex items-center justify-center md:justify-start gap-6 text-gray-600"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C2DB62]">500+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C2DB62]">98%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C2DB62]">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </motion.div>
          </div>
          
          {/* Image/Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-[#C2DB62] rounded-2xl rotate-3 opacity-30"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform -rotate-1">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-700 rounded-xl h-80 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <div className="text-5xl font-bold mb-4">KS</div>
                    <div className="text-xl font-medium">Innovative Digital Solutions</div>
                    <div className="mt-4 flex justify-center">
                      <div className="animate-pulse bg-white h-2 w-2 rounded-full mx-1"></div>
                      <div className="animate-pulse bg-white h-2 w-2 rounded-full mx-1 animation-delay-200"></div>
                      <div className="animate-pulse bg-white h-2 w-2 rounded-full mx-1 animation-delay-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center text-gray-600"
        >
          <span className="text-sm mb-2">Scroll Down</span>
        
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowDown, Code, Shield, Zap, Users } from 'lucide-react';

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
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Text content - Now on LEFT side */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full">
                Transforming Businesses Digitally
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              <span className="text-blue-600">Krishna</span> Software Solutions
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-blue-800 mb-8 leading-relaxed"
            >
              We build cutting-edge software solutions that drive growth, enhance productivity, and transform businesses for the digital age.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Get Started
                <Zap className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-blue-600 border border-blue-200 font-semibold rounded-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-10 flex items-center justify-center md:justify-start gap-6 text-blue-800"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </motion.div>
          </div>
          
          {/* Illustration - Now on RIGHT side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className=" hidden md:w-1/2 md:flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl rotate-3 opacity-50"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform -rotate-1">
                {/* Custom SVG Illustration */}
                <svg viewBox="0 0 500 400" className="w-full h-80">
                  {/* Main developer figure */}
                  <circle cx="250" cy="120" r="80" fill="#dbeafe" stroke="#3b82f6" strokeWidth="3" />
                  
                  {/* Laptop */}
                  <rect x="180" y="180" width="140" height="100" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
                  <rect x="190" y="190" width="120" height="70" rx="5" fill="#dbeafe" />
                  
                  {/* Code lines */}
                  <rect x="200" y="205" width="60" height="3" fill="#3b82f6" />
                  <rect x="200" y="215" width="40" height="3" fill="#3b82f6" />
                  <rect x="200" y="225" width="70" height="3" fill="#3b82f6" />
                  <rect x="200" y="235" width="50" height="3" fill="#3b82f6" />
                  
                  {/* Developer head */}
                  <circle cx="250" cy="100" r="20" fill="#f3f4f6" stroke="#3b82f6" strokeWidth="2" />
                  
                  {/* Developer body */}
                  <rect x="235" y="120" width="30" height="40" fill="#f3f4f6" stroke="#3b82f6" strokeWidth="2" />
                  
                  {/* Icons around */}
                  <g transform="translate(100, 80)">
                    <circle cx="0" cy="0" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                    <Shield className="icon" x="-10" y="-10" width="20" height="20" fill="#3b82f6" />
                  </g>
                  
                  <g transform="translate(400, 150)">
                    <circle cx="0" cy="0" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                    <Code className="icon" x="-10" y="-10" width="20" height="20" fill="#3b82f6" />
                  </g>
                  
                  <g transform="translate(350, 300)">
                    <circle cx="0" cy="0" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                    <Users className="icon" x="-10" y="-10" width="20" height="20" fill="#3b82f6" />
                  </g>
                </svg>
                
                <div className="text-center mt-4">
                  <div className="text-lg font-semibold text-blue-700">Innovative Digital Solutions</div>
                  <div className="flex justify-center mt-2">
                    <div className="animate-pulse bg-blue-500 h-2 w-2 rounded-full mx-1"></div>
                    <div className="animate-pulse bg-blue-500 h-2 w-2 rounded-full mx-1 animation-delay-200"></div>
                    <div className="animate-pulse bg-blue-500 h-2 w-2 rounded-full mx-1 animation-delay-400"></div>
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
          className="flex flex-col items-center text-blue-600"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
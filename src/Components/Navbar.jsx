import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-3' 
          : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <div className="w-10 h-10 bg-[#C2DB62] rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-xl">M</span>
          </div>
          <span className="text-xl font-bold text-black">ModernNav</span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul 
          variants={containerVariants}
          className="hidden md:flex items-center space-x-8"
        >
          {navItems.map((item, index) => (
            <motion.li 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 hover:text-[#C2DB62] font-medium transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#C2DB62] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
          
          {/* CTA Button */}
          <motion.li variants={itemVariants}>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#b0cc47",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#C2DB62] text-black px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              Get Started
            </motion.button>
          </motion.li>
        </motion.ul>

        {/* Mobile Menu Button */}
        <motion.button
          variants={itemVariants}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {!isMenuOpen ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-6 h-6 flex flex-col justify-center space-y-1"
            >
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-4 h-0.5 bg-black"></span>
            </motion.div>
          ) : (
            <motion.div
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 180, opacity: 1 }}
              className="text-2xl"
            >
              ✕
            </motion.div>
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <ul className="px-4 py-6 space-y-6">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={mobileItemVariants}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-800 font-medium text-lg block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={mobileItemVariants}>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#C2DB62] text-black px-6 py-3 rounded-full font-semibold shadow-md"
                >
                  Get Started
                </motion.button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
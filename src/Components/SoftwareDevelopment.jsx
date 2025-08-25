// src/pages/ServicePage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "../data.js";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99]
    } 
  }
};

const ServicePage = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div 
        className="text-center mb-16 relative"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Background decorative elements */}
        <div className="absolute top-10 left-1/4 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-1/4 w-32 h-32 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-28 h-28 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <motion.div 
          className="inline-flex items-center justify-center mb-6"
          variants={fadeInUp}
        >
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></div>
          <span className="text-blue-600 font-medium tracking-wider uppercase text-sm">OUR SERVICES</span>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full ml-3"></div>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          variants={fadeInUp}
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Services</span>
        </motion.h1>
        
        <motion.p 
          className="max-w-3xl mx-auto text-xl text-gray-600 font-light"
          variants={fadeInUp}
        >
          Empowering your business with cutting-edge digital solutions tailored to your unique needs
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {servicesData.map((service) => (
          <motion.div 
            key={service.id}
            className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer h-80 border-2 transition-all duration-300 ${
              selectedService === service.id ? 'border-blue-500 shadow-xl ring-2 ring-blue-500/20' : 'border-white'
            }`}
            variants={fadeInUp}
            whileHover={{ y: -8, scale: 1.02 }}
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
            onClick={() => setSelectedService(service.id === selectedService ? null : service.id)}
          >
            <div className="relative h-full">
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3 bg-gradient-to-br from-blue-400 to-indigo-400 p-2 rounded-lg">{service.icon}</div>
                  <h3 className="text-xl font-bold transition-all duration-500 group-hover:translate-y-0">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 overflow-hidden text-blue-100">
                  {service.description}
                </p>
                
                {/* Hover Button */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  <button className="bg-white text-blue-600 text-sm font-medium py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Hover Indicator */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 transition-all duration-500 ${hoveredService === service.id ? 'w-full' : 'w-0'}`}></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {servicesData
                .filter(service => service.id === selectedService)
                .map(service => (
                  <div key={service.id} className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center">
                        <div className="text-4xl mr-4 bg-gradient-to-br from-blue-500 to-indigo-500 p-3 rounded-xl text-white">{service.icon}</div>
                        <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                      </div>
                      <button 
                        onClick={() => setSelectedService(null)}
                        className="text-gray-400 hover:text-gray-600 text-2xl bg-gray-100 hover:bg-gray-200 p-1 rounded-full transition-colors"
                      >
                        &times;
                      </button>
                    </div>
                    
                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">{service.description}</p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Offer</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-start bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-6 mb-8 border border-blue-200">
                      <h4 className="text-lg font-semibold text-blue-800 mb-3">Our Process</h4>
                      <p className="text-blue-700">
                        We follow a structured approach to deliver exceptional results. Our process includes requirement analysis, planning, development, testing, and deployment to ensure your project's success.
                      </p>
                    </div>
                    
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 w-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                      Request This Service
                    </button>
                  </div>
                ))
              }
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <motion.div 
        className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl shadow-2xl p-8 md:p-12 text-white mb-16 overflow-hidden relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={scaleIn}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 bg-white rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 -mb-32 -ml-32 bg-white rounded-full"></div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center relative">Why Businesses Choose Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
          {[
            { number: "100+", label: "Projects Completed" },
            { number: "95%", label: "Client Satisfaction" },
            { number: "50+", label: "Happy Clients" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16 border border-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={scaleIn}
      >
        <div className="md:flex">
          <div className="md:w-2/5 bg-gradient-to-br from-blue-500 to-indigo-600 p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 bg-white rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 -mb-32 -ml-32 bg-white rounded-full"></div>
            </div>
            
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Get Started Today</h2>
              <p className="opacity-90 mb-8">
                Ready to transform your business with our expert services? Contact us for a free consultation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-lg mr-4">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-lg mr-4">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>info@krishnasoftware.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Consultation</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Service Interest</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition">
                  <option>Select a service</option>
                  {servicesData.map(service => (
                    <option key={service.id}>{service.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"></textarea>
              </div>
              <button type="submit" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 w-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
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
    </div>
  );
};

export default ServicePage;
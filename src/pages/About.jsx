import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    } 
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    } 
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99]
    } 
  }
};

const AnimatedSection = ({ children, variant, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variant}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const [activeTab, setActiveTab] = useState('vision');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>

      {/* Header Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-blue-600">Krishna Software Solutions</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Bridging education with industry through innovative software solutions
          </motion.p>
          
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-4 h-4 bg-blue-600 rounded-full opacity-20"></div>
          <div className="absolute top-20 right-20 w-6 h-6 bg-purple-600 rounded-full opacity-20"></div>
          <div className="absolute bottom-10 left-1/4 w-8 h-8 bg-blue-400 rounded-full opacity-20"></div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection variant={fadeInLeft}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Established in 2025, Krishna Software Solutions is a visionary startup initiative of 
                  Krishna Engineering College, a proud institution under the umbrella of Krishna Education 
                  Society—a reputed educational society with over <span className="font-semibold text-blue-600">48 years of excellence</span> in Chhattisgarh.
                </p>
                <p>
                  Guided and mentored by <span className="font-semibold text-gray-900">Mr. Anand Kumar Tripathi</span>, 
                  an eminent educationist of the decade, Chairman of Krishna Engineering College, and 
                  Vice President at KPS Group with 50 years of industry expertise, we are driven by a 
                  strong foundation of knowledge, innovation, and values.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection variant={fadeInRight}>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 h-80 w-80 rounded-2xl absolute -z-10 -bottom-4 -right-4 animate-pulse"></div>
                <div className="bg-white h-80 w-80 rounded-2xl shadow-xl flex items-center justify-center p-8 border border-gray-100">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-600 mb-2">2025</div>
                    <div className="text-gray-600">Year Established</div>
                    <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto my-4"></div>
                    <div className="text-lg font-semibold text-gray-900">Pioneering the Future of Software Solutions</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Vision & Mission Tabs */}
          <AnimatedSection variant={scaleIn}>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-20 border border-gray-100">
              <div className="border-b border-gray-200">
                <div className="flex">
                  <button
                    className={`py-4 px-6 text-lg font-medium ${activeTab === 'vision' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('vision')}
                  >
                    Our Vision
                  </button>
                  <button
                    className={`py-4 px-6 text-lg font-medium ${activeTab === 'mission' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('mission')}
                  >
                    Our Mission
                  </button>
                </div>
              </div>
              
              <div className="p-8">
                {activeTab === 'vision' ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-start mb-6">
                      <div className="bg-blue-100 p-3 rounded-xl mr-4">
                        <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                    </div>
                    <p className="text-gray-600 text-lg">
                      To bridge education, innovation, and industry by creating impactful software solutions 
                      that transform businesses and empower society.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-start mb-6">
                      <div className="bg-green-100 p-3 rounded-xl mr-4">
                        <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                          <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-600">Deliver reliable, market-ready software solutions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                          <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-600">Nurture academic-industry collaboration</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                          <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-600">Empower businesses with digital transformation</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                          <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-600">Build a sustainable learning & innovation ecosystem</span>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
          </AnimatedSection>

          {/* Founder Section */}
          <AnimatedSection variant={scaleIn}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl shadow-2xl overflow-hidden mb-20 text-white">
              <div className="md:flex">
                <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                  <motion.h2 
                    className="text-2xl md:text-3xl font-bold mb-6"
                    variants={fadeInLeft}
                  >
                    Leadership & Guidance
                  </motion.h2>
                  <motion.p 
                    className="opacity-90 mb-8"
                    variants={fadeInLeft}
                  >
                    Guided by 50 years of industry expertise, we're building a foundation of knowledge, innovation, and values.
                  </motion.p>
                  <motion.div variants={fadeInLeft}>
                    <div className="flex items-center">
                      <div className="w-10 h-0.5 bg-white/50 mr-3"></div>
                      <span className="text-sm uppercase tracking-wider">Founder & Chairman</span>
                    </div>
                  </motion.div>
                </div>
                
                <div className="md:w-3/5 p-8 md:p-12 bg-white/10 backdrop-blur-sm">
                  <motion.div 
                    className="flex flex-col items-center md:items-start md:flex-row gap-8"
                    variants={staggerContainer}
                  >
                    <motion.div 
                      className="flex-shrink-0"
                      variants={fadeInUp}
                    >
                      <div className="h-40 w-40 bg-white/20 rounded-2xl flex items-center justify-center text-white text-6xl font-bold shadow-lg backdrop-blur-sm border border-white/20">
                        A
                      </div>
                    </motion.div>
                    
                    <motion.div variants={fadeInUp}>
                      <h3 className="text-2xl font-bold">Mr. Anand Kumar Tripathi</h3>
                      <p className="text-blue-200 font-medium mt-2">Founder - Krishna Software Solutions</p>
                      
                      <div className="mt-6 space-y-3 text-white/90">
                        <p className="flex items-start">
                          <svg className="h-5 w-5 text-blue-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Chairman - Krishna Engineering College
                        </p>
                        <p className="flex items-start">
                          <svg className="h-5 w-5 text-blue-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Vice Chairman - Krishna Society
                        </p>
                        <p className="flex items-start">
                          <svg className="h-5 w-5 text-blue-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Vice President - KPS Group
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Stats Section */}
          <AnimatedSection variant={staggerContainer}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {[
                { number: "48+", label: "Years of Educational Excellence" },
                { number: "50+", label: "Years of Industry Expertise" },
                { number: "2025", label: "Established Year" },
                { number: "100+", label: "Projects Delivered" },
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection variant={fadeInUp}>
            <div className="text-center bg-white rounded-3xl p-12 border border-gray-100 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                At Krishna Software Solutions, we aim to deliver excellence in software development, 
                product engineering, and technology-driven solutions that empower businesses and society alike.
              </p>
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-8 rounded-full transition duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>

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
        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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
}

export default About;
import React from "react";
import { Target, Eye, Heart, Users, Award, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 sm:px-8 md:px-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-10 right-10 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-10 sm:left-20 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-semibold text-base sm:text-lg mb-2 block">WHO WE ARE</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block leading-tight">
              About Our Company
              <span className="absolute -bottom-2 left-0 w-12 sm:w-16 h-1 bg-blue-500 rounded"></span>
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
              Welcome to our platform! We are passionate about delivering 
              <span className="font-semibold text-gray-800"> high-quality products and services </span> 
              that bring exceptional value to our customers. Our mission is to create meaningful 
              experiences and help businesses achieve their goals through innovation and excellence.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 text-sm sm:text-base">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-gray-700">500+ Clients</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-gray-700">25+ Awards</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-gray-700">24/7 Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-gray-700">99% Satisfaction</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-start gap-4 bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Target className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900">Our Mission</h3>
                  <p className="text-gray-600 text-sm">
                    To provide innovative solutions that make business operations easier and more efficient.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-start gap-4 bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Eye className="w-5 sm:w-6 h-5 sm:h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900">Our Vision</h3>
                  <p className="text-gray-600 text-sm">
                    To be a globally recognized leader, known for excellence and innovation.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-start gap-4 bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 sm:col-span-2"
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <Heart className="w-5 sm:w-6 h-5 sm:h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900">Our Values</h3>
                  <p className="text-gray-600 text-sm">
                    Integrity, innovation, teamwork, customer focus, and continuous improvement.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1661901400371-090def28d644?q=80&w=2071&auto=format&fit=crop"
              alt="About Us"
              className="w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            
            {/* Floating stats card */}
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-white p-4 sm:p-6 rounded-xl shadow-lg max-w-[90%] sm:max-w-xs">
              <div className="flex items-center mb-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3 sm:mr-4">
                  <Award className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">15+ Years</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Of Excellence</p>
                </div>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">
                Trusted by businesses worldwide for over a decade and a half.
              </p>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 bg-blue-500 rounded-full opacity-10"></div>
          <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-purple-500 rounded-full opacity-10"></div>
        </motion.div>
      </div>

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

export default About;

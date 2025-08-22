import React from "react";
import { Target, Eye, Heart, Users, Award, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-6 md:px-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-semibold text-lg mb-2 block">WHO WE ARE</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
              About Our Company
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500 rounded"></span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Welcome to our platform! We are passionate about delivering 
              <span className="font-semibold text-gray-800"> high-quality products and services </span> 
              that bring exceptional value to our customers. Our mission is to create meaningful 
              experiences and help businesses achieve their goals through innovation and excellence.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
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
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Our Mission</h3>
                  <p className="text-gray-600 text-sm">
                    To provide innovative solutions that make business operations easier and more efficient.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Our Vision</h3>
                  <p className="text-gray-600 text-sm">
                    To be a globally recognized leader, known for excellence and innovation.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 sm:col-span-2"
              >
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Our Values</h3>
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
              src="https://plus.unsplash.com/premium_photo-1661901400371-090def28d644?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            
            {/* Floating stats card */}
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">15+ Years</h3>
                  <p className="text-gray-600">Of Excellence</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Trusted by businesses worldwide for over a decade and a half.
              </p>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -top-6 -right-6 w-28 h-28 bg-blue-500 rounded-full opacity-10"></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-500 rounded-full opacity-10"></div>
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
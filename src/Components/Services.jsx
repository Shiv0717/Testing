import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Code, Smartphone, ShoppingCart, ArrowRight, Check } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Web Design & Development",
    desc: "Modern, responsive websites designed to enhance user experience and drive business growth. We create pixel-perfect designs with cutting-edge technologies.",
    icon: <ExternalLink className="w-6 h-6" />,
    features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Modern UI/UX"]
  },
  {
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Software Development",
    desc: "Custom software solutions tailored to meet your business needs with efficiency and scalability. From concept to deployment, we've got you covered.",
    icon: <Code className="w-6 h-6" />,
    features: ["Custom Solutions", "Scalable Architecture", "Quality Assurance", "Maintenance & Support"]
  },
  {
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Mobile App Development",
    desc: "User-friendly mobile apps for Android & iOS to engage customers anytime, anywhere. We build native and cross-platform applications.",
    icon: <Smartphone className="w-6 h-6" />,
    features: ["iOS & Android", "Cross-Platform", "User-Centric Design", "App Store Optimization"]
  },
  {
    img: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    title: "E-Commerce Solutions",
    desc: "Scalable online stores with secure payments and seamless shopping experiences. Boost your sales with our optimized e-commerce platforms.",
    icon: <ShoppingCart className="w-6 h-6" />,
    features: ["Secure Payments", "Inventory Management", "Sales Analytics", "Customer Management"]
  }
];

const ServicesSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-lg mb-2 block">OUR SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solutions That <span className="text-blue-600">Drive Growth</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape
          </p>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ 
              clickable: true,
              el: '.services-pagination',
              bulletClass: 'service-bullet',
              bulletActiveClass: 'service-bullet-active'
            }}
            autoplay={{ 
              delay: 5000,
              disableOnInteraction: false 
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="services-swiper pb-16"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative overflow-hidden group">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-cover min-h-[400px] group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors flex items-center">
                          Explore Service
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-10 flex flex-col justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 shadow-md">
                        {service.icon}
                      </div>
                      
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                        {service.desc}
                      </p>

                      <div className="mb-10">
                        <h4 className="text-lg font-semibold text-gray-800 mb-5 flex items-center">
                          <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                          Key Features:
                        </h4>
                        <ul className="space-y-4">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                                <Check className="w-4 h-4 text-blue-600" />
                              </div>
                              <span className="text-gray-700 font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex space-x-4">
                        <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300 flex items-center shadow-md hover:shadow-lg">
                          Get Started
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                        <button className="px-8 py-4 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md">
                          View Case Studies
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-6">
            <button
              ref={prevRef}
              className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-xl"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            
            <div className="services-pagination flex space-x-3"></div>
            
            <button
              ref={nextRef}
              className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-xl"
              aria-label="Next service"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>
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
        .service-bullet {
          width: 12px;
          height: 12px;
          background: #D1D5DB;
          border-radius: 50%;
          display: inline-block;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .service-bullet-active {
          background: #2563EB;
          width: 32px;
          border-radius: 8px;
        }
        
        .services-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </section>
  );
};

export default ServicesSlider;
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Code, Smartphone, ShoppingCart } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Web Design & Development",
    desc: "Modern, responsive websites designed to enhance user experience and drive business growth. We create pixel-perfect designs with cutting-edge technologies.",
    icon: <ExternalLink className="w-8 h-8" />,
    features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Modern UI/UX"]
  },
  {
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Software Development",
    desc: "Custom software solutions tailored to meet your business needs with efficiency and scalability. From concept to deployment, we've got you covered.",
    icon: <Code className="w-8 h-8" />,
    features: ["Custom Solutions", "Scalable Architecture", "Quality Assurance", "Maintenance & Support"]
  },
  {
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Mobile App Development",
    desc: "User-friendly mobile apps for Android & iOS to engage customers anytime, anywhere. We build native and cross-platform applications.",
    icon: <Smartphone className="w-8 h-8" />,
    features: ["iOS & Android", "Cross-Platform", "User-Centric Design", "App Store Optimization"]
  },
  {
    img: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    title: "E-Commerce Solutions",
    desc: "Scalable online stores with secure payments and seamless shopping experiences. Boost your sales with our optimized e-commerce platforms.",
    icon: <ShoppingCart className="w-8 h-8" />,
    features: ["Secure Payments", "Inventory Management", "Sales Analytics", "Customer Management"]
  }
];

const ServicesSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
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
            className="services-swiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative overflow-hidden">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-cover min-h-[350px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col justify-center">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                        {service.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.desc}
                      </p>

                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex space-x-4">
                        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                          Get Started
                        </button>
                        <button className="px-6 py-3 border border-blue-200 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300">
                          View Portfolio
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              ref={prevRef}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-300"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="services-pagination flex space-x-2"></div>
            
            <button
              ref={nextRef}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-300"
              aria-label="Next service"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .service-bullet {
          width: 12px;
          height: 12px;
          background: #E5E7EB;
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
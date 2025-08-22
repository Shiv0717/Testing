import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rahul Mehta",
    position: "Business Owner",
    feedback:
      "Very smooth experience! The categories and product details are super clear. This platform has transformed how I source products for my business.",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    rating: 4,
  },
  {
    name: "Anjali Verma",
    position: "Procurement Manager",
    feedback:
      "I loved how easy it was to navigate and connect with suppliers. Great platform! The customer support team is exceptionally responsive.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    position: "Startup Founder",
    feedback:
      "A game changer for small businesses. The platform saved me so much time! I've reduced my sourcing time by 60% since using this service.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
  },
  {
    name: "Priya Desai",
    position: "Operations Director",
    feedback:
      "The quality of suppliers on this platform is outstanding. We've formed partnerships with three new vendors in just two months.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Arun Kumar",
    position: "Supply Chain Specialist",
    feedback:
      "Intuitive interface with powerful features. The comparison tools helped us make better purchasing decisions with confidence.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why businesses choose us for their sourcing needs
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ 
              delay: 5000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            pagination={{ 
              clickable: true,
              el: '.testimonial-pagination',
              bulletClass: 'testimonial-bullet',
              bulletActiveClass: 'testimonial-bullet-active'
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl mb-4 border border-gray-100 p-8 h-full flex flex-col transition-all duration-300 hover:shadow-xl"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>

                  {/* Quote icon */}
                  <div className="text-blue-100 mb-4">
                    <Quote className="w-10 h-10 fill-blue-50" />
                  </div>

                  {/* Feedback */}
                  <p className="text-gray-700 leading-relaxed mb-8 flex-grow">
                    {t.feedback}
                  </p>

                  {/* Profile */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-14 h-14 rounded-full object-cover shadow-md border-2 border-white"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {t.name}
                      </h4>
                      <p className="text-sm text-gray-600">{t.position}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="testimonial-pagination flex justify-center gap-2 mt-6"></div>
        </div>

        {/* Stats section below testimonials */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-gray-200"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">1K+</div>
            <div className="text-gray-600">Suppliers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
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
        .testimonial-bullet {
          width: 10px;
          height: 10px;
          background: #D1D5DB;
          border-radius: 50%;
          display: inline-block;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .testimonial-bullet-active {
          background: #3B82F6;
          width: 30px;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
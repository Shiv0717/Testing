import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Code,
  Smartphone,
  ShoppingCart,
  ArrowRight,
  Check,
  Play,
  Pause,
  Sparkles,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
    title: "Web Design & Development",
    desc: "Modern, responsive websites designed to enhance user experience and drive business growth. We create pixel-perfect designs with cutting-edge technologies.",
    icon: <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />,
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Fast Loading",
      "Modern UI/UX",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
    title: "Software Development",
    desc: "Custom software solutions tailored to meet your business needs with efficiency and scalability. From concept to deployment, we've got you covered.",
    icon: <Code className="w-5 h-5 md:w-6 md:h-6" />,
    features: [
      "Custom Solutions",
      "Scalable Architecture",
      "Quality Assurance",
      "Maintenance & Support",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
    title: "Mobile App Development",
    desc: "User-friendly mobile apps for Android & iOS to engage customers anytime, anywhere. We build native and cross-platform applications.",
    icon: <Smartphone className="w-5 h-5 md:w-6 md:h-6" />,
    features: [
      "iOS & Android",
      "Cross-Platform",
      "User-Centric Design",
      "App Store Optimization",
    ],
    color: "from-green-500 to-teal-500",
  },
  {
    img: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
    title: "E-Commerce Solutions",
    desc: "Scalable online stores with secure payments and seamless shopping experiences. Boost your sales with our optimized e-commerce platforms.",
    icon: <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />,
    features: [
      "Secure Payments",
      "Inventory Management",
      "Sales Analytics",
      "Customer Management",
    ],
    color: "from-amber-500 to-orange-500",
  },
];

const ServicesSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 md:py-20 px-4 md:px-8  relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5 pattern-grid-lg text-blue-400"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center text-blue-600 font-semibold text-sm md:text-lg mb-2 px-4 py-2 rounded-full bg-blue-50 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            OUR SERVICES
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-800 mb-4">
            Premium <span className=" text-blue-600">Digital Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-blue-500 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business
            thrive in the digital landscape
          </p>
        </motion.div>

        <div className="relative">
          {/* Autoplay control */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setIsAutoplay(!isAutoplay)}
              className="flex items-center text-blue-600 transition-colors text-sm"
            >
              {isAutoplay ? (
                <>
                  <Pause className="w-4 h-4 mr-2" />
                  Pause Autoplay
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Play Autoplay
                </>
              )}
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              clickable: true,
              el: ".services-pagination",
              bulletClass: "service-bullet",
              bulletActiveClass: "service-bullet-active",
            }}
            autoplay={
              isAutoplay
                ? {
                    delay: 5000,
                    disableOnInteraction: false,
                  }
                : false
            }
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden border border-gray-200  transition-all duration-500"
                >
                  <div className="flex flex-col lg:flex-row gap-0">
                    {/* Image Section */}
                    <div className="relative overflow-hidden group lg:w-1/2">
                      <div className="aspect-w-16 aspect-h-9 md:aspect-h-12 lg:aspect-h-10">
                        <img
                          src={service.img}
                          alt={service.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <button className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg transition-all flex items-center mx-auto mb-4">
                          Explore Service
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                      <div
                        className={`absolute top-6 left-6 w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-lg`}
                      >
                        {service.icon}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center lg:w-1/2">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>

                      <p className="text-gray-700 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
                        {service.desc}
                      </p>

                      <div className="mb-8 md:mb-10">
                        <h4 className="text-lg font-semibold text-gray-900 mb-5 flex items-center">
                          <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                          Key Features:
                        </h4>
                        <ul className="space-y-3 md:space-y-4">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                <Check className="w-3.5 h-3.5 text-blue-600" />
                              </div>
                              <span className="text-gray-800 font-medium text-sm md:text-base">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center shadow-md">
                          Get Started
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                        <button className="px-6 py-3.5 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-sm">
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
          <div className="flex justify-center items-center mt-6 md:mt-8 space-x-4 md:space-x-6">
            <button
              ref={prevRef}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-800 shadow-lg flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-xl"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
            </button>

            <div className="services-pagination flex space-x-2 md:space-x-3"></div>

            <button
              ref={nextRef}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-800 shadow-lg flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-xl"
              aria-label="Next service"
            >
              <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
            </button>
          </div>
        </div>

        {/* Progress indicator */}
      </div>

      <style jsx>{`
        .service-bullet {
          width: 10px;
          height: 10px;
          background: #4b5563;
          border-radius: 50%;
          display: inline-block;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .service-bullet-active {
          background: #3b82f6;
          width: 28px;
          border-radius: 8px;
        }

        .services-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .pattern-grid-lg {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(96 165 250 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }

        @media (max-width: 768px) {
          .service-bullet {
            width: 8px;
            height: 8px;
          }

          .service-bullet-active {
            width: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSlider;

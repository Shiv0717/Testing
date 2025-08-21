import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [

  {
    name: "Rahul Mehta",
    feedback:
      "Very smooth experience! The categories and product details are super clear.",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    rating: 4,
  },
  {
    name: "Anjali Verma",
    feedback:
      "I loved how easy it was to navigate and connect with suppliers. Great platform!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    feedback:
      "A game changer for small businesses. The platform saved me so much time!",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12"
        >
          What People Say
        </motion.h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.03 }}
                className="relative my-4 bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl p-8 mx-4 h-full flex flex-col justify-between overflow-hidden"
              >
                {/* Decorative Quote */}
                <span className="absolute top-6 right-6 text-7xl text-gray-200 font-serif opacity-40 select-none">
                  “
                </span>

                {/* Feedback */}
                <p className="text-gray-700 italic leading-relaxed mb-8 relative z-10">
                  {t.feedback}
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4 mt-auto relative z-10">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-white"
                  />
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {t.name}
                    </h4>
                    <div className="flex gap-1 mt-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

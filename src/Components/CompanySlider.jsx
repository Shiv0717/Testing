"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const CompanySlider = () => {
  const companies = [
    { id: 1, logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { id: 2, logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { id: 3, logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { id: 4, logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png" },
    { id: 5, logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { id: 1, logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { id: 2, logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { id: 3, logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { id: 4, logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png" },
    { id: 5, logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  ];

  return (
    <div className="w-full py-10 bg-white">
      <h2 className="text-center text-2xl font-bold mb-6">
        Companies I’ve Worked With
      </h2>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView={3}
        spaceBetween={20}
        autoplay={{
          delay: 0, // no pause between transitions
          disableOnInteraction: false,
        }}
        speed={4000} // control marquee speed (ms for one slide transition)
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="flex items-center"
      >
        {companies.map((company) => (
          <SwiperSlide key={company.id}>
            <div className="flex justify-center items-center h-20">
              <img
                src={company.logo}
                alt={`Company ${company.id}`}
                className="h-12 object-contain  transition duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CompanySlider;

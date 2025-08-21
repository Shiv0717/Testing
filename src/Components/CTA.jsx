import React from "react";

const CTA = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-16 px-6 rounded-3xl shadow-2xl overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_70%)]"></div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Join us today and take the first step toward something amazing!
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-8 py-3 rounded-full bg-white text-indigo-600 font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-full border border-white text-white font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

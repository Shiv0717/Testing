import React from "react";
import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
            About Us
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500 rounded"></span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Welcome to our website! We are passionate about delivering 
            <span className="font-semibold text-gray-800"> high-quality products and services </span> 
            that bring value to our customers. Our mission is to create meaningful 
            experiences and help people achieve their goals.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <Target className="w-8 h-8 text-blue-500" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Our Mission</h3>
                <p className="text-gray-600 text-sm">
                  To provide innovative solutions that make life easier and better.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <Eye className="w-8 h-8 text-green-500" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Our Vision</h3>
                <p className="text-gray-600 text-sm">
                  To be a trusted global leader, recognized for excellence.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow hover:shadow-lg transition sm:col-span-2">
              <Heart className="w-8 h-8 text-red-500" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Our Values</h3>
                <p className="text-gray-600 text-sm">
                  Integrity, innovation, teamwork, and customer focus.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1661901400371-090def28d644?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us"
            className="rounded-2xl shadow-xl object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default About;

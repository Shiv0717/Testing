"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, User, MailIcon } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 px-4 py-12 md:py-20 flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center text-blue-600 font-semibold text-sm mb-4 px-4 py-2 rounded-full bg-blue-100"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              GET IN TOUCH
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's <span className="text-blue-600">Connect</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Have questions, feedback, or just want to say hello?  
              We'd love to hear from you! Reach out to us via email, phone,  
              or simply fill out the form.
            </p>
          </div>

          <div className="space-y-6">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                <Mail className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email Us</h3>
                <p className="text-gray-600">info@krishnasoftware.com</p>
                <p className="text-sm text-gray-500 mt-1">We'll reply within 24 hours</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                <Phone className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Call Us</h3>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-sm text-gray-500 mt-1">Mon to Fri, 9AM to 6PM</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                <MapPin className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Visit Us</h3>
                <p className="text-gray-600">Raipur, Chhattisgarh, India</p>
                <p className="text-sm text-gray-500 mt-1">Come say hello at our office</p>
              </div>
            </motion.div>
          </div>

          {/* Office Hours */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="p-6 bg-blue-50 rounded-xl border border-blue-100"
          >
            <div className="flex items-center space-x-3 mb-3">
              <Clock className="text-blue-600 w-5 h-5" />
              <h3 className="font-semibold text-gray-900">Office Hours</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-xl rounded-2xl p-6 md:p-8 border border-blue-100"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
            <p className="text-gray-600">Fill out the form below and we'll get back to you soon.</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </motion.button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            We respect your privacy and will never share your information with third parties.
          </p>
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
      `}</style>
    </div>
  );
};

export default ContactPage;
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Rocket, Server, Database, Cloud, Layers, ChevronRight, Sparkles } from "lucide-react";

const tools = [
  {
    name: "React.js",
    icon: <Code className="w-8 h-8 text-blue-600" />,
    color: "bg-blue-100",
    borderColor: "border-blue-200",
    desc: "Component-driven UI library for fast and interactive apps.",
    features: ["Component-based", "Virtual DOM", "Hooks API"],
  },
  {
    name: "Next.js",
    icon: <Rocket className="w-8 h-8 text-purple-600" />,
    color: "bg-purple-100",
    borderColor: "border-purple-200",
    desc: "Full-stack framework with server-side rendering & API routes.",
    features: ["SSR/SSG", "API Routes", "File-based Routing"],
  },
  {
    name: "Node.js & Express",
    icon: <Server className="w-8 h-8 text-green-600" />,
    color: "bg-green-100",
    borderColor: "border-green-200",
    desc: "Scalable backend framework for APIs and real-time services.",
    features: ["JavaScript Runtime", "Non-blocking I/O", "Middleware Support"],
  },
  {
    name: "MongoDB",
    icon: <Database className="w-8 h-8 text-emerald-600" />,
    color: "bg-emerald-100",
    borderColor: "border-emerald-200",
    desc: "NoSQL database optimized for modern applications.",
    features: ["Document Database", "Scalable", "Flexible Schema"],
  },
  {
    name: "Firebase",
    icon: <Cloud className="w-8 h-8 text-orange-500" />,
    color: "bg-orange-100",
    borderColor: "border-orange-200",
    desc: "Authentication, Firestore, and hosting in one platform.",
    features: ["Real-time Database", "Authentication", "Hosting"],
  },
  {
    name: "Tailwind CSS",
    icon: <Layers className="w-8 h-8 text-sky-500" />,
    color: "bg-sky-100",
    borderColor: "border-sky-200",
    desc: "Utility-first CSS framework for sleek & responsive UIs.",
    features: ["Utility-first", "Responsive", "Customizable"],
  },
];

const Tools = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-50 py-24 px-6 md:px-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute text-blue-200/30"
            style={{
              top: `${15 + i * 12}%`,
              left: `${i * 15}%`,
            }}
          >
            <Code size={48} />
          </motion.div>
        ))}
      </div>

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center gap-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-full px-4 py-1.5 mb-4"
        >
          <Sparkles size={14} />
          Our Tech Stack
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Powerful Tools for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Exceptional Results</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg"
        >
          We leverage cutting-edge technologies to build fast, scalable, and user-centric solutions that drive your business forward.
        </motion.p>
      </div>

      {/* Tools Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto relative z-10">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className={`relative bg-white p-6 rounded-2xl shadow-sm group-hover:shadow-xl transition-all duration-300 border ${tool.borderColor} flex flex-col h-full overflow-hidden`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${tool.color} transition-all duration-300 group-hover:scale-110`}>
                  {tool.icon}
                </div>
                <motion.div
                  animate={{ x: hoveredIndex === index ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-400 group-hover:text-blue-500"
                >
                  <ChevronRight size={20} />
                </motion.div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {tool.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {tool.desc}
              </p>
              
              <div className="pt-4 border-t border-gray-100">
                <ul className="space-y-2">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-xs text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to action */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-2xl mx-auto text-center mt-16 relative z-10"
      >
        <p className="text-gray-600 mb-6">
          Want to know how we can leverage these technologies for your project?
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          Let's Discuss Your Project
        </button>
      </motion.div>
    </section>
  );
};

export default Tools;
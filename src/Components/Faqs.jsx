import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We provide web development, UI/UX design, and mobile app development.",
    },
    {
      question: "How can I contact you?",
      answer: "You can reach us through our contact form or email us directly.",
    },
    {
      question: "Do you offer support after project delivery?",
      answer:
        "Yes, we offer free support for a limited time and extended support on request.",
    },
    {
      question: "What is your development process?",
      answer:
        "We follow agile methodology – starting with requirement gathering, design, development, testing, and deployment.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Find answers to the most common questions about our services and
          processes. Still need help? <a href="#contact" className="text-blue-600 font-medium hover:underline">Contact us</a>.
        </p>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 cursor-pointer transition-all duration-300 hover:shadow-md"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`mt-3 text-gray-600 leading-relaxed transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;

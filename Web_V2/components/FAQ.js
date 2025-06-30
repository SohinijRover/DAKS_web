"use client";
import { useState } from 'react';
import { FaChevronDown, FaQuestionCircle, FaLightbulb } from 'react-icons/fa';

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    question: "Sed do eiusmod tempor incididunt ut labore et dolore?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
  },
  {
    question: "Ut enim ad minim veniam, quis nostrud exercitation?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    question: "Duis aute irure dolor in reprehenderit in voluptate?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
  },
  {
    question: "Excepteur sint occaecat cupidatat non proident?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-[#ff766a]/20 text-sm font-medium bg-[#ff766a]/5 mb-6">
            <FaQuestionCircle className="w-3 h-3 text-[#ff766a] mr-2" />
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Frequently Asked <span className="bg-gradient-to-r from-[#ff766a] to-[#ff766a]/80 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="glass rounded-2xl border border-white/10 hover:border-[#ff766a]/20 overflow-hidden transition-all duration-300 group"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 sm:px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-all duration-300 group-hover:bg-[#ff766a]/5"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-[#ff766a]/20 text-[#ff766a]' 
                      : 'bg-gray-700/50 text-gray-400 group-hover:bg-[#ff766a]/10 group-hover:text-[#ff766a]'
                  }`}>
                    <FaLightbulb className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold pr-4 text-white group-hover:text-[#ff766a]/90 transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-[#ff766a]/20 text-[#ff766a]' 
                    : 'bg-gray-700/50 text-gray-400 group-hover:bg-[#ff766a]/10 group-hover:text-[#ff766a]'
                }`}>
                  <FaChevronDown 
                    className={`w-4 h-4 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              
              {/* Answer Content */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 sm:px-8 pb-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8" /> {/* Spacer for alignment */}
                    <div className="flex-1">
                      <p className="text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                      
                      {/* Additional helpful info */}
                      <div className="mt-4 p-4 bg-[#ff766a]/5 rounded-xl border border-[#ff766a]/10">
                        <p className="text-sm text-gray-500">
                          <strong className="text-[#ff766a]">Helpful tip:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <button className="group bg-[#ff766a] hover:bg-[#ff766a]/90 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-[#ff766a]/25 text-white relative overflow-hidden">
            <span className="relative z-10">Contact Support</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

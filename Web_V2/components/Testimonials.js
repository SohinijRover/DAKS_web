"use client";
import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    author: "John Doe",
    role: "Lorem Ipsum",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b15e52c2?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    author: "Jane Smith",
    role: "Lorem Ipsum",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    author: "Mike Johnson",
    role: "Lorem Ipsum",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const goTo = (index) => {
    setIsAutoPlaying(false);
    setCurrent(index);
  };

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-[#ff766a]/20 text-sm font-medium bg-[#ff766a]/5 mb-6">
            <FaStar className="w-3 h-3 text-[#ff766a] mr-2" />
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            What People <span className="bg-gradient-to-r from-[#ff766a] to-[#ff766a]/80 bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="glass rounded-3xl p-8 sm:p-12 border border-white/10 hover:border-[#ff766a]/20 transition-all duration-500 group">
            
            {/* Quote Icon */}
            <div className="w-16 h-16 bg-[#ff766a]/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#ff766a]/20 transition-all duration-300">
              <FaQuoteLeft className="text-2xl text-[#ff766a]" />
            </div>
            
            {/* Rating Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <FaStar key={i} className="w-5 h-5 text-[#ff766a]" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              "{testimonials[current].quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-center gap-4">
              <div className="relative">
                <img 
                  src={testimonials[current].avatar}
                  alt={testimonials[current].author}
                  className="w-16 h-16 rounded-full border-2 border-[#ff766a] shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#ff766a] rounded-full flex items-center justify-center">
                  <FaStar className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg font-semibold text-white">{testimonials[current].author}</p>
                <p className="text-gray-400">{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:border-[#ff766a]/50 hover:bg-[#ff766a]/10 transition-all duration-300 group"
            >
              <FaChevronLeft className="text-gray-400 group-hover:text-[#ff766a] transition-colors" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:border-[#ff766a]/50 hover:bg-[#ff766a]/10 transition-all duration-300 group"
            >
              <FaChevronRight className="text-gray-400 group-hover:text-[#ff766a] transition-colors" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === current 
                    ? 'w-8 h-3 bg-[#ff766a]' 
                    : 'w-3 h-3 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-gray-500 hover:text-[#ff766a] transition-colors"
            >
              {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

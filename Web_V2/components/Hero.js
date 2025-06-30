"use client";
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-blue-900/20" />
        <div className="absolute inset-0 bg-[url('/space.jpeg')] bg-cover bg-center opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className={`space-y-8 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-violet-500/20 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-[#fff785] rounded-full mr-2 animate-pulse"></span>
            Coming Soon: The Future of Goal Achievement
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            <span className="block">All Your Goals,</span>
            <span className="block gradient-text">Within Our Sphere</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Experience the future of goal-setting and achievement with DAKSphere, 
            a revolutionary platform that empowers you to reach new heights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="border border-white/20 hover:border-white/40 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105 glass">
              Explore Now
            </button>
            <button className="border border-white/20 hover:border-white/40 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105 glass">
              Join the Journey
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

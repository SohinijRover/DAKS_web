"use client";
import { FaRocket, FaChartLine, FaBrain, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: FaRocket,
    title: "Goal Acceleration",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "echoes"
  },
  {
    icon: FaChartLine,
    title: "Progress Analytics",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "card2"
  },
  {
    icon: FaBrain,
    title: "AI-Powered Coaching",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "echoes"
  },
  {
    icon: FaUsers,
    title: "Community Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "card2"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-[#ff766a]/20 text-sm font-medium bg-[#ff766a]/5 mb-6">
            <span className="w-2 h-2 bg-[#ff766a] rounded-full mr-2 animate-pulse"></span>
            Powerful Features
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Discover <span className="bg-gradient-to-r from-[#ff766a] to-[#ff766a]/80 bg-clip-text text-transparent">Innovation</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-6 lg:p-8 rounded-3xl glass border border-white/10 hover:border-[#ff766a]/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#ff766a]/10"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-15 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-25"
                style={{ backgroundImage: `url(/${feature.image}.jpeg)` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ff766a]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10 space-y-4">
                {/* Icon Container */}
                <div className="w-16 h-16 bg-[#ff766a]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#ff766a]/20 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="text-2xl lg:text-3xl text-[#ff766a] group-hover:text-[#ff766a]/90 transition-colors duration-300" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-[#ff766a]/90 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm lg:text-base group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#ff766a]/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#ff766a]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

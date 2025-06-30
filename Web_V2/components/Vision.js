import { FaSpaceShuttle, FaBullseye, FaStar } from "react-icons/fa";
import Image from "next/image";

const Vision = () => {
  return (
    <section id="vision" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* First Vision Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
          
          {/* Image Container */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-500">
              <Image 
                src="/somuch.jpeg"
                alt="Person on Moon"
                width={700}
                height={400}
                className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating Icon */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-[#ff766a] hover:bg-[#ff766a]/90 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-110 cursor-pointer">
              <FaSpaceShuttle className="text-xl sm:text-2xl text-white" />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#ff766a] to-[#ff766a]/70 rounded-full blur-sm opacity-60" />
          </div>

          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-[#ff766a]/20 text-sm font-medium bg-[#ff766a]/5 hover:bg-[#ff766a]/10 transition-colors duration-300">
              <span className="w-2 h-2 bg-[#ff766a] rounded-full mr-2 animate-pulse"></span>
              Our Planetary Vision
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Redefine Your <span className="bg-gradient-to-r from-[#ff766a] to-[#ff766a]/80 bg-clip-text text-transparent">Horizons</span>
            </h2>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
              At DAKSphere, we are on a mission to transform the way you achieve your goals. 
              Leveraging cutting-edge technology and a deep understanding of human motivation.
            </p>

            {/* Feature List */}
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ff766a]/10 rounded-xl flex items-center justify-center group-hover:bg-[#ff766a]/20 transition-colors duration-300">
                  <FaBullseye className="text-xl text-[#ff766a]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2 text-white">Ignite Your Ambition</h4>
                  <p className="text-gray-400 leading-relaxed">Elevate Your Mindset, Amplify Your Achievement with precision-focused strategies</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ff766a]/10 rounded-xl flex items-center justify-center group-hover:bg-[#ff766a]/20 transition-colors duration-300">
                  <FaStar className="text-xl text-[#ff766a]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2 text-white">Sustainable Success</h4>
                  <p className="text-gray-400 leading-relaxed">Discover the Power of Data-Driven Goal Tracking and consistent progress</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group bg-[#ff766a] hover:bg-[#ff766a]/90 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-[#ff766a]/25 hover:shadow-[#ff766a]/40 text-white relative overflow-hidden">
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Second Vision Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content - Order 2 on mobile, 1 on desktop */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Empowering Your <span className="bg-gradient-to-r from-[#ff766a] to-[#ff766a]/80 bg-clip-text text-transparent">Dreams</span>
            </h2>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
              At DAKSphere, we believe that every individual has the capacity to achieve 
              extraordinary things. Our platform is designed to be your personal catalyst, 
              providing you with the tools and insights you need to succeed.
            </p>

            {/* Stats or Additional Info */}
            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-[#ff766a] mb-1">10K+</div>
                <div className="text-gray-400 text-sm">Goals Achieved</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-[#ff766a] mb-1">98%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button className="group bg-[#ff766a] hover:bg-[#ff766a]/90 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-[#ff766a]/25 hover:shadow-[#ff766a]/40 text-white relative overflow-hidden">
                <span className="relative z-10">Claim Your Future</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </button>
            </div>
          </div>

          {/* Image Container - Order 1 on mobile, 2 on desktop */}
          <div className="relative group order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-500">
              <Image 
                src="/Starry.jpeg"
                alt="Starry Sky"
                width={700}
                height={400}
                className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating Icon */}
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 bg-[#ff766a] hover:bg-[#ff766a]/90 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-110 cursor-pointer">
              <FaStar className="text-xl sm:text-2xl text-white" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#ff766a] to-[#ff766a]/70 rounded-full blur-sm opacity-60" />
            <div className="absolute top-1/2 -left-6 w-6 h-6 bg-[#ff766a]/40 rounded-full blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

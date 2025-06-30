import { FaCheck, FaRocket, FaStar, FaCrown, FaFire } from 'react-icons/fa';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    icon: FaRocket,
    features: [
      'Lorem ipsum dolor sit',
      'Consectetur adipiscing',
      'Sed do eiusmod tempor',
      'Incididunt ut labore'
    ],
    popular: false,
    color: 'gray'
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    icon: FaStar,
    features: [
      'Lorem ipsum dolor sit amet',
      'Consectetur adipiscing elit',
      'Sed do eiusmod tempor',
      'Incididunt ut labore et',
      'Dolore magna aliqua',
      'Ut enim ad minim veniam'
    ],
    popular: true,
    color: 'orange'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    icon: FaCrown,
    features: [
      'Lorem ipsum dolor sit amet',
      'Consectetur adipiscing elit',
      'Sed do eiusmod tempor',
      'Incididunt ut labore et',
      'Dolore magna aliqua',
      'Ut enim ad minim veniam'
    ],
    popular: false,
    color: 'premium'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-[#ff766a]/20 text-sm font-medium bg-[#ff766a]/5 mb-6">
            <FaFire className="w-3 h-3 text-[#ff766a] mr-2" />
            Pricing Plans
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Simple <span className="bg-gradient-to-r from-[#ff766a] to-[#ff766a]/80 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-6 lg:p-8 rounded-3xl border transition-all duration-500 hover:scale-105 group ${
                plan.popular 
                  ? 'border-[#ff766a] bg-gradient-to-br from-[#ff766a]/10 via-[#ff766a]/5 to-transparent shadow-xl shadow-[#ff766a]/10' 
                  : 'border-white/10 glass hover:border-[#ff766a]/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#ff766a] hover:bg-[#ff766a]/90 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2 transition-colors duration-300">
                    <FaFire className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-[#ff766a]/20 group-hover:bg-[#ff766a]/30' 
                    : 'bg-gray-700/50 group-hover:bg-[#ff766a]/10'
                }`}>
                  <plan.icon className={`text-2xl transition-colors duration-300 ${
                    plan.popular ? 'text-[#ff766a]' : 'text-gray-400 group-hover:text-[#ff766a]'
                  }`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>
                
                <div className="mb-6">
                  <span className={`text-4xl lg:text-5xl font-bold transition-colors duration-300 ${
                    plan.popular ? 'text-[#ff766a]' : 'text-white group-hover:text-[#ff766a]'
                  }`}>
                    {plan.price}
                  </span>
                  {plan.price !== 'Free' && plan.price !== 'Custom' && (
                    <span className="text-gray-400 ml-2 text-lg">/{plan.period}</span>
                  )}
                  {plan.price === 'Custom' && (
                    <span className="text-gray-400 text-lg ml-2">{plan.period}</span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-colors duration-300 ${
                      plan.popular ? 'bg-[#ff766a]/20' : 'bg-gray-700/50 group-hover:bg-[#ff766a]/20'
                    }`}>
                      <FaCheck className={`w-3 h-3 transition-colors duration-300 ${
                        plan.popular ? 'text-[#ff766a]' : 'text-gray-400 group-hover:text-[#ff766a]'
                      }`} />
                    </div>
                    <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 relative overflow-hidden group/btn ${
                plan.popular
                  ? 'bg-[#ff766a] hover:bg-[#ff766a]/90 text-white shadow-lg shadow-[#ff766a]/25 hover:shadow-[#ff766a]/40'
                  : 'border border-white/20 hover:border-[#ff766a]/50 glass text-white hover:bg-[#ff766a]/10'
              }`}>
                <span className="relative z-10">
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </span>
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                )}
              </button>

              {/* Decorative Elements */}
              {plan.popular && (
                <>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#ff766a]/40 rounded-full blur-sm" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#ff766a]/30 rounded-full blur-md" />
                </>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <FaCheck className="text-[#ff766a] w-3 h-3" />
              Lorem ipsum dolor
            </span>
            <span className="flex items-center gap-2">
              <FaCheck className="text-[#ff766a] w-3 h-3" />
              Consectetur adipiscing
            </span>
            <span className="flex items-center gap-2">
              <FaCheck className="text-[#ff766a] w-3 h-3" />
              Sed do eiusmod
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

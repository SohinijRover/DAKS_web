import { FaTwitter, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold gradient-text mb-4">DAKSphere</div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
              Redefining the future of goal achievement through innovative technology 
              and human-centered design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:border-violet-400 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:border-violet-400 transition-colors">
                <FaGithub />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:border-violet-400 transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:border-violet-400 transition-colors">
                <FaDiscord />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 DAKSphere. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

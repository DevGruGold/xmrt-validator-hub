import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">XMRT Asset Validation</h3>
            <p className="text-sm opacity-80">
              Professional Validation for Digital Assets
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/resources" className="hover:text-accent transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors">Validation Guide</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Asset Calculator</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Expert Network</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:xmrtsolutions@gmail.com" className="hover:text-accent transition-colors">
                  xmrtsolutions@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+50661500559" className="hover:text-accent transition-colors">
                  +506 6150 0559
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} XMRT Asset Validation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
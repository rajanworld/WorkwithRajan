import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest-light border-t border-mint/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-mint">Rajan</h3>
            <p className="text-white/60">
              Full Stack Developer specializing in React, Node.js, and modern web technologies.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/web-development" className="text-white/60 hover:text-mint">Web Development</Link></li>
              <li><Link to="/services/mobile-apps" className="text-white/60 hover:text-mint">Mobile Apps</Link></li>
              <li><Link to="/services/ecommerce" className="text-white/60 hover:text-mint">E-commerce Solutions</Link></li>
              <li><Link to="/services/consulting" className="text-white/60 hover:text-mint">Technical Consulting</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/60 hover:text-mint">About</Link></li>
              <li><Link to="/portfolio" className="text-white/60 hover:text-mint">Portfolio</Link></li>
              <li><Link to="/testimonials" className="text-white/60 hover:text-mint">Testimonials</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-mint">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-mint">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-mint">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:contact@example.com" className="text-white/60 hover:text-mint">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-white/60">
              © 2024 Rajan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
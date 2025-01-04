import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest-light border-t border-mint/10">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Connect Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-semibold text-white">Connect with Me</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/rajanworld001/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-mint transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:kapcho99@gmail.com" className="text-white/60 hover:text-mint transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://github.com/rajanworld?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-mint transition-colors duration-300">
                <Github className="w-6 h-6" />
              </a>
            </div>
            <p className="text-white/60 mt-4 text-center md:text-left">
              © 2024 Rajan. All rights reserved.
            </p>
          </div>

          {/* Legal Information Section */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h4 className="font-semibold text-white">Legal Information</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-white/60 hover:text-mint transition-colors duration-300">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/60 hover:text-mint transition-colors duration-300">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
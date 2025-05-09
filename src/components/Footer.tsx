import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {

  useEffect(() => {
    // Create container div
    const container = document.createElement("div");
    container.id = "autoindex-chat-widget-container";
    document.body.appendChild(container);
    
    // Create script element
    const script = document.createElement("script");
    script.src = "https://ai.kapcho.com/widget/embed.js";
    script.async = true;
    script.defer = true;
    script.setAttribute("data-widget-id", "f921a8cb33c942a7");
    script.setAttribute("data-theme", "light");
    script.setAttribute("data-position", "right");
    script.setAttribute("data-button-color", "#64ffda");
    script.setAttribute("data-button-icon", "chat");
    script.setAttribute("data-welcome-message", "Hello! Ask me anything about the documents.");
    script.setAttribute("data-width", "380px");
    script.setAttribute("data-height", "600px");
    script.setAttribute("data-api-base-url", "https://ai.kapcho.com");
    script.setAttribute("data-debug", "false");
    
    document.body.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      if (container) document.body.removeChild(container);
      if (script) document.body.removeChild(script);
    };
  }, []);
  
  return (
    <>
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
              <li>
                <Link to="/digital-guide-2025" className="text-white/60 hover:text-mint transition-colors duration-300">Digital Marketing Guide 2025</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
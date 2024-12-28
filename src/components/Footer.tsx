import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest-light border-t border-mint/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/rajanworld001/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-mint">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:kapcho99@gmail.com" className="text-white/60 hover:text-mint">
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
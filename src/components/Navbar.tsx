import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-mint">
          Rajan
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {/* <Link to="#services" className="text-white/90 hover:text-white transition-colors">
            Services
          </Link>
          <Link to="#portfolio" className="text-white/90 hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link to="#about" className="text-white/90 hover:text-white transition-colors">
            About
          </Link>
          <Link to="#contact" className="text-white/90 hover:text-white transition-colors">
            Contact
          </Link> */}
        </div>
        <Button className="bg-mint hover:bg-mint/90 text-forest font-medium">
          Hire Me
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ContactForm";
const Hero: React.FC = () => {
    const handlePortfolioClick = () => {
        document.getElementById("portfolio-section")?.scrollIntoView({ behavior: "smooth" });
      };
    return (
      <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto grid gap-12 items-center lg:grid-cols-2">
        <div className="space-y-8">
      <div className="flex items-center gap-2 bg-mint/10 w-fit px-4 py-2 rounded-full border border-mint/20">
        <Star className="w-4 h-4 text-mint" />
        <span className="text-mint text-sm font-medium">Full Stack Developer & AI Specialist</span>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white" role="heading">
        Web Development & AI Solutions for Modern Businesses
      </h1>
      <p className="text-base sm:text-lg text-white/80 max-w-md">
        From custom web applications to AI automation, I deliver end-to-end solutions. Expertise in full-stack development, AI integration, SEO optimization, and digital marketing to help your business thrive.
      </p>
      <div className="flex flex-wrap gap-4">
        <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">React</Badge>
        <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">PHP</Badge>
        <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">Node.js</Badge>
        <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">HTML/CSS</Badge>
        <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">Tailwindcss</Badge>
        <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">AI Automation</Badge>
        <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">SEO</Badge>
        <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">TypeScript</Badge>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button  
          className="bg-mint hover:bg-mint/90 text-forest font-medium px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-transform duration-300 hover:scale-105"
          onClick={() => window.open("https://calendly.com/kapcho99/30min", "_blank")}
        >
          Schedule a Meeting <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button 
          variant="outline" 
          className="border-mint/20 text-mint hover:bg-mint/10 transition-transform duration-300 hover:scale-105"
          onClick={handlePortfolioClick}
        >
          Explore My Portfolio
        </Button>
      </div>
        </div>
        <div className="relative mt-12 lg:mt-0">
      <div className="absolute -inset-0.5 bg-mint/20 rounded-2xl blur opacity-30" />
      <div className="relative bg-forest-light p-6 sm:p-8 rounded-2xl shadow-2xl border border-mint/10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-mint/10 rounded-full flex items-center justify-center">
        <span className="text-2xl font-bold text-mint">
          <img
            src="/rajan.webp"
            className="rounded-full border-4 border-mint/10 object-cover transition-transform duration-300 hover:scale-110"
            alt="Rajan Full Stack Developer"
          />
        </span>
          </div>
          <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white">Rajan</h2>
        <p className="text-mint">Chandigarh, India</p>
          </div>
        </div>
        <div className="space-y-4 mb-6">
          <div className="flex flex-wrap gap-2">
        <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">
          Available Now
        </Badge>
        <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">
          100% Job Success
        </Badge>
          </div>
          <p className="text-white/80">Expert in building modern web applications, AI solutions, and driving digital growth through SEO and performance optimization.</p>
        </div>
        <ContactForm />
      </div>
        </div>
      </div>
    </section>
    );
};

export default Hero;
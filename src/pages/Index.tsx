import React from 'react';
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Profile from "@/components/Profile";
import Testimonials from "@/components/Testimonials";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Briefcase, Users, Star, GraduationCap, Languages } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const handlePortfolioClick = () => {
    document.getElementById("portfolio-section").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto grid gap-12 items-center lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-center gap-2 bg-mint/10 w-fit px-4 py-2 rounded-full border border-mint/20">
              <Star className="w-4 h-4 text-mint" />
              <span className="text-mint text-sm font-medium">Top Rated Developer on Upwork</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white" role="heading">
              Custom web solutions designed to grow your business
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-md">
              You have the idea, and I have the skills to make it happen. With 11+ years of experience and a strong track record, I create websites, apps, and custom solutions that work for your business. Let’s discuss and turn your vision into reality!
            </p>
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
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">
                    Available Now
                  </Badge>
                  <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">
                    100% Job Success
                  </Badge>
                  <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">
                    Top Rated Plus
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Languages className="w-4 h-4 text-mint" />
                  <span className="text-white/80">English, Hindi, Punjabi (Native)</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-mint" />
                  <span className="text-white/80">Computer Science, GGS College</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-mint">$30.00 - $60.00/hr</p>
                <p className="text-white/80">With a proven track record of delivering $200k+ projects on time and within budget.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section className="py-20 px-4 bg-forest-light">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">My Professional Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Full Stack Development */}
            <div className="p-8 rounded-xl border border-mint/10 bg-forest hover:border-mint/30 transition-colors">
              <img src="/icons/fullstack-icon.svg" alt="Full Stack Icon" className="w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold mb-4">Full Stack Development</h3>
              <p className="text-white/60 mb-4">
                I build comprehensive web applications ensuring seamless integration and superior user experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">React</Badge>
                <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">Node.js</Badge>
                <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">MongoDB</Badge>
                <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">Express</Badge>
                <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">Next.js</Badge>
                <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">TypeScript</Badge>
              </div>
              {/* <p className="text-white/60 mt-4">Certifications: AWS Certified Developer, Microsoft Certified: Azure Developer Associate</p> */}
            </div>
            {/* Backend Development */}
            <div className="p-8 rounded-xl border border-mint/10 bg-forest hover:border-mint/30 transition-colors">
              <img src="/icons/backend-icon.svg" alt="Backend Icon" className="w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold mb-4">Backend Development & CMS</h3>
              <p className="text-white/60 mb-4">
                I create robust server-side applications and manage content efficiently.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">PHP</Badge>
                <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">Laravel</Badge>
                <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">SQL</Badge>
                <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">WordPress</Badge>
                <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">Shopify</Badge>
              </div>
              {/* <p className="text-white/60 mt-4">Certifications: Certified Laravel Developer, Shopify Partner</p> */}
            </div>
            {/* Web Design & Additional Skills */}
            <div className="p-8 rounded-xl border border-mint/10 bg-forest hover:border-mint/30 transition-colors">
              <img src="/icons/additional-skills-icon.svg" alt="Web Design Icon" className="w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold mb-4">Web Design & Additional Skills</h3>
              <p className="text-white/60 mb-4">
                I enhance user engagement and brand presence through UI/UX design and digital marketing.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">Figma</Badge>
                <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">FlutterFlow</Badge>
                <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">TypeScript</Badge>
                <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">Tailwind</Badge>
              </div>
            </div>
          </div>
        <div className="text-center mt-8">
          <Button 
            onClick={() => window.open("https://calendly.com/kapcho99/30min", "_blank")} 
            className="bg-mint hover:bg-mint/90 text-forest font-medium px-6 py-3 text-lg transition-transform duration-300 hover:scale-105 w-full max-w-xs mx-auto"
          >
            Book a Meeting
          </Button>
        </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Profile Section */}
      <Profile />

      {/* Testimonials */}
      <Testimonials />

      {/* Portfolio Section */}
      <Portfolio id="portfolio-section" />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-white/80 mb-8">
            Let's work together to bring your vision to life with cutting-edge technology and professional expertise.
            As a top-rated Upwork freelancer, I deliver exceptional development skills and digital marketing expertise.
          </p>
          <Button onClick={() => window.open("https://calendly.com/kapcho99/30min", "_blank")} className="bg-mint hover:bg-mint/90 text-forest font-medium px-8 py-6 text-lg">
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
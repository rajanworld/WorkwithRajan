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
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2 bg-mint/10 w-fit px-4 py-2 rounded-full border border-mint/20">
              <Star className="w-4 h-4 text-mint" />
              <span className="text-mint text-sm font-medium">Top Rated Developer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              Certified React & PHP Developer
            </h1>
            <p className="text-lg text-white/80 max-w-md">
              11+ years of experience in crafting high-performance web applications. MERN Stack expert with $100K+ earnings.
            </p>
            <div className="flex items-center gap-4">
              <Button 
                className="bg-mint hover:bg-mint/90 text-forest font-medium px-8 py-6 text-lg"
                onClick={() => window.open("https://calendly.com/kapcho99/30min", "_blank")}
              >
                Book your call now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-mint/20 text-mint hover:bg-mint/10"
                onClick={handlePortfolioClick}
              >
                View Portfolio
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-mint/20 rounded-2xl blur opacity-30" />
            <div className="relative bg-forest-light p-8 rounded-2xl shadow-2xl border border-mint/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-mint/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-mint"> <img
  src="/rajan.webp"
  className="rounded-full border-4 border-mint/10 object-cover transition-transform duration-300 hover:scale-110"
  alt="Rajan Full Stack Developer"
/>
</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Rajan</h2>
                  <p className="text-mint">Chandigarh, India</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">
                    Available now
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
                <p className="text-2xl font-bold text-mint">$60.00/hr</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-forest-light">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-mint/10 bg-forest hover:border-mint/30 transition-colors">
              <Code className="w-12 h-12 text-mint mb-6" />
              <h3 className="text-xl font-bold mb-4">Full Stack Development</h3>
              <p className="text-white/60 mb-4">MERN Stack, Next.js, and TypeScript for scalable applications.</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "MongoDB", "Express"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-mint/10 text-mint border-mint/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-xl border border-mint/10 bg-forest hover:border-mint/30 transition-colors">
              <Briefcase className="w-12 h-12 text-mint mb-6" />
              <h3 className="text-xl font-bold mb-4">Backend & CMS</h3>
              <p className="text-white/60 mb-4">Expert in PHP, Laravel, SQL, WordPress, and Shopify.</p>
              <div className="flex flex-wrap gap-2">
                {["PHP", "WordPress", "Shopify", "Laravel"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-mint/10 text-mint border-mint/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-xl border border-mint/10 bg-forest hover:border-mint/30 transition-colors">
              <Users className="w-12 h-12 text-mint mb-6" />
              <h3 className="text-xl font-bold mb-4">Additional Skills</h3>
              <p className="text-white/60 mb-4">UI/UX design and digital marketing expertise.</p>
              <div className="flex flex-wrap gap-2">
                {["Figma", "FlutterFlow", "TypeScript", "Tailwind"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-mint/10 text-mint border-mint/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
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
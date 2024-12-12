import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Profile from "@/components/Profile";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Briefcase, Users } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2 bg-mint/10 w-fit px-4 py-2 rounded-full border border-mint/20">
              <Code className="w-4 h-4 text-mint" />
              <span className="text-mint text-sm font-medium">Full Stack Developer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              Transforming Ideas into Digital Reality
            </h1>
            <p className="text-lg text-white/80 max-w-md">
              11+ years of experience in crafting high-performance web applications using MERN Stack, Next.js, and PHP.
            </p>
            <div className="flex items-center gap-4">
              <Button className="bg-mint hover:bg-mint/90 text-forest font-medium px-8 py-6 text-lg">
                Hire Me <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-mint/20 text-mint hover:bg-mint/10">
                View Portfolio
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-mint/20 rounded-2xl blur opacity-30" />
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Professional developer"
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-forest-light">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-mint/10 bg-forest hover:border-mint/30 transition-colors">
              <Code className="w-12 h-12 text-mint mb-6" />
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <p className="text-white/60">Custom web applications built with React, Node.js, and modern technologies.</p>
            </div>
            <div className="p-8 rounded-xl border border-mint/10 bg-forest hover:border-mint/30 transition-colors">
              <Briefcase className="w-12 h-12 text-mint mb-6" />
              <h3 className="text-xl font-bold mb-4">CMS Development</h3>
              <p className="text-white/60">Expert in WordPress, Shopify, and custom CMS solutions.</p>
            </div>
            <div className="p-8 rounded-xl border border-mint/10 bg-forest hover:border-mint/30 transition-colors">
              <Users className="w-12 h-12 text-mint mb-6" />
              <h3 className="text-xl font-bold mb-4">Consulting</h3>
              <p className="text-white/60">Technical consulting and architecture planning for your projects.</p>
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

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-white/80 mb-8">Let's work together to bring your vision to life with cutting-edge technology and professional expertise.</p>
          <Button className="bg-mint hover:bg-mint/90 text-forest font-medium px-8 py-6 text-lg">
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
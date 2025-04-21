import React from 'react';
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Profile from "@/components/Profile";
import Testimonials from "@/components/Testimonials";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

import Skills from '@/components/Skills';
import Hero from '@/components/Hero';

const Index = () => {
  

  return (
    <div className="min-h-screen">
     
      
      {/* Hero Section */}
      <Hero />


      {/* Skills Section */}
      <Skills />

      {/* Stats Section */}
      <Stats />

      {/* Profile Section */}
      <Profile />

      {/* Testimonials */}
      <Testimonials />

      {/* Portfolio Section */}
      <Portfolio id="portfolio-section" />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-forest/10">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Transform Your Ideas into Reality</h2>
            <p className="text-white/80 mb-8">
            With 13+ years of expertise in full-stack development and AI automation, 
            I transform businesses through innovative tech solutions. From custom web applications 
            to intelligent automation systems, I'll help turn your vision into reality with 
            scalable, future-ready solutions that drive results.
            </p>
          <div className="flex items-center justify-center gap-4">
        <Button 
          onClick={() => window.open("https://calendly.com/kapcho99/30min", "_blank")} 
          className="bg-mint hover:bg-mint/90 text-forest font-medium px-8 py-6 text-lg"
        >
          Schedule a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
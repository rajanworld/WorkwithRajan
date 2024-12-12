import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-forest">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Basic Info */}
          <div className="bg-forest-light p-8 rounded-lg border border-mint/10">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-24 h-24 bg-mint/10 rounded-full flex items-center justify-center">
                <span className="text-3xl text-mint">RA</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Raj A.</h1>
                <p className="text-mint">Chandigarh, India</p>
                <div className="flex gap-4 mt-2">
                  <span className="text-white/60">93% Job Success</span>
                  <span className="text-white/60">Top Rated</span>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <p className="text-white/60">Total Earnings</p>
                <p className="text-2xl font-bold text-white">$100K+</p>
              </div>
              <div className="space-y-2">
                <p className="text-white/60">Total Jobs</p>
                <p className="text-2xl font-bold text-white">124</p>
              </div>
              <div className="space-y-2">
                <p className="text-white/60">Total Hours</p>
                <p className="text-2xl font-bold text-white">2,124</p>
              </div>
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="bg-forest-light p-8 rounded-lg border border-mint/10">
            <h2 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'WordPress', 'Next.js', 'Node.js', 'ExpressJS', 'MongoDB', 'FlutterFlow', 'Figma', 'PHP', 'Shopify', 'TypeScript', 'JavaScript', 'jQuery', 'HTML5', 'Tailwind CSS'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-mint/10 text-mint rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="bg-forest-light p-8 rounded-lg border border-mint/10">
            <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
            <p className="text-white/80 leading-relaxed">
              Hi, I'm Rajan, a certified React Developer with 11+ years of experience in crafting high-performance web applications. My expertise includes MERN Stack (MongoDB, Express, React, Node.js), Next.js and TypeScript for scalable and maintainable apps, Backend technologies: PHP, Laravel, SQL, and CMS platforms: WordPress, Shopify, Wix.
            </p>
            <p className="text-white/80 leading-relaxed mt-4">
              As a top-rated plus Upwork freelancer (top 3% with $100k+ earnings), I deliver exceptional development skills and digital marketing expertise, including affiliate and social media marketing.
            </p>
            <div className="mt-6">
              <p className="text-mint font-medium">Hourly Rate: $60.00/hr</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
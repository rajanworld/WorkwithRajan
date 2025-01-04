import React, { useState, useEffect } from 'react';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Star, Award, Languages, Briefcase, GraduationCap, Code } from "lucide-react";

const Profile = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-forest">
      <div className="container mx-auto">
         {/* title */}
         <h2 className="text-4xl font-bold text-center mb-16">
            About Me
          </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Basic Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-white">Raj A.</h1>
                <div className="flex items-center gap-2 text-white/60">
                  <MapPin className="w-4 h-4" />
                  <span>Chandigarh, India</span>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>{currentTime} local time</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">
                Available now
              </Badge>
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">
                100% Job Success
              </Badge>
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">
                Top Rated
              </Badge>
            </div>

            <div className="space-y-4 border-t border-mint/10 pt-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-mint" />
                <span className="text-white">$100K+ Total earnings</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-mint" />
                <span className="text-white">125 Total jobs</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-mint" />
                <span className="text-white">2000+ Total hours</span>
              </div>
            </div>
          </div>

          {/* Middle Column - Skills & Education */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {["React", "WordPress", "Next.js", "Node.js", "ExpressJS", "MongoDB", "PHP", "TypeScript", "Tailwind CSS"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-mint/10 text-mint border-mint/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4 border-t border-mint/10 pt-4">
              <h2 className="text-xl font-semibold text-white">Education</h2>
              <div className="flex items-start gap-2">
                <GraduationCap className="w-5 h-5 text-mint" />
                <div>
                  <p className="text-white">GGS College</p>
                  <p className="text-white/60">Computer Science, 2014-2017</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 border-t border-mint/10 pt-4">
              <h2 className="text-xl font-semibold text-white">Languages</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Languages className="w-5 h-5 text-mint" />
                  <span className="text-white">English, Hindi, Punjabi (Native or Bilingual)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Overview */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Certified React & PHP Developer</h2>
                <span className="text-mint font-semibold">$60.00/hr</span>
              </div>
              <p className="text-white/80">
                Hi, I'm Rajan, a certified React Developer with 11+ years of experience in crafting high-performance web applications. My expertise includes MERN Stack (MongoDB, Express, React, Node.js), Next.js and TypeScript for scalable and maintainable apps.
              </p>
              <Button onClick={() => window.open("https://calendly.com/kapcho99/30min", "_blank")} className="w-full bg-mint hover:bg-mint/90 text-forest font-medium">
                Contact Me
              </Button>
            </div>

            <div className="space-y-4 border-t border-mint/10 pt-4">
              <h2 className="text-xl font-semibold text-white">Certifications</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Code className="w-5 h-5 text-mint" />
                  <div>
                    <p className="text-white">Upwork Skill Certification - React Front-End Development</p>
                    <p className="text-white/60">Issued: June 2024</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Code className="w-5 h-5 text-mint" />
                  <div>
                    <p className="text-white">Certified PHP Developer</p>
                    <p className="text-white/60">Issued: March 2013</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
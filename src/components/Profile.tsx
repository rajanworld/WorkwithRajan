import React, { useState, useEffect } from 'react';
import type { FC } from 'react';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Award, Languages, Briefcase, GraduationCap, Code } from "lucide-react";

const Profile: FC = () => {
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
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-white">Rajan A.</h1>
                <div className="flex items-center gap-2 text-white/60">
                  <MapPin className="w-4 h-4" />
                  <span>Chandigarh, India</span>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>{currentTime} local time</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Available now", "100% Job Success", "Top Rated"].map((badge) => (
                <Badge key={badge} variant="secondary" className="bg-mint/10 text-mint border-mint/20">
                  {badge}
                </Badge>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Full Stack Developer & AI Automation Specialist</h2>
                <span className="text-mint font-semibold">$30.00/hr</span>
              </div>
              <p className="text-white/80">
                Hi, I'm Rajan, a Full Stack Developer and AI Automation Specialist. I started my coding journey at 15 and have accumulated over 13 years of experience. I have completed more than 200 projects and have expertise in technologies like React.js, Node.js, PHP, MySQL, MongoDB, WordPress, Shopify, Express, and AI automation solutions.
              </p>
              <Button onClick={() => window.open("https://calendly.com/kapcho99/30min", "_blank")} 
                className="w-full bg-mint hover:bg-mint/90 text-forest font-medium">
                Contact Me
              </Button>
            </div>

            <div className="space-y-4 border-t border-mint/10 pt-4">
              <h2 className="text-xl font-semibold text-white">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {["OpenAI", "LangChain", "ChatGPT API", "Machine Learning", "NLP", "Process Automation",
                  "React", "Node.js", "TypeScript", "Next.js", "Python", "PHP",
                  "MongoDB", "PostgreSQL", "Redux", "REST APIs", "GraphQL",
                  "AWS", "Docker", "CI/CD", "Agile", "Git", "Leadership & Management", "Project Management", "Client Handling", "Bidding & Proposal Writing"
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-mint/10 text-mint border-mint/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="space-y-4 border-t border-mint/10 pt-4 md:border-none">
              <h2 className="text-xl font-semibold text-white">Education</h2>
              <div className="flex items-start gap-2">
              <GraduationCap className="w-5 h-5 text-mint" />
              <div>
                <p className="text-white">GGS College</p>
                <p className="text-white/60">Computer Science, 2014-2017</p>
              </div>
              </div>
              <div className="flex items-start gap-2">
              <GraduationCap className="w-5 h-5 text-mint" />
              <div>
                <p className="text-white">Softtrix Web Solutions</p>
                <p className="text-white/60">Web Development Industrial Training, 2013</p>
              </div>
              </div>
            </div>

            <div className="space-y-4 border-t border-mint/10 pt-4">
              <h2 className="text-xl font-semibold text-white">Languages</h2>
              <div className="flex items-center gap-2">
                <Languages className="w-5 h-5 text-mint" />
                <span className="text-white">English, Hindi, Punjabi (Native or Bilingual)</span>
              </div>
            </div>

            <div className="space-y-4 border-t border-mint/10 pt-4">
              <h2 className="text-xl font-semibold text-white">Certifications</h2>
              {[{
                title: "Google AI Certification",
                issued: "2024"
              }, {
                title: "Upwork Skill Certification - React Front-End Development",
                issued: "June 2024"
              }, {
                title: "Certified PHP Developer",
                issued: "March 2013"
              }].map((cert, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Code className="w-5 h-5 text-mint" />
                  <div>
                    <p className="text-white">{cert.title}</p>
                    <p className="text-white/60">Issued: {cert.issued}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

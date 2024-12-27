import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Video, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PortfolioProps {

    id?: string;
  
  }
  
  const Portfolio = ({ id }: PortfolioProps) => {
    const technologies = ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "WebRTC", "TypeScript", "Tailwind CSS"];

    return (
        <section id={id} className="py-20 px-4 bg-forest">
            <div className="container mx-auto">
                <div className="space-y-8">
                    {/* Project Header */}
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">AvatarWalk</h1>
                            <div className="flex gap-2"></div>
                                <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">
                                    Featured Project
                                </Badge>
                                <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">
                                    Live Platform
                                </Badge>
                            </div>
                        </div>
                        <Button className="bg-mint hover:bg-mint/90 text-forest font-medium">
                            View Project
                        </Button>
                    </div>

                    {/* Project Overview */}
                    <div className="text-white/80 space-y-4">
                        <p className="text-lg">
                            AvatarWalk is an innovative platform that enables users to virtually explore iconic destinations worldwide through live-streamed adventures.
                        </p>

                        {/* Key Features */}
                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                            <div className="flex items-start gap-3">
                                <Globe className="w-6 h-6 text-mint" />
                                <div>
                                    <h3 className="text-white font-semibold">Global Exploration</h3>
                                    <p className="text-white/60">Virtual tours to iconic destinations worldwide</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Video className="w-6 h-6 text-mint" />
                                <div>
                                    <h3 className="text-white font-semibold">Live Streaming</h3>
                                    <p className="text-white/60">High-quality real-time video streaming</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MessageSquare className="w-6 h-6 text-mint" />
                                <div>
                                    <h3 className="text-white font-semibold">Interactive Chat</h3>
                                    <p className="text-white/60">Real-time communication with avatars</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Users className="w-6 h-6 text-mint" />
                                <div>
                                    <h3 className="text-white font-semibold">Avatar Network</h3>
                                    <p className="text-white/60">Connect with guides worldwide</p>
                                </div>
                            </div>
                        </div>

                        {/* Technologies */}
                        <div className="border-t border-mint/10 pt-6 mt-8">
                            <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {technologies.map((tech) => (
                                    <Badge key={tech} variant="secondary" className="bg-mint/10 text-mint border-mint/20">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Technical Details */}
                        <div className="border-t border-mint/10 pt-6">
                            <h3 className="text-xl font-semibold text-white mb-4">Technical Implementation</h3>
                            <p className="text-white/80">
                                Built using the MERN stack, the platform ensures a seamless and responsive user experience. 
                                Socket.io integration enables real-time chat functionality, while WebRTC technology powers 
                                high-quality live streaming capabilities, allowing users to immerse themselves in diverse 
                                cultures and environments virtually.
                            </p>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Portfolio;
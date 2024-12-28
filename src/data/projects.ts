import { Code, Globe, Video, Users, MessageSquare, Laptop, Database, MoveHorizontal, Film, Shield } from "lucide-react";
import type { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Project {
  title: string;
  description: string;
  badges: string[];
  link: string;
  features: Feature[];
  technologies: string[];
  technicalDetails: string;
  testimonial?: string;
}

export const projects: Project[] = [
  {
    title: "AvatarWalk",
    description: "An innovative platform that enables users to virtually explore iconic destinations worldwide through live-streamed adventures.",
    badges: ["Featured Project", "Live Platform"],
    link: "https://avatarwalk.com",
    features: [
      { icon: Globe, title: "Global Exploration", desc: "Virtual tours to iconic destinations worldwide" },
      { icon: Video, title: "Live Streaming", desc: "High-quality real-time video streaming" },
      { icon: MessageSquare, title: "Interactive Chat", desc: "Real-time communication with avatars" },
      { icon: Users, title: "Avatar Network", desc: "Connect with guides worldwide" }
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "WebRTC", "TypeScript", "Tailwind CSS"],
    technicalDetails: "Built using the MERN stack, the platform ensures a seamless and responsive user experience. Socket.io integration enables real-time chat functionality, while WebRTC technology powers high-quality live streaming capabilities.",
    testimonial: "Raj is one of the best developers I’ve had the pleasure of working with on Upwork. He is detail-oriented, highly responsible, and consistently goes above and beyond to deliver exceptional results. If you have a project in mind, Raj and his team can bring it to life with meticulous planning and remarkable efficiency, even under tight deadlines. I highly recommend him for any development needs!"
  },
  {
    title: "Bouboulena Video Production",
    description: "A sophisticated video management platform with drag-and-drop capabilities, allowing seamless content management and display.",
    badges: ["Client Project", "Video Platform"],
    link: "https://bouboulena.com",
    features: [
      { icon: MoveHorizontal, title: "Drag & Drop", desc: "Intuitive video management interface" },
      { icon: Film, title: "Video Showcase", desc: "Dynamic video content display" },
      { icon: Database, title: "Content Management", desc: "Advanced backend administration" },
      { icon: Laptop, title: "Responsive Design", desc: "Optimized for all devices" }
    ],
    technologies: ["React", "Redux", "PHP", "MySQL", "REST API"],
    technicalDetails: "Implemented with React for the frontend and PHP for the backend, featuring a robust drag-and-drop system and advanced content management capabilities.",
    testimonial: "Great working with Raj we will be continue more work together."
  },
  {
    title: "ProxyJet",
    description: "A sophisticated proxy management system built from scratch, featuring custom algorithms for proxy creation and management.",
    badges: ["Full Stack", "Enterprise Solution"],
    link: "https://proxyjet.io",
    features: [
      { icon: Shield, title: "Proxy Generation", desc: "Custom proxy creation algorithms" },
      { icon: Code, title: "API Integration", desc: "Seamless third-party API integration" },
      { icon: Database, title: "Data Management", desc: "Advanced proxy data handling" },
      { icon: Users, title: "User Management", desc: "Comprehensive user control system" }
    ],
    technologies: ["Core PHP", "MySQL", "REST API", "Custom Algorithms"],
    technicalDetails: "Developed entirely in Core PHP, featuring custom algorithms for proxy generation and management, with a focus on performance and reliability.",
    testimonial: "Blown away with my experience with Raj. I couldn't find a dev to figure this project out and Raj did it quicker and better than I could have ever imagined. If he tells you he can do the work, trust him, he is very talented. Look forward to working with you again in the future."
  }
];
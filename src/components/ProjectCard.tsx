import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="bg-[#2a2a2a] border-none p-8">
      <div className="space-y-8">
        {/* Project Header */}
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            <div className="flex gap-2 flex-wrap">
              {project.badges.map((badge) => (
                <Badge 
                  key={badge} 
                  variant="secondary" 
                  className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
          <Button 
            onClick={() => window.open(project.link, "_blank")}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium"
          >
            View Project
          </Button>
        </div>

        {/* Project Overview */}
        <div className="text-white/80 space-y-6">
          <p className="text-lg">{project.description}</p>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <feature.icon className="w-6 h-6 text-emerald-400" />
                <div>
                  <h3 className="text-white font-semibold">{feature.title}</h3>
                  <p className="text-white/60">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="border-t border-white/10 pt-6">
            <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Technical Details */}
          <div className="border-t border-white/10 pt-6">
            <h3 className="text-xl font-semibold text-white mb-4">Technical Implementation</h3>
            <p className="text-white/80">{project.technicalDetails}</p>
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Client Testimonial</h3>
              <blockquote className="text-white/80 italic">
                "{project.testimonial}"
              </blockquote>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

interface PortfolioProps {
  id?: string;
}

const Portfolio = ({ id }: PortfolioProps) => {
  return (
    <div className="min-h-screen bg-forest py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-white mb-12 text-center">Portfolio</h1>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
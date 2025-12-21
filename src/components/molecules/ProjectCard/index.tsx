import { ExternalLink } from "lucide-react";
import Card from "../../atoms/Card/Card";

const ProjectCard: React.FC<{
  title: string;
  description: string;
  tech: string[];
  link?: string;
}> = ({ title, description, tech, link }) => (
  <Card>
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
          <ExternalLink size={20} />
        </a>
      )}
    </div>
    <p className="text-white/70 mb-6 leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map((t, i) => (
        <span key={i} className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm border border-purple-500/30">
          {t}
        </span>
      ))}
    </div>
  </Card>
);
export default ProjectCard
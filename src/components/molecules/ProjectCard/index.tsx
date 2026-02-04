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
    <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
      {title}
    </h3>

    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          text-zinc-500
          hover:text-zinc-900
          dark:text-zinc-400
          dark:hover:text-zinc-100
          transition-colors
        "
      >
        <ExternalLink size={20} />
      </a>
    )}
  </div>

  <p className="mb-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
    {description}
  </p>

  <div className="flex flex-wrap gap-2">
    {tech.map((t, i) => (
      <span
        key={i}
        className="
          px-3 py-1 rounded-full text-sm font-medium
          bg-zinc-100 text-zinc-700
          border border-zinc-200
          dark:bg-zinc-800 dark:text-zinc-300
          dark:border-zinc-700
        "
      >
        {t}
      </span>
    ))}
  </div>
</Card>

);
export default ProjectCard
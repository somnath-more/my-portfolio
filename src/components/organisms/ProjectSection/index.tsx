import Button from "../../atoms/button/Button";
import SectionTitle from "../../atoms/section/SectionTitle";
import ProjectCard from "../../molecules/ProjectCard";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses, file sharing, and group messaging capabilities.',
      tech: ['TypeScript', 'WebSocket', 'OpenAI', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Interactive data visualization dashboard with customizable widgets and real-time data updates.',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      link: '#'
    },
    {
      title: 'Social Media Platform',
      description: 'A modern social networking platform with posts, stories, and live streaming features.',
      tech: ['Next.js', 'GraphQL', 'Redis', 'AWS'],
      link: '#'
    },
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <SectionTitle>Featured Projects</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="primary">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection
type ProjectCardProps = {
  title: string;
  description: string;
};

const ProjectCard = ({ title, description }: ProjectCardProps) => (
  <div
    className="p-6 rounded-xl shadow-sm hover:shadow-md transition"
    style={{
      backgroundColor: 'var(--highlight)',
      color: 'var(--fg)',
    }}
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p style={{ color: 'var(--muted)' }} className="text-sm">
      {description}
    </p>
  </div>
);

export default ProjectCard;

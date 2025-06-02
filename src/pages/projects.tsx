import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import Head from 'next/head';
import '../styles/globals.css';

const projects = [
  {
    title: 'Backstage Agent Mesh',
    description:
      'Designed a plugin for managing AI agents in Backstage, enabling teams to register, visualize, and orchestrate infrastructure-aware developer agents.',
  },
  {
    title: 'Release Notes Generator',
    description:
      'Built a GitHub-integrated tool using AWS Lambda and S3 to generate versioned changelogs from commit messages and PR metadata.',
  },
  {
    title: 'CI/CD Improvements for Internal Tools',
    description:
      'Streamlined developer workflows by redesigning CI/CD pipelines and cutting deployment times by 40% across multiple environments.',
  },
  {
    title: 'Infrastructure Migration Initiative',
    description:
      'Led migration of legacy systems to containerized infrastructure using Docker, ECS, and Terraform, improving scalability and reducing hosting costs.',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Will Gaither</title>
      </Head>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-20 text-[var(--fg)]">
        <h1 className="text-4xl font-extrabold mb-4 text-center">Projects</h1>
        <p className="text-lg opacity-80 mb-12 text-center">
          A selection of impactful work—focused on developer enablement, automation, and infrastructure.  
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </main>
    </>
  );
}

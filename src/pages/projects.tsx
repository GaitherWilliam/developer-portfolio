import ProjectsInfoCard from '@/components/ProjectsInfoCard';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import Head from 'next/head';

const projects = [
  {
    title: 'Backstage Agent Mesh',
    description: 'Designed a processor plugin for managing AI agents in Backstage.',
    longDescription:
      'Designed and implemented a Backstage plugin for managing AI agents through Git-based infrastructure-as-code. Built tooling to automatically populate agent profiles with metadata such as model type, skills, and instructions. Streamlining setup, improving discoverability, and accelerating adoption of AI-driven tools.',
    icon: '/icons/backstage-icon-black.svg',
    techStack: ['Backstage', 'TypeScript', 'GitHub Actions', 'Crossplane', 'GitHub API'],
  },
  {
    title: 'GitHub Copilot Agent Demo Series',
    description: 'Created a series of hands-on demos showcasing practical AI tooling for developers.',
    longDescription:
      'Developed and presented a suite of demos highlighting GitHub Copilot Agent’s real-world capabilities across the SDLC. Demonstrations included automatic unit test generation, CodeQL-based security scanning, boilerplate code scaffolding, version upgrade refactoring, and accessibility compliance checks. Focused on developer enablement and internal adoption of AI-assisted workflows.',
    icon: '/icons/mesh.svg',
    techStack: ['GitHub Copilot Agent', 'TypeScript', 'React', 'Backstage', 'GitHub Actions']
    ,
  },
  {
    title: 'Backstage Modernization Initiative',
    description: 'Upgraded core Backstage infrastructure and plugins.',
    longDescription:
      'Worked on upgrading core Backstage services, including dependency updates, plugin migrations, and Docker build improvements. Improved CI/CD workflows to streamline testing and deployment. Helped transition internal plugins to align with the latest Backstage architecture, reducing tech debt and improving long-term maintainability.',
    icon: '/icons/backstage-icon-black.svg',
    techStack: ['Backstage', 'Docker', 'GitHub Actions', 'Yarn', 'CI/CD'],
  },
  {
    title: 'AI Assistant for Government Weather System',
    description: 'Built a context-aware AI assistant for internal documentation used by a federal weather organization.',
    longDescription:
      `Led the development of a specialized AI assistant designed to support internal documentation for a government weather system. Contributed across infrastructure, backend, frontend, and AI tooling. Partnered with stakeholders to refine functionality, align with operational workflows, and deliver a secure, production-ready assistant capable of context-aware interactions.`,
    icon: '/icons/message-chatbot.svg',
    techStack: ['AWS Lambda', 'S3', 'GitHub Actions', 'React', 'TypeScript', 'Bedrock', 'Vector Store'],

  },
  {
    title: 'CI/CD Improvements for Internal Tools',
    description: 'Streamlined pipelines and cut deploy times significantly.',
    longDescription:
      'Redesigned GitHub Actions pipelines across multiple internal projects, improving build reliability and cutting deployment times by over 15 minutes per environment. Added caching, parallel jobs, and clearer status outputs to reduce friction in development and testing workflows.',
    icon: '/icons/ci-cd.svg',
    techStack: ['GitHub Actions', 'CI/CD', 'Docker', 'CodeQL', 'Dependabot'],
  },
  {
    title: 'AutoForms – USWDS Form Builder',
    description: 'React demo app to rapidly generate USWDS-compliant forms.',
    longDescription:
      'Developed a React-based demo application for AutoForms, a component library that integrates with JSON Forms to dynamically render USWDS-compliant interfaces. Enabled rapid form prototyping and reuse across projects. Built for CI/CD compatibility and accessible UX by default.',
    icon: '/icons/forms.svg',
    techStack: ['React', 'JSON Forms', 'USWDS'],
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
        <ProjectsInfoCard />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              longDescription={project.longDescription}
              icon={project.icon}
              techStack={project.techStack}
            />
          ))}
        </div>
      </main>
    </>
  );
}

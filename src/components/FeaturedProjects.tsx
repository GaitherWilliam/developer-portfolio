'use client';

import Link from 'next/link';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'Backstage Agent Mesh',
        description:
            'Designed a Backstage plugin for managing AI agents through Git-based infrastructure-as-code. Improved discoverability and accelerated adoption of AI tools by auto-populating agent profiles with metadata.',
        icon: '/icons/mesh.svg',
        techStack: ['Backstage', 'TypeScript', 'GitHub Actions'],
    },
    {
        title: 'AWIPS NOAA AI Agent',
        description:
            'Built a context-aware AI assistant for NOAA’s AWIPS documentation. Contributed across infrastructure, backend, frontend, and AI tooling in collaboration with internal stakeholders.',
        icon: '/icons/message-chatbot.svg',
        techStack: ['AWS Lambda', 'LangChain', 'S3', 'React'],
    },
];

const FeaturedProjects = () => (
    <section
        className="py-20 px-6"
        style={{
            backgroundColor: 'var(--bg)',
            color: 'var(--fg)',
        }}
    >
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-[var(--fg)]">
                Recent Projects
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        icon={project.icon}
                        techStack={project.techStack}
                    />
                ))}
            </div>

            <div className="text-center mt-10">
                <Link
                    href="/projects"
                    className="inline-block text-[var(--primary)] hover:text-[var(--highlight)] underline-offset-2 hover:underline text-lg font-medium transition-colors"
                >
                    View All Projects →
                </Link>
            </div>
        </div>
    </section>
);

export default FeaturedProjects;

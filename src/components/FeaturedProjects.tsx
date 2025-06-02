'use client';

import Link from 'next/link';
import ProjectCard from './ProjectCard';

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
                Featured Projects
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                    />
                ))}
            </div>

            <div className="text-center mt-10">
                <Link
                    href="/projects"
                    className="inline-block text-[var(--primary)] hover:text-[var(--secondary)] underline-offset-2 hover:underline text-lg font-medium transition-colors"
                >
                    View All Projects →
                </Link>
            </div>
        </div>
    </section>
);

export default FeaturedProjects;

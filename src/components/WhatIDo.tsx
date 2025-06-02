import { FaLaptopCode, FaServer, FaRobot } from 'react-icons/fa';

const skills = [
    {
        title: 'Full-Stack Engineering',
        icon: <FaLaptopCode className="text-4xl text-[var(--primary)]" />,
        description:
            'React, Node.js, and cloud-native architectures that scale and serve real-world users.',
    },
    {
        title: 'DevOps & Infrastructure',
        icon: <FaServer className="text-4xl text-[var(--primary)]" />,
        description:
            'CI/CD pipelines, Docker, Kubernetes, and infrastructure-as-code to support fast iteration.',
    },
    {
        title: 'AI/Agent Systems',
        icon: <FaRobot className="text-4xl text-[var(--primary)]" />,
        description:
            'Designing agent-based systems with RAG pipelines, prompt engineering, and fine-tuned orchestration.',
    },
];

const WhatIDo = () => (
    <section
        className="py-20 px-6"
        style={{
            backgroundColor: 'var(--bg)',
            color: 'var(--fg)',
        }}
    >
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--fg)]">
            What I Do
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {skills.map(({ title, icon, description }) => (
                <div
                    key={title}
                    className="p-6 rounded-2xl border border-[var(--highlight)] shadow-md hover:shadow-xl transition"
                    style={{ backgroundColor: 'var(--card-bg)', color: 'var(--fg)' }}
                >
                    <div className="mb-4">{icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-sm opacity-80">{description}</p>
                </div>

            ))}
        </div>
    </section>
);

export default WhatIDo;

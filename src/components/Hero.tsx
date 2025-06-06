'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section
            className="py-20 px-6"
            style={{
                background: 'linear-gradient(to bottom right, var(--highlight), var(--bg))',
            }}
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left: Intro Text */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:text-left flex-1"
                >
                    <h1 className="text-5xl font-extrabold tracking-tight text-[var(--fg)]">
                        Hey, I’m Will 👋
                    </h1>
                    <p className="mt-4 text-lg text-[var(--fg)] opacity-80 max-w-xl">
                        I build developer tools, infrastructure, and AI-powered systems. Outside of work, I bake a mean sourdough, spend time with my wonderful partner Kristen and our two dogs, Roxanne and Daisy, and enjoy story-rich RPGs and thoughtful strategy games.
                    </p>
                    <Link
                        href="/projects"
                        className="mt-8 inline-block rounded-full px-6 py-3 text-lg font-semibold transition-colors duration-300 bg-[var(--primary)] text-white hover:bg-[var(--secondary)]"
                    >
                        View My Work
                    </Link>
                </motion.div>

                {/* Right: Collage */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-md"
                >
                    {[
                        { src: '/images/headshot.png', alt: 'Headshot' },
                        { src: '/images/roxy-daisy.jpg', alt: 'Work' },
                        { src: '/images/bread.jpeg', alt: 'Baking' },
                        { src: '/images/hobby.jpg', alt: 'Hobby' },
                    ].map((img) => (
                        <div key={img.alt} className="relative overflow-hidden rounded-xl shadow-md aspect-square">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 25vw"
                                priority
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  description: string;
  longDescription?: string;
  icon?: string;
  techStack?: string[];
};

const ProjectCard = ({
  title,
  description,
  longDescription,
  icon,
  techStack,
}: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const displayText = expanded && longDescription ? longDescription : description;

  return (
    <div
      className="group p-6 rounded-2xl shadow-md transition-all border border-transparent hover:shadow-lg hover:border-[var(--primary)] relative"
      style={{
        backgroundColor: 'var(--card-bg)',
        color: 'var(--fg)',
      }}
    >
      {icon && (
        <div className="absolute -top-5 left-5 bg-[var(--icon-bg)] rounded-full p-2 shadow-md w-12 h-12 flex items-center justify-center border border-[var(--muted)]">
          <Image
            src={icon}
            alt={`${title} icon`}
            width={28}
            height={28}
            className="dark:invert-0"
          />
        </div>
      )}
      <div className="pl-0 pt-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>

        {techStack && (
          <div className="flex flex-wrap gap-2 mb-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <motion.p
          initial={false}
          animate={{ height: 'auto' }}
          className="text-sm leading-relaxed mb-2"
          style={{ color: 'var(--muted)' }}
        >
          {displayText}
        </motion.p>

        {longDescription && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="text-sm font-medium underline transition"
            style={{ color: 'var(--primary)' }}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show less' : 'Read more'}
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

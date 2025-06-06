'use client';

import { FC } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const ProjectsInfoCard: FC = () => (
  <div className="bg-[var(--card-bg)] border border-[var(--muted)] rounded-xl p-6 mb-10 shadow-sm flex items-start space-x-4">
    <FaInfoCircle className="text-[var(--primary)] text-xl mt-1 shrink-0" />
    <p className="text-sm opacity-80">
      <strong className="text-[var(--fg)] font-semibold">Note:</strong> These are internal projects built for private infrastructure, so full codebases and live demos are not publicly accessible. Project details focus on my contributions and the technologies involved.
    </p>
  </div>
);

export default ProjectsInfoCard;

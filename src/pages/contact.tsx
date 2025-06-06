import Navbar from '../components/Navbar';
import Head from 'next/head';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Will Gaither</title>
      </Head>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-20 text-[var(--fg)]">
        <motion.h1
          className="text-4xl font-extrabold mb-4 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h1>

        <motion.p
          className="text-lg opacity-80 mb-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Whether you&apos;re interested in collaborating, chatting about developer tools, or just sharing sourdough tips — feel free to reach out.
        </motion.p>

        <motion.div
          className="bg-[var(--card-bg)] shadow-lg rounded-2xl p-8 md:p-10 space-y-6 border border-[var(--muted)] max-w-xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {[
            {
              icon: <FaEnvelope className="text-[var(--primary)] text-xl" />,
              label: 'gotoworq@gmail.com',
              href: 'mailto:gotoworq@gmail.com',
            },
            {
              icon: (
                <FaLinkedin className="text-blue-600 dark:text-blue-400 text-xl" />
              ),
              label: 'linkedin.com/in/william-gaither',
              href: 'https://www.linkedin.com/in/william-gaither-672937244/',
            },
            {
              icon: (
                <FaGithub className="text-gray-800 dark:text-gray-200 text-xl" />
              ),
              label: 'github.com/GaitherWilliam',
              href: 'https://github.com/GaitherWilliam',
            },
          ].map(({ icon, label, href }, idx) => (
            <motion.div
              key={label}
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
            >
              {icon}
              <a
                href={href}
                className="text-lg hover:text-[var(--highlight)] transition-colors break-all"
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {label}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </>
  );
}

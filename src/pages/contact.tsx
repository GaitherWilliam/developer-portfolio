import Navbar from '../components/Navbar';
import Head from 'next/head';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Will Gaither</title>
      </Head>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-20 text-[var(--fg)]">
        <h1 className="text-4xl font-extrabold mb-4 text-center">Get in Touch</h1>
        <p className="text-lg opacity-80 mb-10 text-center">
          Reach out via email or connect with me on LinkedIn or GitHub.
        </p>

        <ul className="space-y-6">
          <li className="flex items-center space-x-4">
            <FaEnvelope className="text-[var(--primary)] text-xl" />
            <a
              href="mailto:gotoworq@gmail.com"
              className="text-lg hover:text-[var(--highlight)] transition-colors"
            >
              gotoworq@gmail.com
            </a>
          </li>
          <li className="flex items-center space-x-4">
            <FaLinkedin className="text-blue-600 dark:text-blue-400 text-xl" />
            <a
              href="https://www.linkedin.com/in/william-gaither-672937244/"
              className="text-lg hover:text-[var(--highlight)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/william-gaither
            </a>
          </li>
          <li className="flex items-center space-x-4">
            <FaGithub className="text-gray-800 dark:text-gray-200 text-xl" />
            <a
              href="https://github.com/GaitherWilliam"
              className="text-lg hover:text-[var(--highlight)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/GaitherWilliam
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}

import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function ResumePage() {
    return (
        <>
            <Head>
                <title>Resume | Will Gaither</title>
            </Head>
            <Navbar />
            <main className="max-w-4xl mx-auto px-6 py-20">
                <h1 className="text-3xl font-bold mb-6">Resume</h1>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                    Download a copy or view inline below.
                </p>
                <a
                    href="/will-gaither-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mb-6 px-4 py-2 bg-[var(--primary)] text-white rounded hover:bg-[var(--secondary)] transition"
                >
                    Download PDF
                </a>
                <iframe
                    src="/william-gaither-external.pdf"
                    className="w-full h-[80vh] border rounded-lg shadow"
                />
            </main>
        </>
    );
}
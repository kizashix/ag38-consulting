'use client';

import ThemeToggle from '../components/ThemeToggle';
import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white px-6 py-12 font-sans">
      <ThemeToggle />

      <div className="max-w-4xl mx-auto space-y-12">
        <AnimatedSection>
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              Ammar Alshehri
            </h1>
            <p className="text-lg md:text-xl text-gray-400 dark:text-gray-300">
              Consultant | Cybersecurity Expert | AI Strategist
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              17+ years of experience in IT, Cybersecurity, and AI innovation — now available for global consulting opportunities.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section>
            <h2 className="text-2xl font-semibold text-green-500 mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m Ammar, a seasoned tech consultant from Saudi Arabia. Over the past 17 years, I’ve helped businesses secure, automate, and innovate their digital infrastructure. Whether it’s leading DLP initiatives, deploying AI systems, or building resilient IT environments — I bring results.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section>
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">My Services</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-200">
              <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow hover:bg-gray-200 dark:hover:bg-gray-700">🔐 Cybersecurity Strategy & DLP</li>
              <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow hover:bg-gray-200 dark:hover:bg-gray-700">🧠 AI Automation & Analysis</li>
              <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow hover:bg-gray-200 dark:hover:bg-gray-700">🖥️ IT Infrastructure Consulting</li>
              <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow hover:bg-gray-200 dark:hover:bg-gray-700">📊 Tech for Trading & Automation</li>
            </ul>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="text-center space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-purple-500">
              Let’s Build Something Great Together
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Ready to elevate your business with future-proof tech and security?
            </p>
            <a
              href="mailto:ammar@ag38.me"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded transition"
            >
              Contact Me
            </a>
          </section>
        </AnimatedSection>
      </div>
    </main>
  );
}

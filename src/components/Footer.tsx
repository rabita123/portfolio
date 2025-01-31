import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gradient-to-b from-white to-primary-50 dark:from-dark-800 dark:to-dark-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-primary-200/10 to-transparent dark:from-primary-500/5" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-radial from-secondary-200/10 to-transparent dark:from-secondary-500/5" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-800 dark:text-secondary-200">
                Navigation
              </h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-secondary-600 hover:text-primary-500 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-800 dark:text-secondary-200">
                Connect
              </h3>
              <ul className="space-y-2">
                {[
                  { name: 'GitHub', icon: 'fab fa-github', url: '#' },
                  { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/sairatasmin/' },
                  { name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
                  { name: 'Email', icon: 'fas fa-envelope', url: '#' },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-600 hover:text-primary-500 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors duration-200 flex items-center"
                    >
                      <i className={`${item.icon} w-6`}></i>
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-800 dark:text-secondary-200">
                Newsletter
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                Subscribe to receive updates and news about my latest projects.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg border border-secondary-200 dark:border-dark-500 bg-white dark:bg-dark-600 text-secondary-800 dark:text-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-r-lg transition-all duration-200"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-secondary-200 dark:border-dark-500 pt-8 text-center">
            <p className="text-secondary-600 dark:text-secondary-400">
              © {currentYear} Sayra Tasmin Rabita All rights reserved.
            </p>
            <p className="text-secondary-500 dark:text-secondary-500 text-sm mt-2">
              Built with{' '}
              <span className="text-red-500">❤</span> using React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center bg-gradient-to-b from-white to-primary-50 dark:from-dark-800 dark:to-dark-700 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-primary-200/20 to-transparent dark:from-primary-500/10" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-radial from-secondary-200/20 to-transparent dark:from-secondary-500/10" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-200 text-transparent bg-clip-text">
                Hi, I'm <span className="font-extrabold">Sayra Tasmin Rabita</span>
              </h1>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl text-secondary-600 dark:text-secondary-300 font-medium mb-8"
            >
              Full Stack Web Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg md:text-xl text-secondary-500 dark:text-secondary-400 mb-12 max-w-2xl mx-auto"
            >
              Crafting beautiful, user-centric web experiences with modern technologies
              and creative solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <a
                href="#contact"
                className="btn px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-full transform hover:scale-105 transition-all duration-200 shadow-soft"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="btn px-8 py-3 bg-white dark:bg-dark-600 text-secondary-700 dark:text-white hover:bg-secondary-50 dark:hover:bg-dark-500 rounded-full transform hover:scale-105 transition-all duration-200 shadow-soft"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex justify-center space-x-6 mt-12"
            >
              {['github', 'linkedin', 'twitter'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com/rabita123`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-400 hover:text-primary-500 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <span className="sr-only">{social}</span>
                  <i className={`fab fa-${social} text-2xl`}></i>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-secondary-400 dark:text-secondary-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <i className="fas fa-chevron-down"></i>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero; 
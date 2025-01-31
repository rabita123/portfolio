import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-white/10 to-transparent" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-radial from-white/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Looking for a Remote MERN Stack Developer?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life with modern web technologies and best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="contact"
              smooth={true}
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl"
            >
              <i className="fas fa-paper-plane mr-2"></i>
              Let's Connect
            </Link>
            <a
              href="/Saira-Tasmin-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-700 text-white rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 border-2 border-white/20 hover:bg-primary-800"
            >
              <i className="fas fa-download mr-2"></i>
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA; 
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', icon: 'fab fa-react' },
  { name: 'TypeScript', icon: 'fab fa-js' },
  { name: 'Node.js', icon: 'fab fa-node-js' },
  { name: 'Next.js', icon: 'fas fa-n' },
  { name: 'Tailwind CSS', icon: 'fab fa-css3' },
  { name: 'MongoDB', icon: 'fas fa-database' },
  { name: 'PostgreSQL', icon: 'fas fa-database' },
  { name: 'Git', icon: 'fab fa-git-alt' },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-primary-50 to-white dark:from-dark-700 dark:to-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-200 text-transparent bg-clip-text">
              About Me
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
            I’m a passionate MERN Stack Developer specializing in React.js, Next.js, and Node.js. I build scalable web applications and have experience in Supabase, Firebase, and API integration. Open to remote roles in Germany, the USA, and worldwide!.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-semibold text-center mb-10">Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white dark:bg-dark-600 rounded-xl shadow-soft group hover:shadow-soft-lg transition-all duration-200"
                >
                  <div className="text-center">
                    <i className={`${skill.icon} text-3xl mb-4 text-primary-500 dark:text-primary-400 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-200`}></i>
                    <h4 className="font-medium text-secondary-700 dark:text-secondary-200">{skill.name}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-center mb-10">Experience</h3>
            <div className="space-y-8">
              <div className="p-8 bg-white dark:bg-dark-600 rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-secondary-800 dark:text-secondary-200">Programmer</h4>
                    <p className="text-primary-500 dark:text-primary-400">Khulna University</p>
                  </div>
                  <p className="text-secondary-500 dark:text-secondary-400 mt-2 md:mt-0">2016 - Present</p>
                </div>
                <ul className="list-disc list-inside text-secondary-600 dark:text-secondary-300 space-y-2">
                  <li>Led development of multiple web applications using modern technologies</li>
                  {/* <li>Mentored junior developers and implemented best practices</li> */}
                  <li>Optimized application performance and improved user experience</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 
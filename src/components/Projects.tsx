import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const projects = [
  {
    title: 'Recipe Sharing Platform',
    description: 'A modern recipe sharing platform where users can discover, share, and save their favorite recipes. Features include recipe creation, search functionality, user authentication, and responsive design.',
    image: '/recipe-site.jpg',
    blurImage: '/recipe-site-blur.jpg',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'MongoDB', 'Authentication'],
    liveUrl: 'https://recipe-sharing-site.vercel.app/',
    githubUrl: 'https://github.com/rabita123/recipe-sharing',
    icon: '🍳',
  },
  {
    title: 'Food Delivery Platform',
    description: 'A modern food delivery platform with an intuitive interface for ordering food online. Features include restaurant listings, menu browsing, cart management, and responsive design.',
    image: '/food-delivery.jpg',
    blurImage: '/food-delivery-blur.jpg',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'UI/UX Design'],
    liveUrl: 'https://food-delivery-site-pied.vercel.app/',
    githubUrl: 'https://github.com/rabita123/food-delivery-site',
    icon: '🍔',
  },
  // {
  //   title: 'E-Commerce Platform',
  //   description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.',
  //   image: '/project1.jpg',
  //   tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  //   liveUrl: '#',
  //   githubUrl: '#',
  //   icon: '🛍️',
  // },
  // {
  //   title: 'Task Management App',
  //   description: 'A collaborative task management application with real-time updates. Includes features like task assignment, progress tracking, and team collaboration.',
  //   image: '/project2.jpg',
  //   tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
  //   liveUrl: '#',
  //   githubUrl: '#',
  //   icon: '✅',
  // },
  {
    title: 'Personal Blog Site',
    description: 'A modern blog platform built with React and hosted on Netlify. Features a clean and minimalist design for optimal reading experience, responsive layout, and easy content management.',
    image: '/blog.png',
    blurImage: '/blog-blur.png',
    tags: ['React', 'Blog', 'Netlify', 'Responsive Design'],
    liveUrl: 'https://679ba23b137c5d86d66bd77d--inspiring-cupcake-c34f92.netlify.app/',
    githubUrl: '#',
    icon: '📝',
  },
  {
    title: 'Medical Service Facility',
    description: 'A comprehensive healthcare platform that connects patients with medical services. Features a modern interface for browsing medical services, appointment scheduling, and healthcare information.',
    image: '/medical.png',
    blurImage: '/medical-blur.png',
    tags: ['React', 'Healthcare', 'Netlify', 'Responsive Design'],
    liveUrl: 'https://medical-service-facility0907027.netlify.app/',
    githubUrl: '#',
    icon: '🏥',
  },
];

const ProjectImage = ({ src, alt, icon }: { src: string; alt: string; icon: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30">
      <div className="absolute inset-0 flex items-center justify-center text-6xl">
        {icon}
      </div>
      {!error && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-90 hover:opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
};

const Projects = () => {
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
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-primary-50 dark:from-dark-800 dark:to-dark-700">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-200 text-transparent bg-clip-text">
              Featured Projects
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-dark-600 rounded-xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300"
              >
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                  icon={project.icon}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-secondary-800 dark:text-secondary-200">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white text-center rounded-lg transform hover:scale-105 transition-all duration-200"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn bg-secondary-100 text-secondary-700 hover:bg-secondary-200 dark:bg-dark-500 dark:text-white dark:hover:bg-dark-400 text-center rounded-lg transform hover:scale-105 transition-all duration-200"
                    >
                      <i className="fab fa-github mr-2"></i>
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 
'use client'

import { motion } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  ExternalLink,
  Code,
  Server,
  Database,
  Cloud,
  Zap,
  Globe,
  Shield
} from 'lucide-react'

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const skills = [
    { name: 'AWS', icon: Cloud, color: 'text-orange-500' },
    { name: 'Docker', icon: Server, color: 'text-blue-500' },
    { name: 'Kubernetes', icon: Globe, color: 'text-blue-600' },
    { name: 'Terraform', icon: Code, color: 'text-purple-500' },
    { name: 'Jenkins', icon: Zap, color: 'text-red-500' },
    { name: 'Python', icon: Code, color: 'text-yellow-500' },
    { name: 'JavaScript', icon: Code, color: 'text-yellow-400' },
    { name: 'Java', icon: Code, color: 'text-red-600' },
    { name: 'React', icon: Code, color: 'text-blue-400' },
    { name: 'Node.js', icon: Server, color: 'text-green-500' },
    { name: 'SQL', icon: Database, color: 'text-blue-300' },
    { name: 'MongoDB', icon: Database, color: 'text-green-400' },
  ]

  const projects = [
    {
      title: 'Infrastructure as Code',
      description: 'Building scalable cloud infrastructure with Terraform and AWS',
      tech: ['Terraform', 'AWS', 'Docker'],
      link: '#'
    },
    {
      title: 'Container Orchestration',
      description: 'Managing microservices with Kubernetes and Docker',
      tech: ['Kubernetes', 'Docker', 'Helm'],
      link: '#'
    },
    {
      title: 'CI/CD Pipelines',
      description: 'Automating deployment processes with Jenkins and GitLab',
      tech: ['Jenkins', 'GitLab CI', 'Docker'],
      link: '#'
    },
    {
      title: 'Full Stack Applications',
      description: 'Building modern web applications using React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    }
  ]

  const experience = [
    {
      title: 'DevOps Engineer',
      company: 'Current Company',
      period: '2022 - Present',
      description: 'Designing and implementing automated deployment pipelines, managing cloud infrastructure, and optimizing CI/CD processes.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Previous Company',
      period: '2021 - 2022',
      description: 'Developed web applications using React, Node.js, and various databases. Implemented responsive designs and RESTful APIs.'
    },
    {
      title: 'Software Engineer',
      company: 'First Company',
      period: '2020 - 2021',
      description: 'Built and maintained software applications, collaborated with cross-functional teams, and participated in code reviews.'
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="text-xl font-bold gradient-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              NK
            </motion.div>
            <motion.div 
              className="hidden md:flex space-x-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm{' '}
              <span className="gradient-text">Neeraj Kumar</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              DevOps Engineer & Full Stack Developer with 3+ years of experience designing, 
              implementing, and maintaining automated deployment pipelines and scalable cloud infrastructures.
            </p>
            <div className="flex justify-center space-x-4 pt-8">
              <motion.a
                href="#contact"
                className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-medium transition-colors hover-lift"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="border border-purple-600 hover:bg-purple-600/10 px-8 py-3 rounded-lg font-medium transition-colors hover-lift"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              I'm passionate about building scalable applications and automating infrastructure. 
              I love working with cloud technologies, containers, and modern development practices.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                className="bg-gray-800/50 p-6 rounded-lg hover-lift border border-gray-700"
              >
                <skill.icon className={`w-8 h-8 ${skill.color} mb-4`} />
                <h3 className="font-semibold">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              My professional journey in software development and DevOps engineering.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover-lift"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-purple-400">{exp.title}</h3>
                  <span className="text-gray-400 text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-300 mb-2">{exp.company}</p>
                <p className="text-gray-400">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Some of the projects I've worked on, showcasing my skills in DevOps and full-stack development.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover-lift"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-purple-400">{project.title}</h3>
                  <a href={project.link} className="text-gray-400 hover:text-purple-400">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              I'm always interested in hearing about new opportunities and exciting projects.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8"
          >
            <motion.a
              href="mailto:neerajraj985275@gmail.com"
              variants={fadeInUp}
              className="flex items-center space-x-3 bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover-lift hover:border-purple-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6 text-purple-400" />
              <span>neerajraj985275@gmail.com</span>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/neerajraj98/"
              variants={fadeInUp}
              className="flex items-center space-x-3 bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover-lift hover:border-purple-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6 text-purple-400" />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/devilraj98"
              variants={fadeInUp}
              className="flex items-center space-x-3 bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover-lift hover:border-purple-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6 text-purple-400" />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href="https://instagram.com/neeraj__yadav______"
              variants={fadeInUp}
              className="flex items-center space-x-3 bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover-lift hover:border-purple-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-6 h-6 text-purple-400" />
              <span>Instagram</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Neeraj Kumar. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  )
}

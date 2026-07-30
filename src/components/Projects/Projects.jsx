import { motion } from 'framer-motion'
import { Folder, ExternalLink, CheckCircle2 } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../../data'
import styles from './Projects.module.css'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const gradientPairs = [
  { from: '#6c63ff', to: '#00d2ff' },
  { from: '#ff6584', to: '#ffb347' },
  { from: '#00d2ff', to: '#6c63ff' },
  { from: '#8b83ff', to: '#ff85a0' },
]

const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.bgGlow} />
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p className={styles.label} variants={cardVariants}>
            Projects
          </motion.p>
          <motion.h2 className={styles.title} variants={cardVariants}>
            What I&apos;ve Built
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {projects.map((project, index) => {
            const grad = gradientPairs[index % gradientPairs.length]
            return (
              <motion.div key={project.title} className={styles.card} variants={cardVariants}>
                <div
                  className={styles.imageWrapper}
                  style={{ background: `linear-gradient(135deg, ${grad.from}, ${grad.to})` }}
                >
                  <div className={styles.imageOverlay} />
                  <Folder size={40} className={styles.imageIcon} />
                  <span className={styles.imageLabel}>{project.title}</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>

                  <div className={styles.techList}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className={styles.featureList}>
                    {project.features.map((feature) => (
                      <li key={feature} className={styles.featureItem}>
                        <CheckCircle2 size={14} className={styles.checkIcon} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.actions}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn btn-outline ${styles.actionBtn}`}
                      >
                        <FaGithub size={16} />
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn btn-primary ${styles.actionBtn}`}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

import { motion } from 'framer-motion'
import { Code2, Server, Database, Globe, Wrench, Cpu } from 'lucide-react'
import { skills } from '../../data'
import styles from './Skills.module.css'

const categoryConfig = {
  languages: { label: 'Programming Languages', icon: Code2 },
  backend: { label: 'Backend Development', icon: Server },
  databases: { label: 'Database', icon: Database },
  webTechnologies: { label: 'Web Technologies', icon: Globe },
  tools: { label: 'Tools', icon: Wrench },
  coreConcepts: { label: 'Core Computer Science', icon: Cpu },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const badgeContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
}

const Skills = () => {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.bgGlow} />
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p className={styles.label} variants={cardVariants}>
            Technical Skills
          </motion.p>
          <motion.h2 className={styles.title} variants={cardVariants}>
            My Expertise
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {Object.entries(skills).map(([key, items]) => {
            const config = categoryConfig[key]
            const Icon = config?.icon || Code2
            return (
              <motion.div key={key} className={styles.card} variants={cardVariants}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <Icon size={20} />
                  </div>
                  <h3 className={styles.categoryTitle}>
                    {config?.label || key}
                  </h3>
                </div>

                <motion.div
                  className={styles.skillList}
                  variants={badgeContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      className={styles.skillBadge}
                      variants={badgeVariants}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

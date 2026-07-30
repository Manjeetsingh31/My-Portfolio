import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../../data'
import styles from './Education.module.css'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
}

const itemVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const Education = () => {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.bgGlow} />
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p className={styles.label} variants={itemVariant}>
            Education
          </motion.p>
          <motion.h2 className={styles.title} variants={itemVariant}>
            My Academic Background
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.timeline}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {education.map((item, i) => (
            <motion.div key={i} className={styles.timelineItem} variants={itemVariant}>
              <div className={styles.iconWrapper}>
                <GraduationCap size={22} />
              </div>
              <div className={styles.content}>
                <div className={styles.card}>
                  <span className={styles.period}>{item.period}</span>
                  <h3 className={styles.degree}>{item.degree}</h3>
                  <p className={styles.institution}>{item.institution}</p>
                  <span className={styles.score}>{item.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education

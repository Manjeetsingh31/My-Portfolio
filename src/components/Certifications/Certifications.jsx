import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../../data'
import styles from './Certifications.module.css'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

const Certifications = () => {
  return (
    <section id="certificates" className={styles.section}>
      <div className={styles.bgGlow} />
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p className={styles.label} variants={itemVariant}>
            Certifications
          </motion.p>
          <motion.h2 className={styles.title} variants={itemVariant}>
            My Credentials
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {certifications.map((cert, i) => (
            <motion.div key={i} className={styles.card} variants={itemVariant}>
              <div className={styles.iconBox}>
                <Award size={20} />
              </div>
              <span className={styles.certName}>{cert}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications

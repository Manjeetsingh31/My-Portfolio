import { motion } from 'framer-motion'
import { personalData } from '../../data'
import ProfileImage from '../Hero/ProfileImage'
import styles from './About.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.bgGlow} />
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p className={styles.label} variants={fadeUp} custom={0}>
            About Me
          </motion.p>
          <motion.h2 className={styles.title} variants={fadeUp} custom={1}>
            Who I Am
          </motion.h2>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <ProfileImage />
          </motion.div>

          <motion.div
            className={styles.textCol}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.h3 className={styles.name} variants={fadeUp} custom={0}>
              {personalData.name}
            </motion.h3>
            <motion.p className={styles.role} variants={fadeUp} custom={1}>
              {personalData.role}
            </motion.p>
            <motion.p className={styles.summary} variants={fadeUp} custom={2}>
              {personalData.summary}
            </motion.p>

            <motion.div className={styles.details} variants={fadeUp} custom={3}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Location</span>
                <span className={styles.detailValue}>{personalData.location}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Email</span>
                <span className={styles.detailValue}>{personalData.email}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Phone</span>
                <span className={styles.detailValue}>{personalData.phone}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

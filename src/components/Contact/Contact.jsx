import { motion } from 'framer-motion'
import { Mail, MapPin, ArrowUpRight, Clock } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { personalData } from '../../data'
import styles from './Contact.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: 'easeOut' },
  }),
}

const actions = [
  {
    label: 'GitHub',
    detail: 'Manjeetsingh31',
    href: personalData.social.github,
    icon: FaGithub,
    color: '#6e5494',
  },
  {
    label: 'LinkedIn',
    detail: 'manjeet-kumar',
    href: personalData.social.linkedin,
    icon: FaLinkedinIn,
    color: '#0a66c2',
  },
  {
    label: 'LeetCode',
    detail: 'Manjeet012',
    href: personalData.leetcode,
    icon: SiLeetcode,
    color: '#FFA116',
  },
  {
    label: 'Email',
    detail: personalData.email,
    href: `mailto:${personalData.email}`,
    icon: Mail,
    color: 'var(--color-accent-primary)',
  },
]

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p className={styles.label} variants={fadeUp} custom={0}>
            Contact
          </motion.p>
          <motion.h2 className={styles.title} variants={fadeUp} custom={1}>
            Get In Touch
          </motion.h2>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.introCol}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.h3 className={styles.introHeading} variants={fadeUp} custom={0}>
              Let&apos;s build something together.
            </motion.h3>
            <motion.p className={styles.introText} variants={fadeUp} custom={1}>
              I&apos;m currently looking for internship opportunities where I can contribute
              to real-world projects, collaborate with experienced engineers, and grow as a developer.
              Feel free to reach out — I&apos;ll get back to you quickly.
            </motion.p>

            <motion.div className={styles.metaList} variants={fadeUp} custom={2}>
              <div className={styles.badge}>
                <span className={styles.badgeDot} />
                Open to Internship
              </div>
            </motion.div>

            <motion.div className={styles.metaList} variants={fadeUp} custom={3}>
              <div className={styles.metaItem}>
                <MapPin size={15} />
                <span>{personalData.location}</span>
              </div>
              <div className={styles.metaItem}>
                <Mail size={15} />
                <span>{personalData.email}</span>
              </div>
              <div className={styles.metaItem}>
                <Clock size={15} />
                <span>Response time: within 24 hours</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.actionsCol}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {actions.map((action, i) => {
              const Icon = action.icon
              return (
                <motion.a
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionCard}
                  variants={fadeUp}
                  custom={i}
                  aria-label={action.label}
                >
                  <div className={styles.actionLeft}>
                    <div className={styles.actionIconWrapper}>
                      <Icon size={18} />
                    </div>
                    <div className={styles.actionInfo}>
                      <span className={styles.actionLabel}>{action.label}</span>
                      <span className={styles.actionDetail}>{action.detail}</span>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className={styles.actionArrow} />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

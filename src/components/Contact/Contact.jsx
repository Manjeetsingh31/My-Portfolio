import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Copy, Check } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { personalData } from '../../data'
import styles from './Contact.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const Contact = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalData.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.bgGlow} />
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
          <motion.p className={styles.subtitle} variants={fadeUp} custom={2}>
            Have a question or want to work together? Feel free to reach out.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className={styles.cardContent}>
            <motion.div className={styles.infoCol} variants={fadeUp} custom={0}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <Mail size={18} />
                </div>
                <div className={styles.infoText}>
                  <p className={styles.infoLabel}>Email</p>
                  <span className={styles.infoValue}>{personalData.email}</span>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <MapPin size={18} />
                </div>
                <div className={styles.infoText}>
                  <p className={styles.infoLabel}>Location</p>
                  <span className={styles.infoValue}>{personalData.location}</span>
                </div>
              </div>
            </motion.div>

            <motion.div className={styles.actionsCol} variants={fadeUp} custom={1}>
              <button
                className={styles.actionBtn}
                onClick={handleCopyEmail}
                aria-label="Copy email address"
              >
                <div className={styles.actionIcon}>
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                </div>
                <div className={styles.actionText}>
                  <span className={styles.actionLabel}>
                    {copied ? 'Copied!' : 'Copy Email'}
                  </span>
                  <span className={styles.actionDetail}>{personalData.email}</span>
                </div>
              </button>

              <a
                href={personalData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionBtn}
                aria-label="GitHub"
              >
                <div className={styles.actionIcon}>
                  <FaGithub size={20} />
                </div>
                <div className={styles.actionText}>
                  <span className={styles.actionLabel}>GitHub</span>
                  <span className={styles.actionDetail}>Manjeetsingh31</span>
                </div>
              </a>

              <a
                href={personalData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionBtn}
                aria-label="LinkedIn"
              >
                <div className={styles.actionIcon}>
                  <FaLinkedinIn size={20} />
                </div>
                <div className={styles.actionText}>
                  <span className={styles.actionLabel}>LinkedIn</span>
                  <span className={styles.actionDetail}>manjeet-kumar</span>
                </div>
              </a>

              <a
                href={personalData.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionBtn}
                aria-label="LeetCode"
              >
                <div className={styles.actionIcon}>
                  <SiLeetcode size={20} />
                </div>
                <div className={styles.actionText}>
                  <span className={styles.actionLabel}>LeetCode</span>
                  <span className={styles.actionDetail}>Manjeet012</span>
                </div>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

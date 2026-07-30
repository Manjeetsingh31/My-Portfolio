import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Code2, Database, BarChart3 } from 'lucide-react'
import { SiPython, SiGooglecloud, SiLeetcode } from 'react-icons/si'
import { certifications } from '../../data'
import styles from './Certifications.module.css'

const orgLogo = {
  Python: SiPython,
  Oracle: Database,
  'Google Cloud': SiGooglecloud,
  Deloitte: BarChart3,
  LeetCode: SiLeetcode,
}

const orgColors = {
  Python: '#3776AB',
  Oracle: '#F80000',
  'Google Cloud': '#4285F4',
  Deloitte: '#00A4EF',
  LeetCode: '#FFA116',
  'Web Development': '#E44D26',
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

const isValidUrl = (url) => {
  if (!url || typeof url !== 'string') return false
  try {
    const parsed = new URL(url)
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    return false
  }
}

const CertificateCard = ({ cert, variants }) => {
  const [imgError, setImgError] = useState(false)
  const Logo = orgLogo[cert.org] || Code2
  const color = orgColors[cert.org] || 'var(--color-accent-primary)'

  return (
    <motion.div variants={variants} className={styles.card}>
      <div className={styles.imageWrapper} style={{ '--cert-color': color }}>
        {!imgError && (
          <img
            src={cert.image}
            alt={cert.name}
            loading="lazy"
            className={styles.certImage}
            onError={() => setImgError(true)}
          />
        )}
        {imgError && (
          <div className={styles.imageFallback}>
            <Logo size={44} />
          </div>
        )}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.logoRow}>
          <div className={styles.logoWrapper} style={{ color }}>
            <Logo size={22} />
          </div>
          <span className={styles.orgName}>{cert.org}</span>
        </div>
        <h3 className={styles.certName}>{cert.name}</h3>
        <p className={styles.description}>{cert.description}</p>
        {isValidUrl(cert.verifyUrl) && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.verifyBtn}
            aria-label={`View ${cert.org} certificate`}
          >
            View Certificate
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.div>
  )
}

const Certifications = () => {
  return (
    <section id="certificates" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p className={styles.label} variants={cardVariants}>
            Credentials
          </motion.p>
          <motion.h2 className={styles.title} variants={cardVariants}>
            Certifications
          </motion.h2>
          <motion.p className={styles.subtitle} variants={cardVariants}>
            Professional certifications and achievements
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {certifications.map((cert, i) => (
            <CertificateCard key={i} cert={cert} variants={cardVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications

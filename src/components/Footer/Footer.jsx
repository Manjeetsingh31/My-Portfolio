import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { personalData } from '../../data'
import styles from './Footer.module.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              {personalData.name}<span className={styles.dot}>.</span>
            </span>
            <p className={styles.tagline}>
              Software Engineer passionate about building real-world applications.
            </p>
          </div>

          <div className={styles.socials}>
            <a
              href={personalData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
                <FaGithub size={18} />
            </a>
            <a
              href={personalData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href={personalData.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LeetCode"
            >
              <SiLeetcode size={16} />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className={styles.socialLink}
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {year} {personalData.name}. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Built with React + Vite + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

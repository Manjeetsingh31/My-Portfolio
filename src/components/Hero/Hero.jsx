import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ExternalLink, Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { personalData } from '../../data'
import ProfileImage from './ProfileImage'
import styles from './Hero.module.css'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const Hero = () => {
  const [typewriter] = useTypewriter({
    words: personalData.titles,
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 40,
    delaySpeed: 2000,
  })

  const hasResume = false

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bgGradient} />
      <div className={styles.bgOrb} />

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.content}>
          <motion.div className={styles.textSection} variants={itemVariants}>
            <motion.p className={styles.greeting} variants={itemVariants}>
              Hello, I&apos;m
            </motion.p>

            <motion.h1 className={styles.name} variants={itemVariants}>
              {personalData.name}
            </motion.h1>

            <motion.p className={styles.role} variants={itemVariants}>
              {personalData.role}
            </motion.p>

            <motion.div className={styles.typewriterWrapper} variants={itemVariants}>
              <span className={styles.typewriterText}>{typewriter}</span>
              <Cursor cursorColor="var(--color-accent-primary)" cursorStyle="|" />
            </motion.div>

            <motion.p className={styles.description} variants={itemVariants}>
              {personalData.summary}
            </motion.p>

            <motion.div className={styles.actions} variants={itemVariants}>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className={`btn btn-primary ${styles.btn}`}
              >
                View Projects
              </Link>

              <button
                className={`btn btn-outline ${styles.btn}`}
                onClick={() => {}}
                disabled={!hasResume}
                title={!hasResume ? 'Resume will be available soon.' : ''}
              >
                Download Resume
                <ExternalLink size={16} />
              </button>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className={`btn btn-ghost ${styles.btn}`}
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.div className={styles.socials} variants={itemVariants}>
              <a
                href={personalData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={personalData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href={`mailto:${personalData.social.email}`}
                className={styles.socialLink}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div className={styles.imageSection} variants={itemVariants}>
            <ProfileImage src="/images/profile.png" />
          </motion.div>
        </div>
      </motion.div>

      <div className={styles.scrollIndicator}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className={styles.scrollMouse}>
            <div className={styles.scrollDot} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

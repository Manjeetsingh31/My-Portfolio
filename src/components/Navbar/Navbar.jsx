import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'
import useActiveSection from '../../hooks/useActiveSection'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { navLinks } from '../../data'
import styles from './Navbar.module.css'

const Navbar = () => {
  const sectionIds = navLinks.map((l) => l.to)
  const activeId = useActiveSection(sectionIds)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => {
    setMobileOpen(false)
  }

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={styles.inner}>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className={styles.logo}
            onClick={handleLinkClick}
            aria-label="Go to top"
          >
            <span className={styles.logoText}>
              Portfolio<span className={styles.logoDot}>.</span>
            </span>
          </Link>

          <div className={styles.desktopLinks} role="menubar">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className={`${styles.navLink} ${activeId === link.to ? styles.active : ''}`}
                onClick={handleLinkClick}
                role="menuitem"
                aria-current={activeId === link.to ? 'true' : undefined}
              >
                {link.name}
                {activeId === link.to && (
                  <motion.div
                    className={styles.activeIndicator}
                    layoutId="activeIndicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className={styles.actions}>
            <ThemeToggle />
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileOpen(false)}
          >
              <motion.div
              className={styles.mobileMenu}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.mobileHeader}>
                <span className={styles.logoText}>
                  Portfolio<span className={styles.logoDot}>.</span>
                </span>
                <button
                  className={styles.closeBtn}
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <div className={styles.mobileLinks}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className={`${styles.mobileLink} ${activeId === link.to ? styles.activeMobile : ''}`}
                      onClick={handleLinkClick}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar

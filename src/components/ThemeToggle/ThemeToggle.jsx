import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import styles from './ThemeToggle.module.css'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const dark = stored ? stored === 'dark' : true
    setIsDark(dark)
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light')
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
      <motion.button
        className={styles.toggle}
        onClick={toggle}
        whileTap={{ scale: 0.9 }}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
      <motion.div
        className={styles.iconWrapper}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle

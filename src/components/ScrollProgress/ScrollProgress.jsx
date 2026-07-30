import { useState, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'
import styles from './ScrollProgress.module.css'

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)
  const scaleX = useSpring(0, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? scrollTop / docHeight : 0
      setProgress(pct)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    scaleX.set(progress)
  }, [progress, scaleX])

  return (
    <motion.div
      className={styles.bar}
      style={{ scaleX }}
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  )
}

export default ScrollProgress

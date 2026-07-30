import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { Link } from 'react-scroll'
import styles from './ScrollTop.module.css'

const ScrollTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className={styles.button}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollTop

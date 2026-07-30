import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import styles from './Loader.module.css'

const Loader = () => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.loader}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div className={styles.content}>
            <motion.span
              className={styles.dot}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
            />
            <motion.span
              className={styles.dot}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
            />
            <motion.span
              className={styles.dot}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader

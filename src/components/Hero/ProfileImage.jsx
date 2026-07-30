import { User } from 'lucide-react'
import styles from './ProfileImage.module.css'

const ProfileImage = ({ src, alt = 'Profile' }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.glow} />
      <div className={styles.border}>
        <div className={styles.imageContainer}>
          {src ? (
            <img src={src} alt={alt} className={styles.image} />
          ) : (
            <div className={styles.placeholder}>
              <User size={64} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileImage

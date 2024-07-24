import styles from './Modal.module.css'
import Socials from './Socials'


const Modal = () => {
  return (
    <div className={styles.modalWindow}>
        <div className={styles.logo}>

        </div>
        <nav className={styles.navBar}>

        </nav>
        <div className={styles.socials}>
            <Socials color='dark'/>
        </div>
    </div>
  )
}

export default Modal
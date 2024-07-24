'use client'
import styles from './Socials.module.css'

import Link from 'next/link'
import Image from 'next/image'

//Icons
import telegram from '../images/tg.svg'
import insta from '../images/inst.svg'
import facebook from '../images/fb.svg'

const Socials = () => {
  return (
    <div className={styles.socials}>   
        <div className={styles.linkBlock}>
            <Link href='/' className={styles.link}>
              <Image
              className={styles.logo}
              src={telegram}
              alt="telegram"
              />
            </Link>
        </div>
        <div className={styles.linkBlock}>
            <Link href='/' className={styles.link}>
              <Image
              className={styles.logo}
              src={insta}
              alt="insta"
              />
            </Link>
        </div>
        <div className={styles.linkBlock}>
            <Link href='/' className={styles.link}>
              <Image
              className={styles.logo}
              src={facebook}
              alt="facebook"
              width={20}
              height={20}
              />
            </Link>
        </div>

    </div>
  )
}

export default Socials
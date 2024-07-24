'use client'
import styles from './Header.module.css'
import Image from 'next/image'
import { useState } from 'react';

//routing
import Link from 'next/link'


//Logo
import LogoWhite from '../images/logo_white.png'
import PhoneIcon from '../images/phone-call.svg'
import Burger from '../images/burger.svg'

//icons group
import Socials from './Socials'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 
  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.header}>
          <div className={styles.topPanel}>
            <Link href='/' className={styles.link}>
              <Image
              className={styles.companyLogo}
              priority={true}
              src={LogoWhite}
              alt="Wegugin Logo"
              />
            </Link>
            <p className={`${styles.companyDescription} ${styles.pcOnly}`}>
            Южнокорейская экспортная компания 
            с лицензией автодилера - WEGUGIN KTI INC.
            </p>
            <div className={styles.pcOnly}>
              <Socials color='light'/>
            </div>
            <button className={`${styles.calcBtn} ${styles.pcOnly}`}>Расчет стоимости</button>
            <button className={styles.contactBtn}>Оставить заявку</button>
          </div>
          <nav className={styles.navigation}>
            <div className={styles.mobile}>
                <Socials color='light'/>
            </div>
            <div className={`${styles.pcOnly} ${styles.navBar}`}>
              <Link href='/catalog' className={styles.link}>
                Автомобили
              </Link>
              <Link href='/spares' className={styles.link}>
                Запчасти
              </Link>
              <Link href='/about' className={styles.link}>
                О нас
              </Link>
              <Link href='/reviews' className={styles.link}>
                Отзывы клиентов
              </Link>
              <Link href='/faq' className={styles.link}>
                FAQ
              </Link>
            </div>
            <a href={`tel:${+821073585696}`} className={`${styles.link} ${styles.number}`}>
              <Image
                  src={PhoneIcon}
                  width={16}
                  height={16}
                  alt="Call Us"
                  />
             <p>+82 (10) 73-58-56-96</p>
            </a>
            <button className={styles.burgerBtn} onClick={handleClick}>
              {!isOpen ? (
                <Image
                src={Burger}
                alt="Burger menu"
                />) 
                : null}
            </button>
          </nav>
    </div>
  )
}

export default Header
import Socials from './Socials'
import Image from 'next/image'
import Link from 'next/link'

import LogoWhite from '../_images/logo_white.png'


const Modal = () => {


  return (
    <div>
          <Image
              className='h-10 w-auto mx-[30px] my-[30px]'
              priority={true}
              src={LogoWhite}
              alt="Wegugin Logo"
          />
        <nav className='text-slate-50 text-sm ml-8'>
          <ul>
            <li className='h-10'>
              <Link href="/catalog">Автомобили</Link>
            </li>
            <li className='h-10'>
              <Link href="/spares">Запчасти</Link>
            </li>
            <li className='h-10'>
              <Link href="/about">О нас</Link>
            </li>
            <li className='h-10'>
              <Link href="/reviews">Отзывы клиентов</Link>
            </li>
            <li className='h-10'>
              <Link href="/faq">FAQ</Link>
            </li>
            <li className='h-10'>
              <Link href="/privacy">Политика конфиденциальности</Link>
            </li>
            <li className='h-10'>
              <Link href="/contacts">Контакты</Link>
            </li>
            <li className='h-10'>
              <Link href="/calculator">Калькулятор</Link>
            </li>
          </ul>
        </nav>
        <div className='ml-[30px] mt-10'>
            <Socials color='dark'/>
        </div>
    </div>
  )
}

export default Modal
import Socials from './Socials'
import Image from 'next/image'
import Link from 'next/link'

import LogoWhite from '../_images/logo_white.png'

interface ModalProps{
  handleClick: () => void
}


const Modal = ({ handleClick = () => {} }: ModalProps) => {


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
              <button onClick={handleClick}>
                <Link href="/catalog">Автомобили</Link>
              </button>
            </li>
            <li className='h-10'>
              <button onClick={handleClick}>
                <Link href="/spares">Запчасти</Link>
              </button>
            </li>
            <li className='h-10'>
              <button onClick={handleClick}>
                <Link href="/about">О нас</Link>
              </button>
            </li>
            <li className='h-10'>
              <button onClick={handleClick}>
                <Link href="/reviews">Отзывы клиентов</Link>
              </button>
            </li>
            <li className='h-10'>
              <button onClick={handleClick}>
                <Link href="/faq">FAQ</Link>
              </button>
            </li>
            <li className='h-10'>
              <button onClick={handleClick}>
                <Link href="/privacy">Политика конфиденциальности</Link>
              </button>
            </li>
            <li className='h-10'>
              <button onClick={handleClick}>
                <Link href="/contacts">Контакты</Link>
              </button>
            </li>
            <li className='h-10'>
              <button onClick={handleClick}>
                <Link href="/calculator">Калькулятор</Link>
              </button>
            </li>
          </ul>
        </nav>
        <div className='ml-[30px] mt-10'>
          <button onClick={handleClick}>
            <Socials color='dark'/>
          </button>
        </div>
    </div>
  )
}

export default Modal
'use client'
import Image from 'next/image'
import { useState } from 'react';

//routing
import Link from 'next/link'


//Logo
import LogoWhite from '../_images/logo_white.png'
import PhoneIcon from '../_images/phone-call.svg'
import Burger from '../_images/burger.svg'

//icons group
import Socials from './Socials'

//modal
import Modal from './Modal'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 

  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <div>
          <div className="flex px-4 py-2.5 justify-between lg:justify-center items-center bg-slate-900">
            <Link href='/'>
              <Image
              className='h-10 w-auto lg:h-14'
              priority={true}
              src={LogoWhite}
              alt="Wegugin Logo"
              />
            </Link>
            <p className='max-lg:hidden text-sm text-slate-500 w-80 ml-[26px]'>
            Южнокорейская экспортная компания 
            с лицензией автодилера - WEGUGIN KTI INC.
            </p>
            <div className='flex'>
              <div className='hidden lg:block'>
                <Socials color='light'/>
              </div>
              <button className='max-lg:hidden text-white bg-slate-700 rounded-md text-sm px-4 h-10 duration-500 hover:bg-slate-900 mx-2 leading-5'
                >Расчет стоимости</button>
              <button className='text-white rounded-md text-sm px-4 h-10 bg-btn duration-500 hover:bg-slate-700 leading-5'
                >Оставить заявку</button>
            </div>
          </div>
          <div className='w-full bg-slate-800'>
            <nav className='flex items-center justify-between px-4 h-[50px]  m-auto max-w-[1072px]'>
              <div className='lg:hidden'>
                  <Socials color='light'/>
              </div>
              <div className='flex max-lg:hidden text-sm'>
                <Link href='/catalog' className='text-white group transition duration-300 mr-8'>
                  Автомобили
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-slate-50"></span>
                </Link>
                <Link href='/spares' className='text-white group transition duration-300 mr-8'>
                  Запчасти
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-slate-50"></span>
                </Link>
                <Link href='/about' className='text-white group transition duration-300 mr-8'>
                  О нас
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-slate-50"></span>
                </Link>
                <Link href='/reviews' className='text-white group transition duration-300 mr-8'>
                  Отзывы клиентов
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-slate-50"></span>
                </Link>
                <Link href='/faq' className='text-white group transition duration-300'>
                  FAQ
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-slate-50"></span>
                </Link>
              </div>
              <a href={`tel:${+821073585696}`} className='text-white flex items-center text-sm'>
                <Image
                    src={PhoneIcon}
                    width={16}
                    height={16}
                    alt="Call Us"
                    />
              <p className='ml-2'>+82 (10) 73-58-56-96</p>
              </a>
              <button className='bg-slate-800 lg:hidden' onClick={handleClick}>
                  <Image
                  src={Burger}
                  alt="Burger menu"
                  />
              </button>
            </nav>
          </div>
          {isOpen ? (
            <div className={`fixed w-screen h-screen z-2 bg-slate-800 top-0 left-0 -translate-x-full animate-appear`}>
              <Modal/>
            </div>) : null}
    </div>
  )
}

export default Header
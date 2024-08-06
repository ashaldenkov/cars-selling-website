'use client'

import Image from 'next/image'

//routing
import Link from 'next/link'

//Logo
import LogoWhite from '@/app/_images/logo_white.png'

//icons group
import Socials from './socials'

const Footer = () => {
  return (
    <div>
      <div className='bg-slate-800 w-full flex justify-center'>
          <div className='flex justify-between p-[30px] flex-col w-full lg:min-h-[326px] max-w-[1024px] lg:flex-row'>
            <div className='flex flex-col'>
              <Image
                className='h-10 w-fit lg:h-14 mb-[50px] mt-2.5'
                priority={true}
                src={LogoWhite}
                alt="Wegugin Logo"
                />
              <div className='text-slate-500 text-xs max-w-[400px] max-lg:hidden'>
              (주) 외국인 케이티아이 (WEGUGIN KTI INC.)<br/>
  CEO: KHON ALEKSANDR SERGEEVICH<br/>
  Company registration number (CRN): 866-86-02829<br/>
  Legal Entity Identifier (LEI): 134811-0732405<br/>
  E-commerce registration number: 제2023-화성향남-0220호<br/>
  <br/>
  Address: #202, "DA"-dong, 778 Seohae-ro, Hyangnam-eup, Hwaseong-si, Gyeonggi-do, 18595, Republic of Korea
              </div>
            </div>
            <div className='flex flex-col text-sm lg:ml-[46px] lg:mt-[38px]'>
                  <Link href='/catalog' className='text-white group transition duration-300 w-fit my-2'>
                    Автомобили
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-slate-50"></span>
                  </Link>
                  <Link href='/spares' className='text-white group transition duration-300 w-fit my-2'>
                    Запчасти
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-slate-50"></span>
                  </Link>
                  <Link href='/about' className='text-white group transition duration-300 w-fit my-2'>
                    О нас
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-slate-50"></span>
                  </Link>
                  <Link href='/reviews' className='text-white group transition duration-300 w-fit my-2'>
                    Отзывы клиентов
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-slate-50"></span>
                  </Link>
                  <Link href='/faq' className='text-white group transition duration-300 w-fit my-2'>
                    FAQ
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-slate-50"></span>
                  </Link>
            </div>
            <div className='flex flex-col text-sm lg:ml-[92px] lg:mt-[38px]'>
                  <Link href='/privacy' className='text-white group transition duration-300 w-fit my-2'>
                    Политика конфиденциальности
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-slate-50"></span>
                  </Link>
                  <Link href='/contacts' className='text-white group transition duration-300 w-fit my-2'>
                    Контакты
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-slate-50"></span>
                  </Link>
                  <Link href='/calculator' className='text-white group transition duration-300 w-fit my-2'>
                    Калькулятор
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-slate-50"></span>
                  </Link>
            </div>
            <div className='lg:hidden mt-10'>
              <Socials color='dark'/>
            </div>
            <div className='text-slate-500 text-xs lg:hidden mt-[50px]'>
              (주) 외국인 케이티아이 (WEGUGIN KTI INC.)<br/>
  CEO: KHON ALEKSANDR SERGEEVICH<br/>
  Company registration number (CRN): 866-86-02829<br/>
  Legal Entity Identifier (LEI): 134811-0732405<br/>
  E-commerce registration number: 제2023-화성향남-0220호<br/>
  <br/>
  Address: #202, "DA"-dong, 778 Seohae-ro, Hyangnam-eup, Hwaseong-si, Gyeonggi-do, 18595, Republic of Korea
              </div>
          </div>
        </div>

        <div className='bg-slate-900 w-full flex justify-center'>
          <div className='flex justify-between p-[30px] w-full max-w-[1024px]'>
            <div className='text-slate-500 text-xs'>© Copyright © 2021-2024 All rights reserved. WEGUGIN KTI - ЗАПЧАСТИ И АВТО ИЗ КОРЕИ "ПОД КЛЮЧ".<br/>
            Сайт не является публичной офертой.</div>
            <div className='max-lg:hidden'>
                <Socials color='light'/>
            </div>
          </div> 
        </div>
    </div>
  )
}

export default Footer
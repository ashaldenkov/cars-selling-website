'use client'

import Link from 'next/link'
import Image from 'next/image'

//Icons
import telegram from '@/app/_images/tg.svg'
import insta from '@/app/_images/inst.svg'
import facebook from '@/app/_images/fb.svg'

type SocialsProps = {
  color: "light" | "dark";
}

const Socials = ({ color } : SocialsProps) => {
  return (
    <div className='flex'>   
            <Link href='/' className={`block h-10 w-10 rounded-[20px] duration-500 relative ${color == 'light' ? 'bg-slate-700' : 'bg-slate-800'} hover:bg-slate-900`}>
              <Image
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto w-auto'
              src={telegram}
              alt="telegram"
              />
            </Link>
            <Link href='/' className={`block h-10 w-10 rounded-[20px] duration-500 relative ml-[7px] ${color == 'light' ? 'bg-slate-700' : 'bg-slate-800'} hover:bg-slate-900`}>
              <Image
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto w-auto'
              src={insta}
              alt="insta"
              />
            </Link>
            <Link href='/' className={`block h-10 w-10 rounded-[20px] duration-500 relative ml-[7px] ${color == 'light' ? 'bg-slate-700' : 'bg-slate-800'} hover:bg-slate-900`}>
              <Image
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto w-auto'
              src={facebook}
              alt="facebook"
              />
            </Link>
    </div>
  )
}

export default Socials
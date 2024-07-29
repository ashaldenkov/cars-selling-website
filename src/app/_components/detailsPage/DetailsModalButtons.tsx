'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import ContacsUs from "@/app/_components/sharedComponents/ContacsUs"

const DetailsModalButtons = () => {
    const [modalOpened, setModalOpened] = useState<boolean>(false);

    const clickHandle = () => {
        setModalOpened(!modalOpened)
    }
    const handleChildClick = (e:any) => {
        e.stopPropagation();
    }

    useEffect(() => {
        if (modalOpened) {
            document.body.style.overflow = 'hidden'}
        else document.body.style.overflow = 'auto'
    }, [modalOpened])

  return (
    <div>
            <div className='text-sm font-medium'>
            <Link href="#insurance" replace={true} className='block rounded-md w-full h-10 bg-slate-100 text-slate-900 hover:bg-slate-200 
            transition duration-300 flex justify-center items-center'>Страховая история</Link>
            <Link href="#calculator" replace={true} className='block mt-2 rounded-md w-full h-10 bg-slate-900 text-white hover:bg-slate-700
            transition duration-300 flex justify-center items-center'>Рассчитать стоимость</Link>
            <button className='mt-2 rounded-md w-full h-10 bg-btn text-white hover:bg-lime-500 transition duration-300' onClick={clickHandle}>Оставить заявку</button>
            { modalOpened ? (
                <div className='fixed z-50 inset-0 bg-[#00000099] flex items-center justify-center' onClick={clickHandle}>
                    <div className='w-auto flex justify-center' onClick={handleChildClick}>
                        <ContacsUs clickHandle={clickHandle}/>
                    </div>
                </div>
            ) : null
        }
        </div>
    </div>
  )
}

export default DetailsModalButtons
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import FullInsuranceHistory from '@/app/_images/FullInsuranceHistory.png'


const FullInsuranceModal = () => {
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
        { modalOpened ? (
                <div className='fixed z-10 inset-0 bg-[#00000099] overflow-scroll no-scrollbar flex flex-col items-center' onClick={clickHandle}>
                    <Image
                        className='w-full h-auto max-w-[783px] pb-10 bg-white'
                        src={FullInsuranceHistory}
                        alt="Insurance history image"
                        onClick={handleChildClick}
                    />
                    <div className='bg-white w-full max-w-[783px] flex justify-center' onClick={clickHandle}>
                        <button className='text-lg font-semibold text-white w-full max-w-[760px] h-[45px] shrink-0 bg-slate-900 rounded-md
                        hover:bg-slate-700 transition duration-300' onClick={clickHandle}>Закрыть</button>
                    </div>
                    
                </div>
        ) : (
            <button className='text-sm font-medium text-white w-[220px] h-10 bg-slate-900 rounded-md mt-10
            hover:bg-slate-700 transition duration-300' onClick={clickHandle}>Полная страховая история</button>
        )
        }
    </div>
  )
}

export default FullInsuranceModal


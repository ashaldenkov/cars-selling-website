import React from 'react'
import Filter from "@/app/_components/catalogPage/filter"
import AdsBanner from '@/app/_components/sharedComponents/ads'
import Breadcrumbs from "@/app/_components/sharedComponents/breadcrumbs"

const NotFoundCatalog = () => {
  return (

    <div className="flex flex-col items-center min-h-screen w-full max-lg:max-w-full max-w-[720px]">
      <div className="max-lg:order-first w-full flex flex-col items-center">
        <Filter notFound={true}/>
      </div>
      <div className='lg:hidden'>
        <AdsBanner/>
      </div>
      <div className="lg:order-first self-start">
        <Breadcrumbs/>
      </div>
      <div className="w-full lg:h-[694px]">
        <div className="lg:mt-10 mb-[25px] py-[15px] max-lg:px-4 text-slate-500 text-base flex justify-start w-full max-w-[720px]">
          Найдено: {0}
        </div>
        <div className="w-full max-w-[720px] h-[260px] flex items-center justify-center">
          <div className='w-[280px] h-[126px] bg-slate-50 rounded-xl flex flex-col items-center justify-center'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 9L9 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 9L15 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
            <div className='text-lg font-semibold text-price mt-2'>
            Ничего не найдено
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundCatalog
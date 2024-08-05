import React from 'react'
import Filter from "@/app/_components/catalogPage/Filter"
import AdsBanner from '@/app/_components/sharedComponents/Ads'
import Breadcrumbs from "@/app/_components/sharedComponents/Breadcrumbs"
import ContacsUs from "@/app/_components/sharedComponents/Contacs-us"

const LoadingCatalog = () => {
  return (
<div className="flex justify-center">
  <div className="flex flex-col items-center min-h-screen w-full max-lg:max-w-full max-w-[720px]">
      <div className='w-full'>
        <div className="max-lg:order-first w-full flex flex-col items-center">
          <Filter loading={true}/>
          <div className='lg:hidden'>
            <AdsBanner/>
          </div>
          <div className='lg:order-first self-start'>
            <Breadcrumbs/>
          </div>
        </div>
        <div className="lg:mt-10 mb-[25px] py-[15px] max-lg:px-4 text-slate-500 text-base flex justify-start w-full max-w-[720px]">
                Найдено: 0
        </div>
        <div className="w-full max-w-[720px] h-[260px] flex items-center justify-center">
          <div className='w-[280px] h-[126px] bg-slate-50 rounded-xl flex flex-col items-center justify-center'>
            <svg  className='animate-spin' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2V6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 18V22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.92969 4.92999L7.75969 7.75999" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.2422 16.24L19.0722 19.07" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12H6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 12H22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.92969 19.07L7.75969 16.24" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.2422 7.75999L19.0722 4.92999" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className='text-lg font-semibold text-price mt-2'>
            Загрузка...
            </div>
          </div>
        </div>
      </div>
  </div>
  <div className="max-lg:hidden ml-4 xl:ml-10 mt-[121px] mb-[50px]">
    <ContacsUs loading={true}/>
  </div>
</div>
  )
}

export default LoadingCatalog
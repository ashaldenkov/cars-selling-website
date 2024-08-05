import React from 'react'
import { format } from "date-fns";
import { ru } from 'date-fns/locale'
import { Suspense } from 'react'

import DetailsModalInfo from "@/app/_components/detailsPage/Details-modal-info"
import Breadcrumbs from "@/app/_components/sharedComponents/Breadcrumbs"
import AdsBanner from '@/app/_components/sharedComponents/Ads'
import InsuranceHistory from "@/app/_components/detailsPage/Insurance-history";
import Calculator from "@/app/_components/detailsPage/Calculator";
import LoadingCalc from "@/app/_components/LoadingVersionPages/Loading-calculator";
import ImageCarousel from "@/app/_components/detailsPage/Image-carousel";

async function getSomething() {  
    await new Promise(resolve => setTimeout(resolve, 3000))

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    return res
  }

export default async function Details( { params }: {
  params: { carID: string }
}) {
  const list2 = await getSomething()

  return (
    <div className="flex justify-center">
        <div className="flex flex-col items-start min-h-screen w-full max-[720px]:max-w-full max-w-[720px]">
          <div className="w-full order-first">
            <Breadcrumbs/>
          </div>
          <ImageCarousel/>
          <div className="lg:-order-1 max-lg:my-[30px] max-lg:px-4 lg:mb-[40px]">
            <div className="text-slate-900 lg:text-3xl lg:font-semibold">{`New kia K5 Hybrid Noblesse`}</div>
            <div className="max-lg:hidden text-sm text-slate-500 pt-5">{format('1232-06-18', 'dd MMMM', {locale: ru})}</div>
          </div>
          <div className="lg:hidden w-full px-4">
            <DetailsModalInfo/>
          </div>
          <div className="mt-[15px] lg:mt-[35px] w-full">
            <AdsBanner/>
          </div>
          <InsuranceHistory/>

          <Suspense fallback={<LoadingCalc loading={true}/>}>
            <Calculator/>
          </Suspense>

          <div className="max-lg:hidden mb-3">
            <Breadcrumbs/>
          </div>
        </div>

        <div className="max-lg:hidden ml-4 xl:ml-10 mt-[200px] mb-[50px] sticky top-0 h-fit pt-11">
            <DetailsModalInfo/>
        </div>
    </div>
  )
}
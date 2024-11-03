import React from 'react'
import { format } from "date-fns";
import { ru } from 'date-fns/locale'
import { Suspense } from 'react'

import DetailsModalInfo from "@/app/_components/detailsPage/details-modal-info"
import Breadcrumbs from "@/app/_components/sharedComponents/breadcrumbs"
import AdsBanner from '@/app/_components/sharedComponents/ads'
import InsuranceHistory from "@/app/_components/detailsPage/insurance-history";
import Calculator from "@/app/_components/detailsPage/calculator";
import LoadingCalc from "@/app/_components/LoadingVersionPages/loading-calculator";
import ImageCarousel from "@/app/_components/detailsPage/image-carousel";
import { api } from "@/trpc/server";


export default async function Details( { params }: {
  params: { carID: string }
}) {
  const carInfo = await api.cars.findCarById(params.carID);

  return (
    <div className="flex justify-center">
        <div className="flex flex-col items-start min-h-screen w-full max-[720px]:max-w-full max-w-[720px]">
          <div className="w-full order-first">
            <Breadcrumbs/>
          </div>
          <ImageCarousel links={carInfo?.images}/>
          <div className="lg:-order-1 max-lg:my-[30px] max-lg:px-4 lg:mb-[40px]">
            <div className="text-slate-900 lg:text-3xl lg:font-semibold">{`${carInfo?.title_ru ? carInfo?.title_ru : carInfo?.title}`}</div>
            <div className="max-lg:hidden text-sm text-slate-500 pt-5">{format((carInfo?.last_update || 'date undefined'), 'd MMMM yyyy', {locale: ru})}</div>
          </div>
          <div className="lg:hidden w-full px-4">
            <DetailsModalInfo carInfo={carInfo}/>
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
            <DetailsModalInfo carInfo={carInfo}/>
        </div>
    </div>
  )
}
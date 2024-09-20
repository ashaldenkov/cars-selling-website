'use client'
import ContacsUs from "@/app/_components/sharedComponents/contacs-us"
import AdsBanner from '@/app/_components/sharedComponents/ads'
import PaginationComponent from '@/app/_components/catalogPage/pagination'
import Breadcrumbs from "@/app/_components/sharedComponents/breadcrumbs"
import Filter from "@/app/_components/catalogPage/filter"
import CarList from "@/app/_components/catalogPage/car-list"
import NotFoundCatalog from "@/app/_components/LoadingVersionPages/not-found-catalog"

//client part
import { api } from "@/trpc/react";
import { useState } from "react"

interface SearchParams {
  page?: string,
  carBrand?: string,
  carModel?: string,
  yearFrom?: string,
  yearTo?: string,
  priceFrom?: string,
  priceTo?: string,
  engineCapacityFrom?: string,
  engineCapacityTo?: string,
  generation?: string,
  enginePower?: string,
  fuelType?: string,
  transmission?: string,
  color?: string,
  carNumber?: string,
  mileageFrom?: string,
  mileageTo?: string,
}

export default function Details() {


  

  const [queryParams, setQueryParams] = useState<SearchParams>({})
  const {data: carsList, isLoading} = api.cars.getFiltered.useQuery(queryParams)
  const {data: carsAmount} = api.cars.getTotal.useQuery(queryParams)

    return (
    <div className="flex justify-center">
      {/* if no data found on our fetching show another component */}
            <div className="flex flex-col items-center min-h-screen w-full max-lg:max-w-full max-w-[720px]">
              <div className="max-lg:order-first w-full flex flex-col items-center">
                <Filter notFound={carsList?.length ? false : true} loading={isLoading ? true : false} queryParams={queryParams} setQueryParams={setQueryParams}/>
              </div>
              <AdsBanner/>
              <div className="lg:order-first self-start w-full max-w-[720px] mx-auto">
                <Breadcrumbs/>
              </div>
              <div className="lg:mt-10 mb-[25px] py-[15px] max-lg:px-4 text-slate-500 text-base flex justify-start w-full max-w-[720px]">
                Найдено: {carsAmount || '0'}
              </div>
              { carsList?.length ? (
              <>
                <div className="w-full max-w-[720px]">
                  <CarList data={carsList}/>
                </div>
                <PaginationComponent maxPages={Math.ceil((carsAmount ? carsAmount : 1) / 5)} queryParams={queryParams} setQueryParams={setQueryParams}/>
              </>
            ) : (isLoading ? (
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
            ) : (
              <NotFoundCatalog/>
            ))
              }    
            </div>

      <div className="max-lg:hidden ml-4 xl:ml-10 mt-[121px] mb-[50px]">
        <ContacsUs/>
      </div>
    </div>
    )
  }
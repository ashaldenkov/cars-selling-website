import ContacsUs from "@/app/_components/sharedComponents/contacs-us"
import AdsBanner from '@/app/_components/sharedComponents/ads'
import PaginationComponent from '@/app/_components/catalogPage/pagination'
import Breadcrumbs from "@/app/_components/sharedComponents/breadcrumbs"
import Filter from "@/app/_components/catalogPage/filter"
import CarList from "@/app/_components/catalogPage/car-list"
import NotFoundCatalog from "@/app/_components/LoadingVersionPages/not-found-catalog"
import Loading from './loading'

//server part
import { api } from "@/trpc/server";
import { Suspense } from "react"

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

export default async function Details({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  let carsList:any
  let allCarsList:any
  const tryMe = searchParams;
  try{
  carsList = await api.cars.getFiltered(tryMe);
  allCarsList = await api.cars.getFiltered({});
  } catch(err) {
    carsList = []
    allCarsList = []
    console.log(err)
  }

  //pagination skipping posts
  const postLimitPerPage = 5
  const showPosts = carsList.slice(
    postLimitPerPage * ((Number(searchParams.page) - 1) || 0),
    postLimitPerPage * (Number(searchParams.page) || 1)
  )
  
    return (
    <div className="flex justify-center">
      {/* if no data found on our fetching show another component */}
            <div className="flex flex-col items-center min-h-screen w-full max-lg:max-w-full max-w-[720px]">
              <div className="max-lg:order-first w-full flex flex-col items-center">
              <Suspense fallback={<Loading/>} >
                <Filter filterData={allCarsList} notFound={carsList[0] ? false : true}/>
              </Suspense>
              </div>
              <AdsBanner/>
              <div className="lg:order-first self-start w-full max-w-[720px] mx-auto">
                <Breadcrumbs/>
              </div>
              <div className="lg:mt-10 mb-[25px] py-[15px] max-lg:px-4 text-slate-500 text-base flex justify-start w-full max-w-[720px]">
                Найдено: {carsList.length || '0'}
              </div>
              { carsList[0] ? (
              <>
                <div className="w-full max-w-[720px]">
                  <CarList data={showPosts}/>
                </div>
                <Suspense fallback={<Loading/>} >
                <PaginationComponent page={Number(searchParams.page) || 1} maxPages={Math.ceil(carsList.length / postLimitPerPage)}/>
                </Suspense>
              </>
            ) : <NotFoundCatalog/>
              }    
            </div>


      <div className="max-lg:hidden ml-4 xl:ml-10 mt-[121px] mb-[50px]">
        <ContacsUs/>
      </div>
    </div>
    )
  }
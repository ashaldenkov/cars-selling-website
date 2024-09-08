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

export const dynamic = 'force-static'

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
  engineType?: string,
  transmission?: string,
  color?: string,
  carNumber?: string,
  mileageFrom?: string,
  mileageTo?: string,
}

async function getSomething() {  
  //delay here
  await new Promise(resolve => setTimeout(resolve, 1000))
  //if link is /users then we load data, if /users/asdasd then it will be not found
  const res = await fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  return res
}

export default async function Details({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  let carsList:any
  
  try{
    // carsList = await api.cars.getFiltered(searchParams);
    carsList = await api.cars.getAll();
  } catch(err) {
    carsList = []
    console.log('Cant connect to database, please try later')
  }

  const delay = await getSomething()

  //pagination skipping posts
  const postLimitPerPage = 5
  const showPosts = carsList.slice(
    postLimitPerPage * ((Number(searchParams.page) - 1) || 0),
    postLimitPerPage * (Number(searchParams.page) || 1)
  )
  
    return (
    <div className="flex justify-center">
      {/* if no data found on our fetching show another component */}
          {carsList[0] ? (
            <div className="flex flex-col items-center min-h-screen w-full max-lg:max-w-full max-w-[720px]">
              <div className="max-lg:order-first w-full flex flex-col items-center">
              <Suspense fallback={<Loading/>} >
                <Filter/>
              </Suspense>
              </div>
              <AdsBanner/>
              <div className="lg:order-first self-start w-full max-w-[720px] mx-auto">
                <Breadcrumbs/>
              </div>
              <div className="lg:mt-10 mb-[25px] py-[15px] max-lg:px-4 text-slate-500 text-base flex justify-start w-full max-w-[720px]">
                Найдено: {carsList.length}
              </div>
              <CarList data={showPosts}/>
              <div className="w-full max-w-[720px]">
              </div>
              <Suspense fallback={<Loading/>} >
              <PaginationComponent page={Number(searchParams.page) || 1} maxPages={Math.ceil(carsList.length / postLimitPerPage)}/>
              </Suspense>

            </div>
            ) : <NotFoundCatalog/>
          }    
      <div className="max-lg:hidden ml-4 xl:ml-10 mt-[121px] mb-[50px]">
        <ContacsUs/>
      </div>
    </div>
    )
  }
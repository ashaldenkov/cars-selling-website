import ContacsUs from "@/app/_components/sharedComponents/contacs-us"
import AdsBanner from '@/app/_components/sharedComponents/ads'
import PaginationComponent from '@/app/_components/catalogPage/pagination'
import Breadcrumbs from "@/app/_components/sharedComponents/breadcrumbs"
import Filter from "@/app/_components/catalogPage/filter"
import CarList from "@/app/_components/catalogPage/car-list"
import NotFoundCatalog from "@/app/_components/LoadingVersionPages/not-found-catalog"


//server part
import { api } from "@/trpc/server";

//imitating loading data
async function getSomething() {  
  //delay here
  await new Promise(resolve => setTimeout(resolve, 1000))
  //if link is /users then we load data, if /users/asdasd then it will be not found
  const res = await fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  return res
}

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
export default async function Details({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const list2 = await getSomething()
  const carsList = await api.cars.getFiltered(searchParams);


  //pagination skipping posts
  const postLimitPerPage = 5
  const showPosts = carsList.slice(
    postLimitPerPage * ((Number(searchParams.page) - 1) || 0),
    postLimitPerPage * (Number(searchParams.page) || 1)
  )
  
    return (
    <div className="flex justify-center">
      <div>{JSON.stringify(searchParams)}</div>
      <div>{JSON.stringify(carsList)}</div>
      <div>{searchParams.engineCapacityFrom ? parseFloat(searchParams.engineCapacityFrom) : ''}</div>
      <div>{searchParams?.engineCapacityTo }</div>
      {/* if no data found on our fetching show another component */}
          {carsList[0] ? (
            <div className="flex flex-col items-center min-h-screen w-full max-lg:max-w-full max-w-[720px]">
              <div className="max-lg:order-first w-full flex flex-col items-center">
                <Filter/>
              </div>
              <AdsBanner/>
              <div className="lg:order-first self-start">
                <Breadcrumbs/>
              </div>
              <div className="lg:mt-10 mb-[25px] py-[15px] max-lg:px-4 text-slate-500 text-base flex justify-start w-full max-w-[720px]">
                Найдено: {carsList.length}
              </div>
              <CarList data={showPosts}/>
              <div className="w-full max-w-[720px]">
              </div>
              <PaginationComponent page={Number(searchParams.page) || 1} maxPages={Math.ceil(carsList.length / postLimitPerPage)}/>
            </div>
            ) : <NotFoundCatalog/>
          }    
      <div className="max-lg:hidden ml-4 xl:ml-10 mt-[121px] mb-[50px]">
        <ContacsUs/>
      </div>
    </div>
    )
  }
import ContacsUs from "@/app/_components/sharedComponents/Contacs-us"
import AdsBanner from '@/app/_components/sharedComponents/Ads'
import PaginationComponent from '@/app/_components/catalogPage/Pagination'
import Breadcrumbs from "@/app/_components/sharedComponents/Breadcrumbs"
import Filter from "@/app/_components/catalogPage/Filter"
import CarList from "@/app/_components/catalogPage/Car-list"
import NotFoundCatalog from "@/app/_components/LoadingVersionPages/Not-found-catalog"

//imitating loading data
async function getSomething() {  
  //delay here
  await new Promise(resolve => setTimeout(resolve, 0))
  //if link is /users then we load data, if /users/asdasd then it will be not found
  const res = await fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  return res
}

export default async function Details() {
  const list2 = await getSomething()
    return (
    <div className="flex justify-center">
      {/* if no data found on our fetching show another component */}
          {list2[0] ? (
            <div className="flex flex-col items-center min-h-screen w-full max-lg:max-w-full max-w-[720px]">
              <div className="max-lg:order-first w-full flex flex-col items-center">
                <Filter/>
              </div>
              <AdsBanner/>
              <div className="lg:order-first self-start">
                <Breadcrumbs/>
              </div>
              <div className="lg:mt-10 mb-[25px] py-[15px] max-lg:px-4 text-slate-500 text-base flex justify-start w-full max-w-[720px]">
                Найдено: {56}
              </div>
              <CarList data={list2}/>
              <div className="w-full max-w-[720px]">
              </div>
              <PaginationComponent/>
            </div>
            ) : <NotFoundCatalog/>
          }    
      <div className="max-lg:hidden ml-4 xl:ml-10 mt-[121px] mb-[50px]">
        <ContacsUs/>
      </div>
    </div>
    )
  }
import ContacsUs from "../_components/sharedComponents/ContacsUs"
import AdsBanner from '../_components/sharedComponents/Ads'
import PaginationComponent from '@/app/_components/catalogPage/Pagination'
import Breadcrumbs from "../_components/sharedComponents/Breadcrumbs"
import Filter from "@/app/_components/catalogPage/Filter"
import CarCard from "@/app/_components/catalogPage/CarCard"



export default function Details() {
    return (
    <div className="flex justify-center">

      <div className="flex flex-col items-center min-h-screen w-full max-lg:max-w-full max-w-[720px]">
        <Breadcrumbs/>
        <div className="max-lg:order-first w-full flex flex-col items-center">
            <Filter/>
            <AdsBanner/>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="lg:mt-10 mb-[25px] py-[15px] max-lg:px-4 text-slate-500 text-base flex justify-start w-full max-w-[720px]">
            Найдено: {56}
          </div>
          <div className="w-full max-w-[720px]">
            <CarCard/>
            <CarCard/>
            <CarCard/>
          </div>
          <PaginationComponent/>
        </div>
      </div>
    
      <div className="max-lg:hidden ml-4 xl:ml-10 mt-[121px] mb-[50px]">
        <ContacsUs/>
      </div>
    </div>
    )
  }
import ContacsUs from "../_components/ContacsUs"
import AdsBanner from '../_components/Ads'
import PaginationComponent from '../_components/Pagination'
export default function Details() {
    return (
    <div className="flex justify-center">

      <div className="flex flex-col items-center h-screen max-w-[720px]">
        <div>breadcrumbs</div>
        <div className="max-lg:order-first">
            <div>filter</div>
            <AdsBanner/>
        </div>
        <div>
          <div>
            found total
          </div>
          <div>
            cars list
          </div>
            <PaginationComponent/>
        </div>
      </div>
    
      <div className="max-lg:hidden ml-4 xl:ml-10 mt-[121px]">
        <ContacsUs/>
      </div>
    </div>
    )
  }
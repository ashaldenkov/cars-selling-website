import DetailsModalInfo from "@/app/_components/DetailsModalInfo"
import Breadcrumbs from "../../../_components/Breadcrumbs"

export default function Details( { params }: {
  params: { carID: string }
}) {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col items-center min-h-screen w-full max-lg:max-w-full max-w-[720px]">
          <Breadcrumbs/>
          <div className="lg:hidden w-full">
            <DetailsModalInfo/>
        </div>
        </div>
        <div className="max-lg:hidden ml-4 xl:ml-10 mt-[233px] mb-[50px] sticky top-0 h-fit">
            <DetailsModalInfo/>
        </div>

      </div>
    )
  }
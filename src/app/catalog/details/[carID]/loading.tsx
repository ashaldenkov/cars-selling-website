import Breadcrumbs from "@/app/_components/sharedComponents/breadcrumbs"
import AdsBanner from '@/app/_components/sharedComponents/ads'
import InsuranceHistoryLoading from "@/app/_components/detailsPage/insurance-history-loading";
import Calculator from "@/app/_components/detailsPage/calculator";
import DetailsModalButtons from '@/app/_components/detailsPage/details-modal-buttons'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingDetails = () => {
  return (
    <div className="flex justify-center max-lg:px-4">
        <div className="flex flex-col items-start min-h-screen w-full max-[720px]:max-w-full max-w-[720px]">
            <div className="w-full order-first">
                <Breadcrumbs/>
            </div>
            {/* Image carousel */}
            <div className="w-full">
                <div className="w-full h-[293px] lg:h-[480px] flex items-center justify-center mb-5">
                    <div className='w-[280px] h-[126px] bg-slate-50 rounded-xl flex flex-col items-center justify-center '>
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
                <div className="flex overflow-x-hidden gap-x-5 justify-start">
                    <Skeleton width={100} height={100}/>
                    <Skeleton width={100} height={100}/>
                    <Skeleton width={100} height={100}/>
                    <Skeleton width={100} height={100}/>
                    <Skeleton width={100} height={100}/>
                    <Skeleton width={100} height={100}/>
                </div>
            </div>
            {/* Car title */}
            <div className="lg:-order-1 max-lg:my-[30px] lg:mb-[40px] w-full">
                <Skeleton containerClassName='w-full h-5 lg:h-[36px]'/>
                <Skeleton containerClassName='block max-lg:hidden mt-[6px]' width={55} height={17} />
            </div>
            {/* Mobile modal */}
            <div className="lg:hidden w-full">
                    <div className='w-full lg:w-[264px]'>
                        <div className="">
                            <Skeleton containerClassName='w-full' height={36} />
                            <Skeleton containerClassName='w-full' height={20} />
                        </div>
                        <div className="flex gap-x-4 my-10 pt-10 border-t border-slate-200">
                            <Skeleton containerClassName='w-full' height={274} />
                            <Skeleton containerClassName='w-full' height={274} />
                        </div>
                        <DetailsModalButtons loading={true} />
                    </div>
            </div>

            <div className="mt-[15px] lg:mt-[35px] w-full">
                <AdsBanner/>
            </div>
            <InsuranceHistoryLoading/>
            <Calculator loading={true}/>
            <div className="max-lg:hidden mb-3">
                <Breadcrumbs/>
            </div>
        </div>
        {/* Modal on PC */}
        <div className="max-lg:hidden ml-4 xl:ml-10 mt-[200px] mb-[50px] sticky top-0 h-fit pt-11">
                <div className='w-full lg:w-[264px]'>
                    <div className="">
                        <Skeleton containerClassName='w-full' height={36} />
                        <Skeleton containerClassName='w-full' height={20} />
                    </div>
                    <div className="flex gap-x-4 my-10 pt-10 border-t border-slate-200">
                        <Skeleton width={140} height={274} />
                        <Skeleton containerClassName='w-full' height={274} />
                    </div>
                    <DetailsModalButtons loading={true} />
                </div>
        </div>
    </div>
  )
}

export default LoadingDetails

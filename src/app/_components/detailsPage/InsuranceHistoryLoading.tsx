import Image from 'next/image'

//importing icons
import Changed  from '@/app/_images/InsuranceIcons/changed.png'
import Corrosion  from '@/app/_images/InsuranceIcons/corrosion.png'
import Damaged  from '@/app/_images/InsuranceIcons/damaged.png'
import Dislocation  from '@/app/_images/InsuranceIcons/dislocation.png'
import Repaired  from '@/app/_images/InsuranceIcons/repaired.png'
import Scratches  from '@/app/_images/InsuranceIcons/scratches.png'



const typeClass = `text-med text-slate-500 mr-4 lg:mr-10 shrink-0 w-1/2`
const detailClass = `text-med text-slate-900`


const InsuranceHistory = () => {
  return (
    <div className="max-lg:px-4 w-full" id="insurance">
        <h1 className="pb-5 mt-[60px] text-2xl font-semibold border-b border-slate-200">Страховая история</h1>
        <div className="w-full h-[293px] lg:h-[480px] flex items-center justify-center my-[35px]">
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
        <div className='rounded-md bg-slate-50 border border-slate-200 w-full flex flex-col items-center lg:items-start px-[30px] py-[30px]'>
            <div className="w-full h-[293px] lg:h-[480px] flex items-center justify-center">
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
            <div className='flex flex-wrap max-w-[504px] gap-y-[21px] gap-x-[21px]'>
                <div className='flex items-center'>
                    <Image
                    src={Changed}
                    width={24}
                    height={24}
                    alt="Changed"
                    />
                    <p className='ml-2.5'>Замена</p>
                </div>
                <div className='flex items-center'>
                    <Image
                    src={Repaired}
                    width={24}
                    height={24}
                    alt="Repaired"
                    />
                    <p className='ml-2.5'>Ремонт</p>
                </div>
                <div className='flex items-center'>
                    <Image
                    src={Scratches}
                    width={24}
                    height={24}
                    alt="Scratches"
                    />
                    <p className='ml-2.5'>Царапины</p>
                </div>
                <div className='flex items-center'>
                    <Image
                    src={Dislocation}
                    width={24}
                    height={24}
                    alt="Dislocation"
                    />
                    <p className='ml-2.5'>Нарушения</p>
                </div>
                <div className='flex items-center'>
                    <Image
                    src={Corrosion}
                    width={24}
                    height={24}
                    alt="Corrosion"
                    />
                    <p className='ml-2.5'>Коррозия</p>
                </div>
                <div className='flex items-center'>
                    <Image
                    src={Damaged}
                    width={24}
                    height={24}
                    alt="Damaged"
                    />
                    <p className='ml-2.5'>Повреждение</p>
                </div>
            </div>
            <div className='shrink-0 flex items-center justify-center h-10 w-full min-[720px]:min-w-[130px] min-[720px]:w-fit px-4 rounded-md text-white bg-loading mt-[30px]'>
                    <svg aria-hidden="true" className="w-4 h-4 mr-1 text-gray-200 animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                Загрузка...
              </div>
        </div>
  </div>
  )
}

export default InsuranceHistory
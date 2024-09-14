import React from 'react'
import Image from 'next/image'

//importing icons
import Changed  from '@/app/_images/InsuranceIcons/changed.png'
import Corrosion  from '@/app/_images/InsuranceIcons/corrosion.png'
import Damaged  from '@/app/_images/InsuranceIcons/damaged.png'
import Dislocation  from '@/app/_images/InsuranceIcons/dislocation.png'
import Repaired  from '@/app/_images/InsuranceIcons/repaired.png'
import Scratches  from '@/app/_images/InsuranceIcons/scratches.png'
import FullInsuranceModal from './full-insurance-modal'
import Parts  from '@/app/_images/InsuranceIcons/insuranceParts.png'



const typeClass = `text-med text-slate-500 mr-4 lg:mr-10 shrink-0 w-1/2`
const detailClass = `text-med text-slate-900`



const InsuranceHistory = () => {
  return (
    <div className="max-lg:px-4 w-full" id="insurance">
        <h1 className="pb-5 mt-[60px] text-2xl font-semibold border-b border-slate-200">Страховая история</h1>
        <div className='my-[35px]'>
            <div className='flex mt-4'>
                <div className={typeClass}>Номер авто</div>
                <div className={detailClass}>18고3900</div>
            </div>
            <div className='flex mt-4'>
                <div className={typeClass}>Дата первой страховки</div>
                <div className={detailClass}>28.09.2012</div>
            </div>
            <div className='flex mt-4'>
                <div className={typeClass}>Аварии по вине владельца этого авто</div>
                <div className={detailClass}>1</div>
            </div>
            <div className='flex mt-4'>
                <div className={typeClass}>Аварии по вине владельца иного авто</div>
                <div className={detailClass}>4</div>
            </div>
            <div className='flex mt-4'>
                <div className={typeClass}>Количество аварий</div>
                <div className={detailClass}>1</div>
            </div>
            <div className='flex mt-4'>
                <div className={typeClass}>Количество владельцев</div>
                <div className={detailClass}>3</div>
            </div>
            <div className='flex mt-4'>
                <div className={typeClass}>Использовался бизнесом (такси, аренда и пр.)</div>
                <div className={detailClass}>нет</div>
            </div>
        </div>
        <div className='rounded-md bg-slate-50 border border-slate-200 w-full flex flex-col items-center lg:items-start px-[30px] py-[30px] text-med'>
            <Image
                className='w-full max-w-[580px] mb-10'
                src={Parts}
                width={1024}
                height={768}
                alt="Insurance history image"
            />
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
            <FullInsuranceModal/>
        </div>
  </div>
  )
}

export default InsuranceHistory
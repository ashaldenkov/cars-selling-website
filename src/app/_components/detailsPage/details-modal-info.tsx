import React from 'react'
import DetailsModalButtons from './details-modal-buttons'

// interface CarData {
//     carInfo: {
//         id: number;
//         car_id: number;
//         title: string;
//         title_ru: string | null;
//         color: string | null;
//         color_ru: string | null;
//         distance: number;
//         price: number;
//         production_year: number;
//         images: string[];
//         external_url: string | null;
//         fuel_type: string;
//         fuel_type_ru: string | null
//         engine_capacity: number | null;
//         engine_power: number | null;
//         car_drive:  string | null;
//         car_number: string | null;
//         brand_id:  number | null;
//         model_id: number | null;
//         generation_id: string | null;
//         last_update: Date | null;
//         registration_date: Date | null;
//         sold: boolean;
//         ready: boolean;
//         v_type:  string;
//         v_type_ru:  string | null;
//     } | null
// }

interface CarData {
    carInfo: any;
}

const driveName = (title?: string|null) => {
    if (title?.includes('front')) {
        return 'Передний'
    }
    if (title?.includes('rear')) {
        return 'Задний'
    }
    else return title
}

const DetailsModalInfo = ({carInfo}: CarData) => {
  return (
    <div className='w-full lg:w-[264px]'>
        <div>
            <div className='text-3xl text-slate-900 font-semibold'>{`${new Intl.NumberFormat("ru-RU").format(carInfo?.price || 0)} 000 ₩`}</div>
            <div className='text-sm text-slate-500 pt-[6px]'>корейских вон</div>
        </div>
        <div className='my-10 pt-6 border-t border-slate-200'>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Год выпуска</div>
                <div className='text-med text-slate-900'>{carInfo?.production_year}</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Объем двигателя</div>
                <div className='text-med text-slate-900'>{`${carInfo?.engine_capacity ? carInfo?.engine_capacity : '0'} л.`}</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Пробег</div>
                <div className='text-med text-slate-900'>{`${new Intl.NumberFormat("ru-RU").format(carInfo?.distance || 0)} км`}</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Тип кузова</div>
                <div className='text-med text-slate-900'>{carInfo?.v_type_ru}</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Привод</div>
                <div className='text-med text-slate-900'>{ carInfo?.car_drive ? driveName(carInfo?.car_drive) : 'Передний'}</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Цвет</div>
                <div className='text-med text-slate-900'>{carInfo?.color_ru}</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Номер машины</div>
                <div className='text-med text-slate-900'>{carInfo?.car_number ? carInfo?.car_number : '18고3900'}</div>
            </div>
        </div>
        <DetailsModalButtons/>
    </div>
  )
}

export default DetailsModalInfo
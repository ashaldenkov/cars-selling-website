import React from 'react'
import DetailsModalButtons from './details-modal-buttons'

interface CarData {
    carInfo: {
        id: number;
        title: string;
        color: string | null;
        car_mileage: number | null;
        price: number | null;
        production_year: number | null;
        images: string[];
        engine_capacity: number | null;
        engine_power: number | null;
        engine_type:  string | null;
        car_drive:  string | null;
        car_number: string | null;
        brand_id:  number | null;
        model_id: number | null;
        generation_id: number | null;
        last_update: Date | null;
    } | null
}

const colors = (color?: string|null) => {
    if (color?.includes('white')) {
        return 'Белый'
    }
    if (color?.includes('black')) {
        return 'Черный'
    }
    if (color?.includes('gray')) {
        return 'Серый'
    }
    if (color?.includes('beige')) {
        return 'Бежевый'
    }
    if (color?.includes('red')) {
        return 'Красный'
    }
    else return color
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
            <div className='text-3xl text-slate-900 font-semibold'>{`${new Intl.NumberFormat("ru-RU").format(carInfo?.price || 0)} ₩`}</div>
            <div className='text-sm text-slate-500 pt-[6px]'>корейских вон</div>
        </div>
        <div className='my-10 pt-6 border-t border-slate-200'>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Конфигурация</div>
                <div className='text-med text-slate-900'>{carInfo?.generation_id}</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Год выпуска</div>
                <div className='text-med text-slate-900'>{carInfo?.production_year}</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Объем двигателя</div>
                <div className='text-med text-slate-900'>{`${carInfo?.engine_capacity} л.`}</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Пробег</div>
                <div className='text-med text-slate-900'>{`${new Intl.NumberFormat("ru-RU").format(carInfo?.car_mileage || 0)} км`}</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Трансмиссия</div>
                <div className='text-med text-slate-900'>Автомат</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Привод</div>
                <div className='text-med text-slate-900'>{driveName(carInfo?.car_drive)}</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Цвет</div>
                <div className='text-med text-slate-900'>{colors(carInfo?.color)}</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Номер машины</div>
                <div className='text-med text-slate-900'>{carInfo?.car_number}</div>
            </div>
        </div>
        <DetailsModalButtons/>
    </div>
  )
}

export default DetailsModalInfo
import React from 'react'
import Image from 'next/image'
import { format } from "date-fns";
import { ru } from 'date-fns/locale'
import Link from 'next/link'
import NoImage from '@/app/_images/noimage.png'


interface Car {
    carData: any;
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


const CarCard = ({carData}: Car) => {
    
  return (
    <Link href={`/catalog/details/${carData.id}`} className='block border-b border-slate-200 w-full flex justify-between max-w-[720px] py-4 lg:py-9 px-4 rounded lg:flex hover:bg-slate-100'>
        <div className='text-slate-900 lg:hidden'>{carData.title}</div>
        <div>
            <div className='text-slate-900 text-lg font-semibold whitespace-nowrap'>{`${new Intl.NumberFormat("ru-RU").format(carData.price)} ₩`}</div>
            <div className='max-lg:hidden text-sm text-slate-500 text-end'>корейских вон</div>
        </div>
        <div className='flex max-lg:mt-2.5 lg:order-first'>
            <Image
                className='w-[170px] h-[127.5px] max-lg:order-first rounded mr-5'
                src={ carData.images[0] ? carData.images[0] : NoImage}
                width={1024}
                height={768}
                priority={true}
                alt="Car image"
            />
            <div className='text-sm text-slate-500 flex flex-col justify-between'>
                <div className='text-slate-900 max-lg:hidden text-lg'>{carData.title}</div>
                <div className='flex flex-wrap text-sm'>
                    <p>{carData.production_year ? `${carData.production_year} г.,\u00A0` : ''}</p>
                    <p>{carData.engine_capacity ? `${carData.engine_capacity}л.,\u00A0` : ''}</p>
                    <p>{carData.car_mileage ? `${carData.car_mileage.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ",")} км,\u00A0` : ''}</p>
                    <p>{`Автомат,\u00A0`}</p>
                    <p>{`Бензин,\u00A0`}</p>
                    <p>{carData.car_drive ? `${driveName(carData.car_drive)},\u00A0` : ''}</p>
                    <p>{carData.color ? `${colors(carData.color)}` : ''}</p>
                </div>
                <div>
                {format(carData.last_update, 'd MMMM', {locale: ru})}
                </div>
            </div>
        </div>
    </Link>
  )
}

export default CarCard
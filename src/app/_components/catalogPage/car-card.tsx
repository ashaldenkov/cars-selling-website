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
const testImg = 'https://s3-alpha-sig.figma.com/img/c764/9fbc/6fd5409ec9bb97a8d321bb51b541cdab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlNzDIHIPu5eqyNFX6CcxRzJyCWN-vQFijNmqiTSzXQ4o7oUYghskMIF9P5TsRC1v4BsvH9PVhAEjvbG1jaSWfabA-8ObvwPbT~IAYHCY00aVM1v6~aWZAqh7M4kjrsf8ocrkz208MENfrTAzBYFBzT8O2Y0l0PgbAly-PVwvPBzcfoN2VE0TyqY9y-zOrQ6klAbbpLIosZvbXXJkjfw5nkLaTATE9eGVVNvgEP4cEdnVvhEZ6reIFxrUht7bKdUaUpiPjIcexwSHGuDrl7eTO~EKmNsW3TwvhPTTbHEn-SHtNDVjiZGEDouNC2ZUUIoEVDMKAXbIggo8-2guF2ePA__'


const CarCard = ({carData}: Car) => {
    
  return (
    <Link href={`/catalog/details/${carData.id}`} className='block border-b border-slate-200 w-full min-[720px]:flex min-[720px]:justify-between max-w-[720px] py-4 lg:py-9 px-4 rounded lg:flex hover:bg-slate-100'>
        <div className='text-slate-900 lg:hidden'>{carData.title_ru ? carData.title_ru : carData.title}</div>
        <div>
            <div className='text-slate-900 text-lg font-semibold whitespace-nowrap'>{`${new Intl.NumberFormat("ru-RU").format(carData.price)} 000 ₩`}</div>
            <div className='max-lg:hidden text-sm text-slate-500 text-end'>корейских вон</div>
        </div>
        <div className='flex max-lg:mt-2.5 min-[720px]:order-first'>
            <Image
                className='w-[170px] h-[127.5px] max-lg:order-first rounded mr-5'
                src={ carData.images[0] ? testImg : NoImage}
                width={1024}
                height={768}
                priority={true}
                alt="Car image"
            />
            <div className='text-sm text-slate-500 flex flex-col justify-between'>
                <div className='text-slate-900 max-lg:hidden text-lg'>{carData.title_ru ? carData.title_ru : carData.title}</div>
                <div className='flex flex-wrap text-sm'>
                    <p>{carData.production_year ? `${carData.production_year} г.,\u00A0` : ''}</p>
                    <p>{carData.engine_capacity ? `${carData.engine_capacity}л.,\u00A0` : ''}</p>
                    <p>{carData.distance ? `${carData.distance.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ",")} км,\u00A0` : ''}</p>
                    <p>{carData.v_type_ru ? `${carData.v_type_ru},\u00A0` : ''}</p>
                    <p>{carData.car_drive ? `${carData.car_drive},\u00A0` : ''}</p>
                    <p>{carData.fuel_type_ru ? `${carData.fuel_type_ru},\u00A0` : ''}</p>
                    <p>{carData.car_drive ? `${driveName(carData.car_drive)},\u00A0` : ''}</p>
                    <p>{carData.color ? `${colors(carData.color_ru)}` : ''}</p>
                </div>
                <div>
                {format(carData.registration_date, 'd MMMM yyyy', {locale: ru})}
                </div>
            </div>
        </div>
    </Link>
  )
}

export default CarCard
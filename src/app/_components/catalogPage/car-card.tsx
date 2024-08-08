import React from 'react'
import Image from 'next/image'
import { format } from "date-fns";
import { ru } from 'date-fns/locale'
import Link from 'next/link'



const CarCard = () => {
    //так как данных пока нет, пройденный путь симулирую константой
    const road = 50000
    
  return (
    <Link href={`/catalog/details/${1}`} className='block border-b border-slate-200 w-full max-w-[720px] py-4 lg:py-9 px-4 rounded lg:flex hover:bg-slate-100'>
        <div className='text-slate-900 lg:hidden'>New kia K5 Hybrid Noblesse</div>
        <div>
            <div className='text-slate-900 text-lg font-semibold whitespace-nowrap'>{`${new Intl.NumberFormat("ru-RU").format(50000000)} ₩`}</div>
            <div className='max-lg:hidden text-sm text-slate-500 text-end'>корейских вон</div>
        </div>
        <div className='flex max-lg:mt-2.5 lg:order-first'>
            <Image
                className='w-[170px] h-[127.5px] max-lg:order-first rounded mr-5'
                src='https://s3-alpha-sig.figma.com/img/c764/9fbc/6fd5409ec9bb97a8d321bb51b541cdab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlNzDIHIPu5eqyNFX6CcxRzJyCWN-vQFijNmqiTSzXQ4o7oUYghskMIF9P5TsRC1v4BsvH9PVhAEjvbG1jaSWfabA-8ObvwPbT~IAYHCY00aVM1v6~aWZAqh7M4kjrsf8ocrkz208MENfrTAzBYFBzT8O2Y0l0PgbAly-PVwvPBzcfoN2VE0TyqY9y-zOrQ6klAbbpLIosZvbXXJkjfw5nkLaTATE9eGVVNvgEP4cEdnVvhEZ6reIFxrUht7bKdUaUpiPjIcexwSHGuDrl7eTO~EKmNsW3TwvhPTTbHEn-SHtNDVjiZGEDouNC2ZUUIoEVDMKAXbIggo8-2guF2ePA__'
                width={1024}
                height={768}
                priority={true}
                alt="Car image"
            />
            <div className='text-sm text-slate-500 flex flex-col justify-between'>
                <div className='text-slate-900 max-lg:hidden text-lg'>New kia K5 Hybrid Noblesse</div>
                <div className='flex flex-wrap text-sm'>
                    <p>{`${2021.06},\u00A0`}</p>
                    <p>{`1.6л (125л.с.),\u00A0`}</p>
                    <p>{`${road.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ",")} км,\u00A0`}</p>
                    <p>{`Автомат,\u00A0`}</p>
                    <p>{`Бензин,\u00A0`}</p>
                    <p>{`Передний,\u00A0`}</p>
                    <p>{`Черный`}</p>
                </div>
                <div>
                {format('1998-06-22', 'dd MMMM', {locale: ru})}
                </div>
            </div>
        </div>
    </Link>
  )
}

export default CarCard
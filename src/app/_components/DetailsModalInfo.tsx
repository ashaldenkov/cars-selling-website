import React from 'react'

const DetailsModalInfo = () => {
  return (
    <div className='w-full lg:w-[264px]'>
        <div>
            <div className='text-3xl text-slate-900 font-semibold'>{`${new Intl.NumberFormat().format(50000000)} ₩`}</div>
            <div className='text-sm text-slate-500'>корейских вон</div>
        </div>
        <div className='my-10 border-t border-slate-200'>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Конфигурация</div>
                <div className='text-med text-slate-900'>Noblesse</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Год выпуска</div>
                <div className='text-med text-slate-900'>2021</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Объем двигателя</div>
                <div className='text-med text-slate-900'>1,6</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Объем двигателя</div>
                <div className='text-med text-slate-900'>1,6</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Объем двигателя</div>
                <div className='text-med text-slate-900'>1,6</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Пробег</div>
                <div className='text-med text-slate-900'>59 000 км</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Трансмиссия</div>
                <div className='text-med text-slate-900'>Автомат</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Привод</div>
                <div className='text-med text-slate-900'>Передний</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Цвет</div>
                <div className='text-med text-slate-900'>жемчужно-серый</div>
            </div>
            <div className='flex mt-4'>
                <div className='text-med text-slate-500 w-[156px] shrink-0'>Номер машины</div>
                <div className='text-med text-slate-900'>18고3900	</div>
            </div>
        </div>
        <div className='text-sm font-medium'>
            <button className='rounded-md w-full h-10 bg-slate-100 text-slate-900 hover:bg-slate-200 transition duration-300'>Страховая история</button>
            <button className='mt-2 rounded-md w-full h-10 bg-slate-900 text-white hover:bg-slate-700 transition duration-300'>Рассчитать стоимость</button>
            <button className='mt-2 rounded-md w-full h-10 bg-btn text-white hover:bg-lime-500 transition duration-300'>Оставить заявку</button>
        </div>
    </div>
  )
}

export default DetailsModalInfo
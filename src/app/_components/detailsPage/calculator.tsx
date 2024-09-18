import Image from 'next/image'
import Checkbox  from '@/app/_images/priceCheckbox.svg'
import CalculatorForm from './calculator-form'

interface Calc {
    loading?: boolean;
}

async function  Calculator ({loading}: Calc) {

  return (
    <div className='max-lg:px-4 mb-10 max-lg:mb-8' id='calculator'>
        <div className='border-b border-slate-200'>
            <div className='mt-[60px] text-2xl font-semibold text-slate-900 leading-7'>Калькулятор доставки и растаможки авто «под ключ»</div>
            <div className='text-sm text-slate-500 py-5'>*конечная цена может меняться в зависимости от курса валют.</div>
        </div>
        <div className='mt-[47px] border-b border-slate-200'>
            <CalculatorForm {...(loading ? {loading:true} : {})}/>
        </div>
        <div className='relative'>
            <div className='mt-5'>
                <h1 className='text-med font-bold'>Общий расчёт стоимости авто идет с учетом курса валют:</h1>
                <div className='py-3 text-sm leading-5 text-slate-500'>1₽ = 15.7834 ₩<br/>$1 = 87.9595 ₽<br/>€1 = 94.2606 ₽</div>
                <div className='text-sm leading-5 text-slate-500 min-[720px]:max-w-[510px]'>{`*для оплаты внутренних расходов, комиссии и фрахта применяется внутренний коммерческий курс компании $->₩: 1 400 ₩.`}</div>
                <div className='text-sm leading-5 text-slate-500 pt-3 min-[720px]:max-w-[470px]'>{`Также внутренний коммерческий курс применяется в случае оплаты инвойса за автомобиль в долларах ₩->$: 1 300 ₩.`}</div>
            </div>
            <div className='mt-5'>
                <div className='text-med font-bold mb-6'>Расходы по Корее:</div>
                <div>
                    <div className='flex items-start mb-4'>
                        <div className='flex w-1/2 shrink-0 items-start'>
                            <Image
                            className='mr-2.5'
                            src={Checkbox}
                            width={20}
                            height={20}
                            alt="Checkbox"
                            />
                            <p className='text-med text-price'>Цена авто</p>
                        </div>
                        <p className='w-full text-end text-med text-price self-end'>0 ₩ / 0 $</p>
                    </div>
                    <div className='flex items-start mb-4'>
                        <div className='flex w-1/2 shrink-0 items-start'>
                            <Image
                            className='mr-2.5'
                            src={Checkbox}
                            width={20}
                            height={20}
                            alt="Checkbox"
                            />
                            <p className='text-med text-price'>Фрахт</p>
                        </div>
                        <p className='w-full text-end text-med text-price self-end'>0 ₩ / 0 $</p>
                    </div>
                    <div className='flex items-start mb-4'>
                        <div className='flex w-1/2 shrink-0 items-start'>
                            <Image
                            className='mr-2.5'
                            src={Checkbox}
                            width={20}
                            height={20}
                            alt="Checkbox"
                            />
                            <p className='text-med text-price'>Внутренние расходы (дилерские, стояночные, транспортировка, снятие авто с учёта, экспортная декларация)</p>
                        </div>
                        <p className='w-full text-end text-med text-price self-end'>0 ₩ / 0 $</p>
                    </div>
                    <div className='flex items-start mb-4'>
                        <div className='flex w-1/2 shrink-0 items-start'>
                            <Image
                            className='mr-2.5'
                            src={Checkbox}
                            width={20}
                            height={20}
                            alt="Checkbox"
                            />
                            <p className='text-med text-price'>Комиссия компании</p>
                        </div>
                        <p className='w-full text-end text-med text-price self-end'>0 ₩ / 0 $</p>
                    </div>
                </div>
                <div className='mt-6 min-[720px]:flex min-[720px]:justify-between pb-5 border-b border-slate-200'>
                    <h1 className='text-med font-bold text-end'>Общая сумма инвойса:</h1>
                    <div className='text-med font-bold text-end pt-[6px]'>{`0 ₩ / 0 $`}</div>
                </div>
            </div>
            <div className='mt-5'>
                <div className='text-med font-bold mb-6'>Расходы по РФ:</div>
                <div className='pb-5 border-b border-slate-400'>
                    <div className='flex items-start mb-4'>
                        <div className='flex w-1/2 shrink-0 items-start'>
                            <Image
                            className='mr-2.5'
                            src={Checkbox}
                            width={20}
                            height={20}
                            alt="Checkbox"
                            />
                            <p className='text-med text-price'>Таможенная пошлина</p>
                        </div>
                        <p className='w-full text-end text-med text-price self-end'>0 ₽</p>
                    </div>
                    <div className='flex items-start mb-4'>
                        <div className='flex w-1/2 shrink-0 items-start'>
                            <Image
                            className='mr-2.5'
                            src={Checkbox}
                            width={20}
                            height={20}
                            alt="Checkbox"
                            />
                            <p className='text-med text-price'>Таможенные сборы</p>
                        </div>
                        <p className='w-full text-end text-med text-price self-end'>0 ₽</p>
                    </div>
                    <div className='flex items-start mb-4'>
                        <div className='flex w-1/2 shrink-0 items-start'>
                            <Image
                            className='mr-2.5'
                            src={Checkbox}
                            width={20}
                            height={20}
                            alt="Checkbox"
                            />
                            <p className='text-med text-price'>Утилизационные сборы:</p>
                        </div>
                        <p className='w-full text-end text-med text-price self-end'>0 ₽</p>
                    </div>
                    <div className='flex items-start mb-4'>
                        <div className='flex w-1/2 shrink-0 items-start'>
                            <Image
                            className='mr-2.5'
                            src={Checkbox}
                            width={20}
                            height={20}
                            alt="Checkbox"
                            />
                            <p className='text-med text-price'>Акциз</p>
                        </div>
                        <p className='w-full text-end text-med text-price self-end'>0 ₽</p>
                    </div>
                    <div className='flex items-start mb-4'>
                        <div className='flex w-1/2 shrink-0 items-start'>
                            <Image
                            className='mr-2.5'
                            src={Checkbox}
                            width={20}
                            height={20}
                            alt="Checkbox"
                            />
                            <p className='text-med text-price'>НДС 20%</p>
                        </div>
                        <p className='w-full text-end text-med text-price self-end'>0 ₽</p>
                    </div>
                    <div className='flex items-start mb-4'>
                        <div className='flex w-1/2 shrink-0 items-start'>
                            <Image
                            className='mr-2.5'
                            src={Checkbox}
                            width={20}
                            height={20}
                            alt="Checkbox"
                            />
                            <p className='text-med text-price'>Брокерские услуги (СБКТС, СВХ, оформление, комиссия брокера): </p>
                        </div>
                        <p className='w-full text-end text-med text-price self-end'>0₽</p>
                    </div>
                    <div className='flex items-start'>
                        <div className='flex w-1/2 shrink-0 items-start'>
                            <Image
                            className='mr-2.5'
                            src={Checkbox}
                            width={20}
                            height={20}
                            alt="Checkbox"
                            />
                            <p className='text-med text-price'>Стоимость доставки по РФ (из порта Владивосток)</p>
                        </div>
                        <p className='w-full text-end text-med text-price self-end'>0 ₽</p>
                    </div>
                </div>
            </div>
            <div className='mt-5 max-[720px]:flex max-[720px]:flex-col max-[720px]:items-center'>
                <div className='flex max-[720px]:flex-col max-[720px]:items-center min-[720px]:justify-between max-[720px]:text-center'>
                    <h1 className='text-lg font-bold'>Итоговая стоимость авто «под ключ»</h1>
                    <div className='text-lg font-bold pt-[6px] pb-3'>{`0 ₽`}</div>
                </div>
                <p className='text-sm text-slate-500 max-w-[405px] max-[720px]:text-center'>Обращаем внимание, что стоимость авто может меняться в зависимости от курса валют. Для получения более точной информации по стоимости обратитесь к менеджеру.</p>
            </div>
            { loading && (
                <div className='absolute top-0 left-0 w-full h-full bg-[#00000099] flex items-center justify-center'>
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
            )}
        </div>

    </div>
  )
}

export default Calculator
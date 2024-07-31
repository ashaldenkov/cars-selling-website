import Image from 'next/image'
import Checkbox  from '@/app/_images/priceCheckbox.svg'
import CalculatorForm from './CalculatorForm'


const Calculator = () => {


  return (
    <div className='max-lg:px-4 mb-10 max-lg:mb-8' id='calculator'>
        <div className='border-b border-slate-200'>
            <div className='mt-[60px] text-2xl font-semibold text-slate-900 leading-7'>Калькулятор доставки и растаможки авто «под ключ»</div>
            <div className='text-sm text-slate-500 py-5'>*конечная цена может меняться в зависимости от курса валют.</div>
        </div>
        <div className='mt-[47px] border-b border-slate-200'>
            <CalculatorForm/>
        </div>
        <div>
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
                        <p className='w-full text-end text-med text-price self-end'>20 000 000 ₩ / 15 692 $</p>
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
                        <p className='w-full text-end text-med text-price self-end'>1 120 000 ₩ / 800 $</p>
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
                        <p className='w-full text-end text-med text-price self-end'>980 000 ₩ / 700 $</p>
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
                        <p className='w-full text-end text-med text-price self-end'>700 000 ₩ / 500 $</p>
                    </div>
                </div>
                <div className='mt-6 min-[720px]:flex min-[720px]:justify-between pb-5 border-b border-slate-200'>
                    <h1 className='text-med font-bold text-end'>Общая сумма инвойса:</h1>
                    <div className='text-med font-bold text-end pt-[6px]'>{`23 200 000 ₩ / 17 692 $`}</div>
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
                        <p className='w-full text-end text-med text-price self-end'>509 007 ₽</p>
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
                        <p className='w-full text-end text-med text-price self-end'>8 530 ₽</p>
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
                        <p className='w-full text-end text-med text-price self-end'>5 200 ₽</p>
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
                        <p className='w-full text-end text-med text-price self-end'>80 000-90 000₽</p>
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
                        <p className='w-full text-end text-med text-price self-end'>190 000 ₽</p>
                    </div>
                </div>
            </div>
            <div className='mt-5 max-[720px]:flex max-[720px]:flex-col max-[720px]:items-center'>
                <div className='flex max-[720px]:flex-col max-[720px]:items-center min-[720px]:justify-between max-[720px]:text-center'>
                    <h1 className='text-lg font-bold'>Итоговая стоимость авто «под ключ»</h1>
                    <div className='text-lg font-bold pt-[6px] pb-3'>{`2 262 636 - 2 272 636 ₽`}</div>
                </div>
                <p className='text-sm text-slate-500 max-w-[405px] max-[720px]:text-center'>Обращаем внимание, что стоимость авто может меняться в зависимости от курса валют. Для получения более точной информации по стоимости обратитесь к менеджеру.</p>
            </div>
        </div>

    </div>
  )
}

export default Calculator
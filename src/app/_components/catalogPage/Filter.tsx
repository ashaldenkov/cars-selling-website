'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import CustomSelect from "@/app/_components/sharedComponents/CustomSelect"

  interface FilterValues {
    carBrand: string;
    carModel: string;
    yearFrom: string;
    yearTo: string;
    engineСapacityFrom: string;
    engineСapacityTo: string;
    priceFrom: string;
    priceTo: string;
    carNumber: string;
  }

const Filter = () => {
  const { register, reset, watch, handleSubmit } = useForm<FilterValues>()

  const onSubmit: SubmitHandler<FilterValues> = (data) => {
    console.log(data)
    reset()
  }

  const handleReset = () => {
    reset()
  }


  return (
    <div className='bg-slate-50 w-full px-4 py-5 lg:px-[30px] lg:px-[30px] lg:py-[30px]'>
      <CustomSelect/>
      <form className='' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="lg:flex">
           <select id="carBrand" {...register("carBrand")}
              className={`h-10 w-full rounded-md border border-slate-200 py-2 px-3 text-sm text-slate-900`}>
                  <option value="">Марка</option>
                  <option value="hyundai">Hyundai</option>
                  <option value="audi">Audi</option>
                  <option value="bmw">BMW</option>
                  <option value="kia">Kia</option>
                  <option value="toyota">Toyota</option>
            </select>

            <select id="carModel" {...register("carModel")} 
              className={`h-10 max-lg:mt-3 w-full rounded-md border border-slate-200 py-2 px-3 text-sm text-slate-900`}>
                  <option value="" className=''>Модель</option>
                  <option value="k4" className='h-8'>К4</option>
                  <option value="k5">К5</option>
                  <option value="k6">К6</option>
                  <option value="k7">К7</option>
                  <option value="k8">К8</option>
            </select>
          </div>
          <div>
            <div>
              <select id="yearFrom" {...register("yearFrom")}
                className={`h-10 mt-3 w-1/2 rounded-md border border-slate-200 py-2 px-3 text-sm text-slate-900`}>
                    <option value="">Год, от</option>
              </select>

              <select id="yearTo" {...register("yearTo")}
                className={`h-10 mt-3 w-1/2 rounded-md border border-slate-200 py-2 px-3 text-sm text-slate-900`}>
                    <option value="">до</option>
              </select>
            </div>


              <input
                {...register("priceFrom")} 
                id="priceFrom"
                type="text"
                placeholder='Цена от, ₩'
                className='mt-3 h-10 w-1/2 rounded-md border border-slate-200 py-2 px-3 text-sm'
              />

              <input
                {...register("priceTo")} 
                id="priceTo"
                type="text"
                placeholder='до'
                className='mt-3 h-10 w-1/2 rounded-md border border-slate-200 py-2 px-3 text-sm'
              />

              <input
                {...register("carNumber")} 
                id="carNumber"
                type="text"
                placeholder='Номер машины'
                className='mt-3 h-10 w-full rounded-md border border-slate-200 py-2 px-3 text-sm'
              />
          </div>
        </div> 
        <div>
          Доп панель
        </div>
        <div>
            <button
            type="submit"
            className='block mt-3 h-10 w-full rounded-md text-sm text-white bg-slate-900'>
              Показать
            </button>
            
            <div>
              <button
              className='block mt-3 h-10 w-full rounded-md text-sm text-white bg-slate-900'>
                Расширенный поиск
              </button>

              <button
              className='block mt-3 h-10 w-full rounded-md text-sm text-white bg-slate-900' onClick={handleReset}>
                Сбросить
              </button>
            </div>
        </div>

      </form>
    </div>
  )
}

export default Filter
'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import { useState, useRef  } from "react"
import CustomSelect from "@/app/_components/sharedComponents/CustomSelect"

  interface FilterValues {
    priceFrom: string;
    priceTo: string;
    carNumber: string;
    mileageFrom: string;
    mileageTo: string;
  }

  const Icon = ({isOpen}:{isOpen: boolean}) => {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={`${isOpen ? 'rotate-180' : ''}`}>
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );
};

const Filter = () => {

  const carBrandOptions = [
    {
      label: "Hyundai",
      value: "hyundai"
    },
    {
      label: "Audi",
      value: "audi"
    },
    {
      label: "BMW",
      value: "bmw"
    },
    {
      label: "Kia",
      value: "kia"
    },
    {
      label: "Toyota",
      value: "toyota"
    },
  ]
  const carModelOptions = [
    {
      label: "К4",
      value: "k4"
    },
    {
      label: "К5",
      value: "k5"
    },
    {
      label: "К6",
      value: "k6"
    },
    {
      label: "К7",
      value: "k7"
    },
    {
      label: "К8",
      value: "k8"
    },
  ]
  const yearFromOptions = [
    {
      label: "2024",
      value: "2024"
    },
    {
      label: "2023",
      value: "2023"
    },
    {
      label: "2022",
      value: "2022"
    },
    {
      label: "2021",
      value: "2021"
    },
    {
      label: "2020",
      value: "2020"
    },
  ]
  const yearToOptions = [
    {
      label: "2024",
      value: "2024"
    },
    {
      label: "2023",
      value: "2023"
    },
    {
      label: "2022",
      value: "2022"
    },
    {
      label: "2021",
      value: "2021"
    },
    {
      label: "2020",
      value: "2020"
    },
  ]
  const engineCapacityFromOptions = [
    {
      label: "0.7 л",
      value: "0.7"
    },
    {
      label: "0.8 л",
      value: "0.8"
    },
    {
      label: "0.9 л",
      value: "0.9"
    },
    {
      label: "1.0 л",
      value: "1.0"
    },
    {
      label: "1.1 л",
      value: "1.1"
    },
  ]
  const engineCapacityToOptions = [
    {
      label: "0.7 л",
      value: "0.7"
    },
    {
      label: "0.8 л",
      value: "0.8"
    },
    {
      label: "0.9 л",
      value: "0.9"
    },
    {
      label: "1.0 л",
      value: "1.0"
    },
    {
      label: "1.1 л",
      value: "1.1"
    },
  ]
  const generationOptions = [
    {
      label: "The New K5 Hybrid (23-24) The New K5 Hybrid (2023)",
      value: "1"
    },
    {
      label: "The New K5 Hybrid (20-23)",
      value: "2"
    },
    {
      label: "New K5 (13-15)",
      value: "3"
    },
    {
      label: "New K5 Hybrid (13-15)",
      value: "4"
    },
    {
      label: "K5 (09-10)",
      value: "5"
    },
  ]
  const enginePowerOptions = [
    {
      label: "50",
      value: "50"
    },
    {
      label: "75",
      value: "75"
    },
    {
      label: "100",
      value: "100"
    },
    {
      label: "125",
      value: "125"
    },
    {
      label: "150",
      value: "150"
    },
  ]
  const engineTypeOptions = [
    {
      label: "ДВС",
      value: "ice"
    },
    {
      label: "Электро",
      value: "electro"
    }
  ]
  const transmissionOptions = [
    {
      label: "Любой",
      value: "any"
    },
    {
      label: "Передний",
      value: "front"
    },
    {
      label: "Задний",
      value: "rear"
    }
  ]
  const colorOptions = [
    {
      label: "Любой",
      value: "any"
    },
    {
      label: "Белый",
      value: "white"
    },
    {
      label: "Черный",
      value: "black"
    },
    {
      label: "Серый",
      value: "gray"
    },
    {
      label: "Бежевый",
      value: "beige"
    },
  ]

  const [filterExtended, setFilterExtended] = useState(false); 
  const [formData, setFormData] = useState<any>({
    carBrand: null,
    carModel: null,
    yearFrom: null,
    yearTo:null,
    engineCapacityFrom: null,
    engineCapacityTo: null,
    generation: null,
    enginePower:null,
    engineType: null,
    transmission: null,
    color: null,
}); 
// const priceFromRef = useRef<any>()

// priceFromRef.current.addEventListener('input', function(){
//   priceFromRef.current.value =(parseInt(priceFromRef.current.value)).toLocaleString('ru-Ru')
// })
  const { register, reset, handleSubmit } = useForm<FilterValues>()

  const onSubmit: SubmitHandler<FilterValues> = (data) => {

    let result = {...formData}
    //изменяем полученные данные чтобы оставить только нужные параметры
    Object.keys(result).forEach(function(key) {
        result[key] = result[key]?.value
    }) 
    //объединяем с инпутами формы
    result = {...result, ...data}
    
    console.log(result)
  }

  const handleReset = () => {
    reset()
    setFormData({
      carBrand: null,
      carModel: null,
      yearFrom: null,
      yearTo:null,
      engineCapacityFrom: null,
      engineCapacityTo: null,
      generation: null,
      enginePower:null,
      engineType: null,
      transmission: null,
      color: null,
    })
  }

  const handleExtendClick = () => {
    setFilterExtended(!filterExtended)
  }
  return (
    <div className='bg-slate-50 w-full px-4 py-5 min-[720px]:px-[30px] min-[720px]:px-[30px] min-[720px]:py-[30px]'>
      <form className='' onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <div className="min-[720px]:flex min-[720px]:justify-between">
            <div className="mb-3 min-[720px]:mr-3 min-[720px]:w-1/2">
              <CustomSelect 
                name='carBrand'
                data={formData} 
                setData={setFormData} 
                options={carBrandOptions} 
                form='full' 
                placeHolder="Марка" 
                dropdownLabel="Марка"
              />
            </div>
            <div className="mb-3 min-[720px]:w-1/2">
              <CustomSelect 
                name='carModel'
                data={formData} 
                setData={setFormData} 
                options={carModelOptions} 
                form='full' 
                placeHolder="Модель" 
                dropdownLabel="Модель"
              />
            </div>
          </div>

          <div className="flex max-[720px]:flex-col">
            <div className="mb-3 flex w-full min-[720px]:w-1/2 min-[720px]:pr-[6px]">
              <CustomSelect
                name='yearFrom' 
                data={formData} 
                setData={setFormData} 
                options={yearFromOptions} 
                form='half-left' 
                placeHolder="Год, от" 
                dropdownLabel="Год выпуска"
              />
              <CustomSelect 
                name='yearTo'
                data={formData} 
                setData={setFormData} 
                options={yearToOptions} 
                form='half-right' 
                placeHolder="до" 
                dropdownLabel="Год выпуска"
              />
            </div>
            <div className="mb-3 flex w-full min-[720px]:w-1/2 min-[720px]:pl-[6px] max-[720px]:hidden">
                <CustomSelect
                  name='engineCapacityFrom' 
                  data={formData} 
                  setData={setFormData} 
                  options={engineCapacityFromOptions} 
                  form='half-left' 
                  placeHolder="Объем" 
                  dropdownLabel="Объем двигателя"
                />
                <CustomSelect 
                  name='engineCapacityTo'
                  data={formData} 
                  setData={setFormData} 
                  options={engineCapacityToOptions} 
                  form='half-right' 
                  placeHolder="до" 
                  dropdownLabel="Объем двигателя"
                />
            </div>
          </div>

          <div className="flex">
            <div className="flex w-full min-[720px]:w-1/2 min-[720px]:pr-[6px]">
              <input
                {...register("priceFrom")} 
                id="priceFrom"
                type="text"
                placeholder='Цена от, ₩'
                className='mb-[30px] focus:border-slate-900 focus:outline-0 h-10 w-1/2 rounded-l-md border border-slate-200 py-2 px-3 text-sm'
              />
              <input
                {...register("priceTo")} 
                id="priceTo"
                type="text"
                placeholder='до'
                className='mb-[30px] focus:border-slate-900 focus:outline-0 h-10 w-1/2 rounded-r-md border border-slate-200 py-2 px-3 text-sm'
              />
            </div>
            <div className="flex w-full min-[720px]:w-1/2 min-[720px]:pl-[6px] max-[720px]:hidden">
              <input
                  {...register("carNumber")} 
                  className='mb-3 h-10 w-full rounded-md border border-slate-200 py-2 px-3 text-sm max-[720px]:hidden'
                  id="carNumber"
                  type="text"
                  placeholder='Номер машины'
                />
            </div>
          </div>
        </div> 

      { filterExtended && (
        <div className="w-full">
          <div className="min-[720px]:flex min-[720px]:justify-between">
            <div className="mb-3 min-[720px]:mr-3 min-[720px]:w-1/2">
              <CustomSelect 
                name='generation'
                data={formData} 
                setData={setFormData} 
                options={generationOptions} 
                form='full' 
                placeHolder="Поколение" 
                dropdownLabel="Поколение"
              />
            </div>
            <div className="mb-3 flex w-full min-[720px]:w-1/2 min-[720px]:pl-[6px] min-[720px]:hidden">
                <CustomSelect
                  name='engineCapacityFrom' 
                  data={formData} 
                  setData={setFormData} 
                  options={engineCapacityFromOptions} 
                  form='half-left' 
                  placeHolder="Объем" 
                  dropdownLabel="Объем двигателя"
                />
                <CustomSelect 
                  name='engineCapacityTo'
                  data={formData} 
                  setData={setFormData} 
                  options={engineCapacityToOptions} 
                  form='half-right' 
                  placeHolder="до" 
                  dropdownLabel="Объем двигателя"
                />
            </div>
            <div className="flex w-full min-[720px]:w-1/2 min-[720px]:pr-[6px]">
              <input
                {...register("mileageFrom")} 
                id="mileageFrom"
                type="text"
                placeholder='Пробег от'
                className='mb-3 focus:border-slate-900 focus:outline-0 h-10 w-1/2 rounded-l-md border border-slate-200 py-2 px-3 text-sm'
              />
              <input
                {...register("mileageTo")} 
                id="mileageTo"
                type="text"
                placeholder='до'
                className='mb-3 focus:border-slate-900 focus:outline-0 h-10 w-1/2 rounded-r-md border border-slate-200 py-2 px-3 text-sm'
              />
            </div>
          </div>

          <div className="min-[720px]:flex min-[720px]:justify-between">
            <div className="mb-3 min-[720px]:mr-3 min-[720px]:w-1/2">
              <CustomSelect 
                name='enginePower'
                data={formData} 
                setData={setFormData} 
                options={enginePowerOptions} 
                form='full' 
                placeHolder="Мощность" 
                dropdownLabel="Мощность"
              />
            </div>
            <div className="mb-3 min-[720px]:w-1/2">
              <CustomSelect 
                name='engineType'
                data={formData} 
                setData={setFormData} 
                options={engineTypeOptions} 
                form='full' 
                placeHolder="Тип двигателя" 
                dropdownLabel="Тип двигателя"
              />
            </div>
          </div>

          <div className="min-[720px]:flex min-[720px]:justify-between">
            <div className="mb-3 min-[720px]:mb-[30px] min-[720px]:mr-3 min-[720px]:w-1/2">
              <CustomSelect 
                name='transmission'
                data={formData} 
                setData={setFormData} 
                options={transmissionOptions} 
                form='full' 
                placeHolder="Привод" 
                dropdownLabel="Привод"
              />
            </div>
            <div className="mb-3 min-[720px]:mb-[30px] min-[720px]:w-1/2">
              <CustomSelect 
                name='color'
                data={formData} 
                setData={setFormData} 
                options={colorOptions} 
                form='full' 
                placeHolder="Цвет" 
                dropdownLabel="Цвет"
              />
            </div>
            <div className="flex w-full min-[720px]:w-1/2 min-[720px]:pl-[6px] min-[720px]:hidden">
              <input
                  {...register("carNumber")} 
                  id="carNumber"
                  type="text"
                  placeholder='Номер машины'
                  className='mb-[30px] h-10 w-full rounded-md border border-slate-200 py-2 px-3 text-sm min-[720px]:hidden'
                />
            </div>
          </div>
        </div> 
      )}


        <div className="min-[720px]:mt-[30px] text-sm font-medium min-[720px]:flex">
          <div className="flex w-full max-[720px]:mb-2.5 justify-between min-[720px]:mr-[25px]">
              <button onClick={handleExtendClick} type="button"
              className='block h-10 text-slate-900 flex items-center'>
                <div className="mr-2">
                  {filterExtended ? 'Свернуть' : 'Расширенный поиск'}
                </div>
                <Icon isOpen={filterExtended}/>
              </button>

              <button type="reset"
              className='block h-10 text-slate-900' onClick={handleReset}>
                Сбросить
              </button>
          </div>
            <button
            type="submit"
            className='block h-10 w-full min-[720px]:w-[130px] rounded-md text-white bg-slate-900 duration-500 hover:bg-slate-700'>
              Показать
            </button>

        </div>

      </form>
    </div>
  )
}

export default Filter
'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import CustomSelect from "@/app/_components/sharedComponents/CustomSelect"
import Image from 'next/image'

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
      label: "Марка",
      value: ""
    },
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
      label: "Модель",
      value: ""
    },
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
      label: "Год, от",
      value: ""
    },
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
      label: "до",
      value: ""
    },
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
      label: "Объем двигателя",
      value: ""
    },
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
      label: "Объем двигателя",
      value: ""
    },
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
      label: "Поколение",
      value: ""
    },
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
      label: "Мощность",
      value: ""
    },
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
      label: "Тип двигателя",
      value: ""
    },
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
      label: "Привод",
      value: ""
    },
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
      label: "Цвет",
      value: ""
    },
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

  const [carBrand, setCarBrand] = useState<any>(carBrandOptions[0]); 
  const [carModel, setCarModel] = useState<any>(carModelOptions[0]); 
  const [yearFrom, setYearFrom] = useState<any>(yearFromOptions[0]); 
  const [yearTo, setYearTo] = useState<any>(yearToOptions[0]); 
  const [engineCapacityFrom, setEngineCapacityFrom] = useState<any>(engineCapacityFromOptions[0]); 
  const [engineCapacityTo, setEngineCapacityTo] = useState<any>(engineCapacityToOptions[0]); 
  const [generation, setGeneration] = useState<any>(generationOptions[0]); 
  const [enginePower, setEnginePower] = useState<any>(enginePowerOptions[0]); 
  const [engineType, setEngineType] = useState<any>(engineTypeOptions[0]); 
  const [transmission, setTransmission] = useState<any>(transmissionOptions[0]); 
  const [color, setColor] = useState<any>(colorOptions[0]); 


  const { register, reset, handleSubmit } = useForm<FilterValues>()

  const onSubmit: SubmitHandler<FilterValues> = (data) => {
    console.log(data)
    handleReset()
  }

  const handleReset = () => {
    reset()
    setCarBrand(carBrandOptions[0])
    setCarModel(carModelOptions[0])
    setYearFrom(yearFromOptions[0])
    setYearTo(yearToOptions[0])
    setEngineCapacityFrom(engineCapacityFromOptions[0])
    setEngineCapacityTo(engineCapacityToOptions[0])
    setGeneration(generationOptions[0])
    setEnginePower(enginePowerOptions[0])
    setEngineType(engineTypeOptions[0])
    setTransmission(transmissionOptions[0])
    setColor(colorOptions[0])
  }

  const handleExtendClick = () => {
    setFilterExtended(!filterExtended)
  }
  return (
    <div className='bg-slate-50 w-full px-4 py-5 min-[720px]:px-[30px] min-[720px]:px-[30px] min-[720px]:py-[30px]'>
      <form className='' onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <div className="min-[720px]:flex min-[720px]:justify-between">
            <div className="min-[720px]:mr-3 min-[720px]:w-1/2">
              <CustomSelect data={carBrand} setData={setCarBrand} options={carBrandOptions} form='full'/>
            </div>
            <div className="min-[720px]:w-1/2">
              <CustomSelect data={carModel} setData={setCarModel} options={carModelOptions} form='full'/>
            </div>

          </div>
          <div className="">
            <div className="flex w-full min-[720px]:w-1/2 min-[720px]:pr-[6px]">
              <CustomSelect data={yearFrom} setData={setYearFrom} options={yearFromOptions} form='half-left'/>
              <CustomSelect data={yearTo} setData={setYearTo} options={yearToOptions} form='half-right'/>
            </div>
            <div className="flex w-full min-[720px]:w-1/2 min-[720px]:pr-[6px]">
              <input
                {...register("priceFrom")} 
                id="priceFrom"
                type="text"
                placeholder='Цена от, ₩'
                className='mb-[30px] h-10 w-1/2 rounded-l-md border border-slate-200 py-2 px-3 text-sm'
              />
              <input
                {...register("priceTo")} 
                id="priceTo"
                type="text"
                placeholder='до'
                className='mb-[30px] h-10 w-1/2 rounded-r-md border border-slate-200 py-2 px-3 text-sm'
              />
            </div>

              <input
                {...register("carNumber")} 
                id="carNumber"
                type="text"
                placeholder='Номер машины'
                className='mt-3 h-10 w-full rounded-md border border-slate-200 py-2 px-3 text-sm max-[720px]:hidden'
              />
          </div>
        </div> 

        <div>

        </div>

        <div className="text-sm font-medium min-[720px]:flex">
          <div className="flex w-full justify-between min-[720px]:mr-[25px]">
              <button onClick={handleExtendClick}
              className='block mb-2.5 h-10 text-slate-900 flex items-center'>
                <div className="mr-2">
                  {filterExtended ? 'Свернуть' : 'Расширенный поиск'}
                </div>
                <Icon isOpen={filterExtended}/>
              </button>

              <button
              className='block mb-2.5 h-10 text-slate-900 ' onClick={handleReset}>
                Сбросить
              </button>
          </div>
            <button
            type="submit"
            className='block h-10 w-full min-[720px]:w-[130px] rounded-md text-white bg-slate-900'>
              Показать
            </button>

        </div>

      </form>
    </div>
  )
}

export default Filter
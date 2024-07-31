'use client'
import CustomSelect from '../sharedComponents/CustomSelect'
import { useState } from 'react'
import { useForm, SubmitHandler, Controller  } from "react-hook-form"

const destinationOptions = [
    {
      label: "Без доставки",
      value: "none"
    },
    {
      label: "Москва",
      value: "moscow"
    }
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
const ageOptions = [
    {
      label: "Младше 3-х лет",
      value: "<3"
    },
    {
      label: "От 3 до 5 лет",
      value: "3-5"
    },
    {
      label: "Старше 5 лет",
      value: ">5"
    }
  ]
const engineCapacityOptions = [
    {
      label: "1.0 л",
      value: "1.0"
    },
    {
        label: "1.2 л",
        value: "1.2"
      },
      {
        label: "1.5 л",
        value: "1.5"
      },
      {
        label: "1.6 л",
        value: "1.6"
      },
      {
        label: "2.0 л",
        value: "2.0"
      },
      {
        label: "2.2 л",
        value: "2.2"
      },
      {
        label: "2.5 л",
        value: "2.5"
      },
      {
        label: "3.0 л",
        value: "3.0"
      },
      {
        label: "3.3 л",
        value: "3.3"
      },
      {
        label: "3.5 л",
        value: "3.5"
      },
      {
        label: "3.8 л",
        value: "3.8"
      },
  ]

  interface CalculatorValues {
    destination: any;
    price: number;
    engineType: string;
    age: string;
    engineCapacity: string;
  }
  
  const debounce = (callback:any, wait:number) => {
    let timeoutId: any = null;
    return (...args:any[]) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        callback(...args);
      }, wait);
    };
  }

const CalculatorForm = () => {
    const [formData, setFormData] = useState<any>({
        destination: null,
        engineType: null,
        age: null,
        engineCapacity:null
    }); 
    const [isEmpty, setIsEmpty] = useState(false)

    const { register, reset, handleSubmit } = useForm<CalculatorValues>()

    const onSubmit: SubmitHandler<CalculatorValues> = (data: CalculatorValues) => {
        //validate
        if (Object.values(formData).includes(null)) {
            debounce(setIsEmpty(true),1000)
            setTimeout(() => setIsEmpty(false), 1000)
        } 
        //if all good sending
        else {
            let result = {...formData}

            //изменяем полученные данные чтобы оставить только нужные параметры
            Object.keys(result).forEach((key) => {
                result[key] = result[key]?.value
            }) 

            //объединяем с инпутами формы
            result = {...result, ...data}

            console.log(result)
            // setFormData({
            //     destination: null,
            //     engineType: null,
            //     age: null,
            //     engineCapacity:null
            //     })
            // reset()
        }
      }
      
  return (
    
    <form className='text-med text-price' onSubmit={handleSubmit(onSubmit)}>

        <div className='mb-5'>
            <p className='pb-2.5'>Конечный пункт доставки</p>
            <div className={`rounded-md h-[42px] ${(formData.destination?.value || !isEmpty) ? '' : 'border-2 border-slate-900'}`}>
            <CustomSelect 
                name='destination' 
                data={formData} 
                setData={setFormData} 
                options={destinationOptions} 
                form='full' 
                placeHolder="Выбрать..." 
                dropdownLabel="Пункт доставки"
            />
            </div>
        </div>
        <div>
            <p className='pb-2.5'>Стоимость автомобиля, ₩ (в корейских вонах)</p>
            <input
                {...register("price", { required: true })} 
                id="price"
                type="number"
                placeholder='Введите'
                className='mb-5 h-10 w-full rounded-md border border-slate-200 py-2 px-3 text-sm'
              />
        </div>
        <div className='mb-5'>
            <p className='pb-2.5'>Тип двигателя</p>
            <div className={`rounded-md h-[42px] ${(formData.engineType?.value || !isEmpty) ? '' : 'border-2 border-slate-900'}`}>
                <CustomSelect 
                    name='engineType' 
                    data={formData} 
                    setData={setFormData} 
                    options={engineTypeOptions} 
                    form='full' 
                    placeHolder="Выбрать..." 
                    dropdownLabel="Тип двигателя"
                />
            </div>
        </div>
        <div className='mb-5'>
            <p className='pb-2.5'>Объем двигателя</p>
            <div className={`rounded-md h-[42px] ${(formData.engineCapacity?.value || !isEmpty) ? '' : 'border-2 border-slate-900'}`}>
                <CustomSelect 
                    name='engineCapacity' 
                    data={formData} 
                    setData={setFormData} 
                    options={engineCapacityOptions} 
                    form='full' 
                    placeHolder="Выбрать..." 
                    dropdownLabel="Объем двигателя"
                />
            </div>
        </div>
        <div className='mb-5'>
            <p className='pb-2.5'>Возраст автомобиля</p>
            <div className={`rounded-md h-[42px] ${(formData.age?.value || !isEmpty) ? '' : 'border-2 border-slate-900'}`}>
                <CustomSelect 
                    name='age' 
                    data={formData} 
                    setData={setFormData} 
                    options={ageOptions} 
                    form='full' 
                    placeHolder="Выбрать..." 
                    dropdownLabel="Возраст авто"
                />
            </div>
        </div>
        <button
            type="submit"
            className='block h-10 w-3/4 max-w-[250px] mx-auto mt-4 mb-8 rounded-md text-white bg-slate-900 duration-500 hover:bg-slate-700'>
              Рассчитать стоимость
            </button>
    </form>
  )
}

export default CalculatorForm
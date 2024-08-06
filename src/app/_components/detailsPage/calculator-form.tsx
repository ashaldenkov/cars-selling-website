'use client'
import CustomSelect from '../sharedComponents/custom-select'
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
  interface CalcForm {
    loading?: boolean;
  }
  const spaces = (e:any) => {
    if (e.target.value) {
      if (parseInt(e.target.value)) {
        e.target.value = e.target.value.replace(/\s/g, "")
        e.target.value = parseInt(e.target.value).toLocaleString('ru-Ru')
      }
      else e.target.value = e.target.value.slice(0,-1)
    }
  }


const CalculatorForm = ({loading}: CalcForm) => {
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
                {...register("price", loading ? { disabled: true} : { required: true })} 
                id="price"
                onChange={spaces}
                placeholder='Введите'
                className='mb-5 h-10 w-full rounded-md border border-slate-200 py-2 px-3 text-sm disabled:bg-white'
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
        <div className='pb-5'>
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
        {loading ? (
        <div className='shrink-0 flex items-center justify-center h-10 mt-4 mb-8 mx-auto w-fit px-4 rounded-md text-white bg-loading'>
              <svg aria-hidden="true" className="w-4 h-4 mr-1 text-gray-200 animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
          Загрузка...
        </div>
        ) : (
              <button
                type="submit"
                className='block h-10 w-3/4 max-w-[250px] mx-auto mt-4 mb-8 rounded-md text-white bg-slate-900 duration-500 hover:bg-slate-700'>
                    Рассчитать стоимость
              </button>
        )}

    </form>
  )
}

export default CalculatorForm
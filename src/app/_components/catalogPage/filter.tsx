'use client'
import { useForm } from "react-hook-form"
import { useState, useEffect  } from "react"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';


  interface Filter {
    loading?: true;
    notFound?:boolean;
    filterData?: any;
  }

  const Icon = ({isOpen}:{isOpen: boolean}) => {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={`${isOpen ? 'rotate-180' : ''}`}>
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );
  };

const Filter = ({loading, notFound, filterData}:Filter) => {

  const [filterExtended, setFilterExtended] = useState(false); 
  const [prevData, setPrevData] = useState<any>(null)

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, push } = useRouter();

  const params = new URLSearchParams(searchParams);

  //clearing parameters on page refresh
  useEffect( () => {
    
    for (const [key, value] of params.entries()) {
      if (key !== 'page') {
        params.delete(key);
      } 
    }
    replace(`${pathname}?${params.toString()}`);
  }, [])

  //creates spaces when we enter price and coverts it back to string
  const spaces = (e:any) => {
    if (e.target.value) {
      if (parseInt(e.target.value)) {
        e.target.value = e.target.value.replace(/\s/g, "")
        e.target.value = parseInt(e.target.value).toLocaleString('ru-Ru')
      }
      else e.target.value = e.target.value.slice(0,-1)
    }
  }
  //validation
  const formSchema = z.object({
    carBrand: z.string(),
    carModel: z.string(),
    yearFrom: z.string(),
    yearTo:z.string(),
    priceFrom: z.string(),
    priceTo: z.string(),
    engineCapacityFrom: z.string(),
    engineCapacityTo: z.string(),
    generation: z.string(),
    enginePower:z.string(),
    fuelType: z.string(),
    transmission: z.string(),
    color: z.string(),
    carNumber: z.string(),
    mileageFrom: z.string(),
    mileageTo: z.string(),
  }).refine((obj) => {
    let tempPrice1 = parseInt(obj.priceFrom.replace(/\s/g, ""))
    let tempPrice2 = parseInt(obj.priceTo.replace(/\s/g, ""))
    return (!obj.priceFrom || !obj.priceTo || tempPrice1 <= tempPrice2)
  }
    , { message: `Неверный диапазон`,
      path: ["priceTo"]
  }).refine((obj) => {
    let years1 = parseInt(obj.yearFrom)
    let years2 = parseInt(obj.yearTo)
    return (!obj.yearFrom || !obj.yearTo || years1 <= years2)
  }
    , { message: `Неверный диапазон`,
      path: ["yearTo"]
  }).refine((obj) => {
    let cap1 = parseInt(obj.engineCapacityFrom)
    let cap2 = parseInt(obj.engineCapacityTo)
    return (!obj.engineCapacityFrom || !obj.engineCapacityTo || cap1 <= cap2)
  }
    , { message: `Неверный диапазон`,
      path: ["engineCapacityTo"]
  }).refine((obj) => {
    let tempMiles1 = parseInt(obj.mileageFrom.replace(/\s/g, ""))
    let tempMiles2 = parseInt(obj.mileageTo.replace(/\s/g, ""))
    return (!obj.mileageFrom || !obj.mileageTo || tempMiles1 <= tempMiles2)
  }
    , { message: `Неверный диапазон`,
      path: ["mileageTo"]
  })

  const form = useForm<z.infer<typeof formSchema>>({
    reValidateMode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      carBrand: "",
      carModel: "",
      yearFrom: "",
      yearTo: "",
      priceFrom: "",
      priceTo: "",
      engineCapacityFrom: "",
      engineCapacityTo: "",
      generation: "",
      enginePower:"",
      fuelType: "",
      transmission: "",
      color: "",
      carNumber: "",
      mileageFrom: "",
      mileageTo: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const result = {...values}
     result.priceFrom = result.priceFrom.replace(/\s/g, "")
     result.priceTo = result.priceTo.replace(/\s/g, "")
     result.mileageFrom = result.mileageFrom.replace(/\s/g, "")
     result.mileageTo = result.mileageTo.replace(/\s/g, "")
    for (const [key, value] of Object.entries(result)) {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    }
    params.set('page', '1')
    setPrevData(values)
    push(`${pathname}?${params.toString()}`);
    }
  
  function onReset() {
    replace(`${pathname}`)
    form.reset()
  }

  const handleExtendClick = () => {
    setFilterExtended(!filterExtended)
  }
  
  //getting select options from db
//brand filter
  const brandName = filterData?.map( (car:any) => car.brand_id.toLowerCase())
  const uniqueBrandName = Array.from(new Set(brandName));

//model filter
  const modelName = filterData?.map( (car:any) => car.model_id?.toLowerCase())
  const uniqueModelName = Array.from(new Set(modelName));

  //year filter
  function createYearArr(maxYear: number){
    const start = 2010;
    const arr = [];
    
    for (let i = start; i <= maxYear; i++){
      arr.push(i);
    }
    arr.sort((a, b) => b - a);
    return arr;
  }
  const prodYears = filterData?.map( (car:any) => car.production_year)
  const years = createYearArr(Math.max.apply(null, prodYears))
  //generation
  const generation = filterData?.map( (car:any) => car.generation_id)
  const uniqueGeneration = Array.from(new Set(generation));
  //color
  const colors = filterData?.map( (car:any) => car.color_ru?.toLowerCase())
  const uniqueColors = Array.from(new Set(colors));

  return (

      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} onReset={onReset} className="bg-slate-50 w-full px-4 py-5 min-[720px]:px-[30px] min-[720px]:px-[30px] min-[720px]:py-[30px]">
        <div className="w-full mb-[20px] lg:mb-[30px]">
          <div className="min-[720px]:flex min-[720px]:justify-between">
            <FormField
            control={form.control}
            name="carBrand"
            render={({ field }) => (
              <FormItem className="w-full mb-3 min-[720px]:w-1/2 lg:max-w-[324px] min-[720px]:mr-3">
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Марка" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="overflow-y-auto w-[212px]">
                  <ScrollArea className="overflow-y-auto max-h-[218px] w-[206px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                    <SelectGroup className="w-[200px]">
                      <SelectLabel>Марка</SelectLabel>
                      {uniqueBrandName?.map( (title: any, index) => {
                        if (title) {
                          return (
                                  <SelectItem value={title} key={index}>{title[0]?.toUpperCase() + title?.slice(1)}</SelectItem>
                          )
                      }
                      })}
                    </SelectGroup>
                    <ScrollBar orientation="vertical"/>
                  </ScrollArea>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="carModel"
            render={({ field }) => (
              <FormItem className="w-full mb-3 min-[720px]:w-1/2 lg:max-w-[324px]">
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Модель" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="overflow-y-auto w-[212px]">
                    <ScrollArea className="overflow-y-auto max-h-[218px] w-[206px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                      <SelectGroup className="w-[200px]">
                      <SelectLabel>Модель</SelectLabel>
                      {uniqueModelName?.map( (title: any, index) => {
                      if (title) {
                        return (
                          <SelectItem value={title} key={index}>{title}</SelectItem>
                        )}
                      })}
                      </SelectGroup>
                      <ScrollBar orientation="vertical"/>
                    </ScrollArea>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
            />
          </div>

          <div className="flex max-[720px]:flex-col">
            <div className="flex w-full min-[720px]:w-1/2 min-[720px]:pr-[6px]">
              <FormField
              control={form.control}
              name="yearFrom"
              render={({ field }) => (
                <FormItem className="w-full mb-3 min-[720px]:w-1/2 min-[720px]:max-w-[324px]">
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className='rounded-r-none data-[placeholder]:text-slate-400'>
                        <SelectValue placeholder="Год, от" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="overflow-y-auto w-[212px]">
                      <ScrollArea className="overflow-y-auto max-h-[218px] w-[206px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <SelectGroup className="w-[200px]">
                        <SelectLabel>Год выпуска</SelectLabel>
                        {years.map(year => {
                          return (
                            <SelectItem value={year.toString()} key={uuidv4()}>{year}</SelectItem>
                          )
                        })}
                        </SelectGroup>
                        <ScrollBar orientation="vertical"/>
                      </ScrollArea>
                  </SelectContent>
                </Select>
              </FormItem>
              )}
              />
              <FormField
              control={form.control}
              name="yearTo"
              render={({ field }) => (
                <FormItem className="w-full mb-3 min-[720px]:w-1/2 min-[720px]:max-w-[324px]">
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className='rounded-l-none data-[placeholder]:text-slate-400'>
                        <SelectValue placeholder="до" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="overflow-y-auto w-[212px]">
                      <ScrollArea className="overflow-y-auto max-h-[218px] w-[206px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <SelectGroup className="w-[200px]">
                          <SelectLabel>Год выпуска</SelectLabel>
                          {years.map(year => {
                          return (
                            <SelectItem value={year.toString()} key={uuidv4()}>{year}</SelectItem>
                          )
                        })}
                        </SelectGroup>
                        <ScrollBar orientation="vertical"/>
                      </ScrollArea>
                  </SelectContent>
                </Select>
                <FormMessage className="text-sm"/>
              </FormItem>
              )}
              />
            </div>
            <div className="flex w-full min-[720px]:w-1/2 min-[720px]:pl-[6px] max-[720px]:hidden">
              <FormField
              control={form.control}
              name="engineCapacityFrom"
              render={({ field }) => (
                <FormItem className="w-full mb-3 min-[720px]:w-1/2 min-[720px]:max-w-[324px]">
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className='rounded-r-none data-[placeholder]:text-slate-400'>
                        <SelectValue placeholder="Объем, от"/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="overflow-y-auto w-[212px]">
                      <ScrollArea className="overflow-y-auto max-h-[218px] w-[206px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <SelectGroup className="w-[200px]">
                          <SelectLabel>Объем двигателя</SelectLabel>
                          <SelectItem value="0.7">0.7 л</SelectItem>
                          <SelectItem value="0.8">0.8 л</SelectItem>
                          <SelectItem value="0.9">0.9 л</SelectItem>
                          <SelectItem value="1.0">1.0 л</SelectItem>
                          <SelectItem value="1.1">1.1 л</SelectItem>
                        </SelectGroup>
                        <ScrollBar orientation="vertical"/>
                      </ScrollArea>
                  </SelectContent>
                </Select>
                <FormMessage className="text-sm"/>
              </FormItem>
              )}
              />
              <FormField
              control={form.control}
              name="engineCapacityTo"
              render={({ field }) => (
                <FormItem className="w-full mb-3 min-[720px]:w-1/2 min-[720px]:max-w-[324px]">
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className='rounded-l-none data-[placeholder]:text-slate-400'>
                        <SelectValue placeholder="до"/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="overflow-y-auto w-[212px]">
                      <ScrollArea className="overflow-y-auto max-h-[218px] w-[206px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <SelectGroup className="w-[200px]">
                      <SelectLabel>Объем двигателя</SelectLabel>
                      <SelectItem value="0.7">0.7 л</SelectItem>
                      <SelectItem value="0.8">0.8 л</SelectItem>
                      <SelectItem value="0.9">0.9 л</SelectItem>
                      <SelectItem value="1.0">1.0 л</SelectItem>
                      <SelectItem value="1.1">1.1 л</SelectItem>
                      </SelectGroup>
                        <ScrollBar orientation="vertical"/>
                      </ScrollArea>
                  </SelectContent>
                </Select>
              <FormMessage className="text-sm"/>
              </FormItem>
              )}
              />
            </div>
          </div>

          <div className="flex">
            <div className="flex w-full min-[720px]:w-1/2 min-[720px]:pr-[6px]">
              <FormField
                control={form.control}
                name="priceFrom"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Цена от, ₩" autoComplete="off" {...field} onChange={(e) => {spaces(e); field.onChange(e)}}  className="rounded-r-none placeholder:text-slate-400"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="priceTo"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="до" {...field} autoComplete="off" onChange={(e) => {spaces(e); field.onChange(e)}} className="rounded-l-none placeholder:text-slate-400"/>
                    </FormControl>
                    <FormMessage className="text-sm"/>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full min-[720px]:w-1/2 min-[720px]:pl-[6px] max-[720px]:hidden">
              <FormField
              control={form.control}
              name="carNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="Номер машины" autoComplete="off" {...field} className="placeholder:text-slate-400"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
            </div>
          </div>
        </div> 

        { filterExtended && (
          <div className="w-full mt-[50px] mb-[30px] min-[720px]:mb-[60px]">
            <div className="min-[720px]:flex min-[720px]:justify-between">
            <FormField
                control={form.control}
                name="generation"
                render={({ field }) => (
                  <FormItem className="w-full mb-3 min-[720px]:w-1/2 lg:max-w-[324px] min-[720px]:mr-3">
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Поколение" />
                        </SelectTrigger>
                        </FormControl>
                    <SelectContent className="w-[212px]">
                      <ScrollArea className="overflow-y-auto max-h-[218px] w-[206px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <SelectGroup className="w-[200px]">
                          <SelectLabel>Поколение</SelectLabel>
                          {uniqueGeneration?.map( (title: any) => {
                            if (title) {
                              return (
                                <SelectItem value={title} key={uuidv4()}>{title}</SelectItem>
                              )
                            }
                            return
                      })}
                        </SelectGroup>
                        <ScrollBar orientation="vertical"/>
                      </ScrollArea>
                  </SelectContent>
                </Select>
              </FormItem>
                )}
                />
              <div className="flex w-full min-[720px]:w-1/2 min-[720px]:pl-[6px] min-[720px]:hidden">
              <FormField
              control={form.control}
              name="engineCapacityFrom"
              render={({ field }) => (
                <FormItem className="w-full mb-3 min-[720px]:w-1/2 min-[720px]:max-w-[324px]">
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className='rounded-r-none data-[placeholder]:text-slate-400'>
                        <SelectValue placeholder="Объем, от"/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="overflow-y-auto w-[212px]">
                      <ScrollArea className="overflow-y-auto max-h-[218px] w-[206px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <SelectGroup className="w-[200px]">
                          <SelectLabel>Объем двигателя</SelectLabel>
                          <SelectItem value="0.7">0.7 л</SelectItem>
                          <SelectItem value="0.8">0.8 л</SelectItem>
                          <SelectItem value="0.9">0.9 л</SelectItem>
                          <SelectItem value="1.0">1.0 л</SelectItem>
                          <SelectItem value="1.1">1.1 л</SelectItem>
                        </SelectGroup>
                        <ScrollBar orientation="vertical"/>
                      </ScrollArea>
                  </SelectContent>
                </Select>
              </FormItem>
              )}
              />
              <FormField
              control={form.control}
              name="engineCapacityTo"
              render={({ field }) => (
                <FormItem className="w-full mb-3 min-[720px]:w-1/2 min-[720px]:max-w-[324px]">
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className='rounded-l-none data-[placeholder]:text-slate-400'>
                        <SelectValue placeholder="до"/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="overflow-y-auto w-[212px]">
                      <ScrollArea className="overflow-y-auto max-h-[218px] w-[206px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <SelectGroup className="w-[200px]">
                      <SelectLabel>Объем двигателя</SelectLabel>
                      <SelectItem value="0.7">0.7 л</SelectItem>
                      <SelectItem value="0.8">0.8 л</SelectItem>
                      <SelectItem value="0.9">0.9 л</SelectItem>
                      <SelectItem value="1.0">1.0 л</SelectItem>
                      <SelectItem value="1.1">1.1 л</SelectItem>
                      </SelectGroup>
                        <ScrollBar orientation="vertical"/>
                      </ScrollArea>
                  </SelectContent>
                </Select>
              </FormItem>
              )}
              />
              </div>
              <div className="flex w-full min-[720px]:w-1/2">
              <FormField
                control={form.control}
                name="mileageFrom"
                render={({ field }) => (
                  <FormItem className="w-full mb-3">
                    <FormControl>
                      <Input placeholder="Пробег от" autoComplete="off" {...field} onChange={(e) => {spaces(e); field.onChange(e)}} className="rounded-r-none placeholder:text-slate-400"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mileageTo"
                render={({ field }) => (
                  <FormItem className="w-full mb-3">
                    <FormControl>
                      <Input placeholder="до" {...field} autoComplete="off" onChange={(e) => {spaces(e); field.onChange(e)}} className="rounded-l-none placeholder:text-slate-400"/>
                    </FormControl>
                    <FormMessage className="text-sm"/>
                  </FormItem>
                )}
              />
              </div>
            </div>

            <div className="min-[720px]:flex min-[720px]:justify-between">
              <FormField
                control={form.control}
                name="enginePower"
                render={({ field }) => (
                  <FormItem className="w-full mb-3 min-[720px]:w-1/2 lg:max-w-[324px] min-[720px]:mr-3">
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Мощность" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="overflow-y-auto w-[212px]">
                    <ScrollArea className="overflow-y-auto max-h-[218px] w-[206px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                      <SelectGroup className="w-[200px]">
                        <SelectLabel>Мощность</SelectLabel>
                        <SelectItem value="50">50</SelectItem>
                        <SelectItem value="75">75</SelectItem>
                        <SelectItem value="100">100</SelectItem>
                        <SelectItem value="125">125</SelectItem>
                        <SelectItem value="150">150</SelectItem>
                        </SelectGroup>
                      <ScrollBar orientation="vertical"/>
                    </ScrollArea>
                  </SelectContent>
                </Select>
              </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fuelType"
                render={({ field }) => (
                  <FormItem className="w-full mb-3 min-[720px]:w-1/2 lg:max-w-[324px]">
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Тип топлива" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="overflow-y-auto w-[212px]">
                    <ScrollArea className="overflow-y-auto max-h-[218px] w-[206px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                      <SelectGroup className="w-[200px]">
                        <SelectLabel>Тип топлива</SelectLabel>
                        <SelectItem value="дизельное топливо">Дизель</SelectItem>
                        <SelectItem value="бензин">Бензин</SelectItem>
                        <SelectItem value="lpg">LPG</SelectItem>
                        </SelectGroup>
                      <ScrollBar orientation="vertical"/>
                    </ScrollArea>
                  </SelectContent>
                </Select>
              </FormItem>
                )}
              />
            </div>

            <div className="min-[720px]:flex min-[720px]:justify-between">
              <FormField
                control={form.control}
                name="transmission"
                render={({ field }) => (
                  <FormItem className="w-full max-[720px]:mb-3 min-[720px]:w-1/2 lg:max-w-[324px] min-[720px]:mr-3">
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Привод" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="overflow-y-auto w-[212px]">
                    <ScrollArea className="overflow-y-auto max-h-[218px] w-[206px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                      <SelectGroup className="w-[200px]">
                        <SelectLabel>Привод</SelectLabel>
                        <SelectItem value="any">Любой</SelectItem>
                        <SelectItem value="front">Передний</SelectItem>
                        <SelectItem value="rear">Задний</SelectItem>
                        </SelectGroup>
                      <ScrollBar orientation="vertical"/>
                    </ScrollArea>
                  </SelectContent>
                </Select>
              </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem className="w-full max-[720px]:mb-3 min-[720px]:w-1/2 lg:max-w-[324px]">
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Цвет" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="overflow-y-auto w-[212px]">
                    <ScrollArea className="overflow-y-auto max-h-[218px] w-[206px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                      <SelectGroup className="w-[200px]">
                        <SelectLabel>Цвет</SelectLabel>
                        {uniqueColors?.map( (title: any) => {
                          if (title) {
                            return (
                              <SelectItem value={title} key={uuidv4()}>{title[0]?.toUpperCase() + title?.slice(1)}</SelectItem>
                            )
                          }
                          return
                      })}
                        </SelectGroup>
                      <ScrollBar orientation="vertical"/>
                    </ScrollArea>
                  </SelectContent>
                </Select>
              </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="carNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input autoComplete="off" placeholder="Номер машины" {...field} 
                      className="w-full min-[720px]:w-1/2 min-[720px]:pl-[6px] min-[720px]:hidden"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              className='block h-10 text-slate-900'>
                Сбросить
              </button>
          </div>
          {
            loading ? (
              <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Загрузка...
            </Button>
            ) : (
              ( JSON.stringify(prevData) == JSON.stringify(form.watch()) && notFound ) ? (
            <div className='shrink-0 flex items-center justify-center h-10 w-full min-[720px]:min-w-[130px] min-[720px]:w-fit px-4 rounded-md text-white bg-loading'>
              Ничего не найдено
            </div>
              ) :(
              <button
              type="submit"
              className='shrink-0 h-10 w-full min-[720px]:min-w-[130px] min-[720px]:w-fit px-4 rounded-md text-white bg-slate-900 duration-500 hover:bg-slate-700'>
                Показать
              </button>
            ))
          }

        </div>

      </form>
      </Form>
  )
}

export default Filter
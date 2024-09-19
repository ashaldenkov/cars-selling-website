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
    loading?: boolean;
    notFound?:boolean;
    queryParams?:any;
    setQueryParams?: any;
  }

  const Icon = ({isOpen}:{isOpen: boolean}) => {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={`${isOpen ? 'rotate-180' : ''}`}>
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );
  };

const Filter = ({loading, notFound, setQueryParams}:Filter) => {

  const [filterExtended, setFilterExtended] = useState(false); 
  const [prevData, setPrevData] = useState<any>(null)

  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const { replace, push } = useRouter();

  // const params = new URLSearchParams(searchParams);

  //clearing parameters on page refresh
  // useEffect( () => {

  //   for (const [key, value] of params.entries()) {
  //     if (key !== 'page') {
  //       params.delete(key);
  //     } 
  //   }
  //   replace(`${pathname}?${params.toString()}`);
  // }, [])

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
    page: z.string().optional(),
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

    result.page = '1';
    setPrevData(values)
    setQueryParams(result)
    }
  
  function onReset() {
    setQueryParams({page: '1'})
    form.reset()
  }

  const handleExtendClick = () => {
    setFilterExtended(!filterExtended)
  }
  
  //getting select options from db
//brand options
  const uniqueBrandName = ["hyundai","kia","genesis","bmw","cadillac","ferrari","ford","lincoln","kg mobility","audi","porche","jeep","tesla","fiat","chevrolet","lexus","toyota"]

//model options
  const uniqueModelName = ["Modern Porter II","Grandeur","New Tucson","K3","The all new Grandeur","Genesis","Santa FE (tm)","EQ900","Grand Bird Parkway","LF Sonata","G70","The New Mojave","5 series","All new tucson","3 series","458","Grandeur hg","Explorer","MKS 3.7","Korando cclubby","G4 rexton","A6","Mojave","Cayenne","Modern New Granger 2.0","SF90","Bongo III","All New K7","The All New G80","The New K3","Boxster(718)","Grand cherokee","X5","The New Santa FE","7 series","GV80","All new mighty","All-new Tucson","The new Grandeur","Korando Turismo","Rexton W","All new Carnival","Rexton Sports","E- Mighty","Q5","Avante","Macan","Model y","Modern Aslan G300","500","F430","Suburban","ATS","All new Mighty Refrigerated ","Ray","Santa FE","Super","a4(2)","Genesis GH G380","911","Soul","UX EV 300e","A8","CT6","The new Grand Starex 3 seat","Roma","The new Carnival","The new max Cruise","XT4","A7","Veracruz","812","Xaxcruz","Escalade","812 GTS","Tucson IX","Panamera","Grand Starex","The new grand Starex","The New Bongo III","All New Sorento","6 series","The all new Tucson","Staria","Venza","The new Grandeur IG"]

  //year options
  const years = [2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010]
  //generation
  const uniqueGeneration = ["CRDiSupercap extra long axle","CRDi Supercap extra long axis smart","car rental prime","2WD premium","GDI prestige","Exclusive","BH 330 Modern","4WD Inspiration","AWDpremium luxury",null,"Car Premium","GDiExclusive","Telite","4WD president","7 Generation","2WD style","6 Generation","5 generation","V8 Italy","Rental Car Premium","5 Generation","V6"," 2WD park","4WD heritage","4 Generation","The Master 3.0","2 Generation","V8 hybrid spider","Cargo High Built-in Truck One ton","prestige","AWD Basic type","High refrigerated truck super cab twin comp","High interior super cab","CRDiSupercap extra long axle premium","80th Anniversary","AWD prestige","5 Generation 740i","car rental modern","2.5 Tone regular cap long axis high top","Turbo 2WD Style Fever","4WD 9 seater TX plus","Wing body manual","Refrigerated Truck Super Cab Twin Comp","2wd rx7 prestige","7 Seater Limousine Diesel VIP","aerial work platform","built-in truck 3.5 ton","45 TDIquattro dynamic","cargo built-in truck One tone king cap","car rental style","sports supreme","AWD long range","Modern","v8","10 Generation","AWDpremium","truck 3.5 ton","Prestige"," Cargo CRDiDouble cab extra long axis","2WD MLX top-of-the-line","truck 4.5 ton","Generation 2.0","AWDprestige","One Generation","safety","3 Generation"," cargo built-in truck Onetone king cap low floor","Power Gate Double Cap","Laredo","awd premium","Van Smart","CRDiSupercap extra long axis smart","cargo refrigerated truck One tone king cap","V8","9 Seater Diesel Luxury","4wd finest edition","AWD sports","3.9V8","AWD premium luxury","55 TDIquattro dynamic","4WD 380VXL premium","6.5V12","V12 spider","4WDExclusive Special","4wd lmx20 premium","4WD Exclusive","AWD","camping car4wd","limousine 6 seater exclusive","2.5 Tone regular cap long axis low floor","Cargo Truck Plus Type","4WDFinest Edition","Wingbody 3.5ton","2WDnobless","9 Generation","4wd exclusive","AWD Sport","premium","GDI trendy","2WDNoblesse Special","2WDExclusive","AWD Inspiration","2wdinspiration","Limited","cargo built-in truck Onetone king cap"]
  //color
  const uniqueColors = ["белый","черный","жемчужно-серый","серый","","от белого","красный","серебро","желтый","крысиный цвет","синий","красный ( алый)","синий ( индиго , темно-синий )","зеленый","коричневый"]



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
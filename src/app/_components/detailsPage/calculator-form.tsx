'use client'
import CustomSelect from '../sharedComponents/custom-select'
import { useState } from 'react'
import { useForm } from "react-hook-form"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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

  const formSchema = z.object({
    destination: z.string().min(1, { message: "Обязательное поле" }),
    price: z.string().min(1, { message: "Обязательное поле" }),
    fuelType: z.string().min(1, { message: "Обязательное поле" }),
    engineCapacity:z.string().min(1, { message: "Обязательное поле" }),
    age: z.string().min(1, { message: "Обязательное поле" }),
  }).required()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destination: "",
      price: "",
      fuelType: "",
      engineCapacity: "",
      age: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    // result.priceFrom = result.priceFrom.replace(/\s/g, "")
    // result.priceTo = result.priceTo.replace(/\s/g, "")
    console.log(values)
  }

      
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} onReset={() => form.reset()} className="text-med text-price">

              <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                  <FormItem className="w-full mb-5">
                    <FormLabel className='text-[15px] font-normal'>Конечный пункт доставки</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Выбрать..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="overflow-y-auto w-[212px]">
                      <ScrollArea className="overflow-y-auto max-h-[218px] w-[206px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <SelectGroup className="w-[200px]">
                          <SelectLabel>Пункт доставки</SelectLabel>
                          <SelectItem value="no">Без доставки</SelectItem>
                          <SelectItem value="moscow">Москва</SelectItem>
                        </SelectGroup>
                        <ScrollBar orientation="vertical"/>
                      </ScrollArea>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="w-full mb-5">
                    <FormLabel className='text-[15px] font-normal'>Стоимость автомобиля, ₩ (в корейских вонах)</FormLabel>
                    <FormControl>
                      <Input placeholder="Введите" {...field} autoComplete='off' onChange={(e) => {spaces(e); field.onChange(e)}} className="placeholder:text-slate-400"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fuelType"
                render={({ field }) => (
                  <FormItem className="w-full mb-5">
                    <FormLabel className='text-[15px] font-normal'>Тип двигателя</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Выбрать..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="overflow-y-auto w-[212px]">
                      <ScrollArea className="overflow-y-auto max-h-[218px] w-[206px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <SelectGroup className="w-[200px]">
                          <SelectLabel>Тип двигателя</SelectLabel>
                          <SelectItem value="ice">ДВС</SelectItem>
                          <SelectItem value="electro">Электро</SelectItem>
                        </SelectGroup>
                        <ScrollBar orientation="vertical"/>
                      </ScrollArea>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="engineCapacity"
                render={({ field }) => (
                  <FormItem className="w-full mb-5">
                    <FormLabel className='text-[15px] font-normal'>Объем двигателя</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Выбрать..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="overflow-y-auto w-[212px]">
                      <ScrollArea className="overflow-y-auto max-h-[218px] w-[206px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <SelectGroup className="w-[200px]">
                          <SelectLabel>Объем двигателя</SelectLabel>
                          <SelectItem value="1000">1000 см<sup>3</sup></SelectItem>
                          <SelectItem value="1200">1200 см<sup>3</sup></SelectItem>
                          <SelectItem value="1500">1500 см<sup>3</sup></SelectItem>
                          <SelectItem value="1600">1600 см<sup>3</sup></SelectItem>
                          <SelectItem value="2000">2000 см<sup>3</sup></SelectItem>
                          <SelectItem value="2200">2200 см<sup>3</sup></SelectItem>
                          <SelectItem value="2500">2500 см<sup>3</sup></SelectItem>
                          <SelectItem value="3000">3000 см<sup>3</sup></SelectItem>
                          <SelectItem value="3300">3300 см<sup>3</sup></SelectItem>
                          <SelectItem value="3500">3500 см<sup>3</sup></SelectItem>
                          <SelectItem value="3800">3800 см<sup>3</sup></SelectItem>
                        </SelectGroup>
                        <ScrollBar orientation="vertical"/>
                      </ScrollArea>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem className="w-full pb-5">
                    <FormLabel className='text-[15px] font-normal'>Возраст автомобиля</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Выбрать..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="overflow-y-auto w-[212px]">
                      <ScrollArea className="overflow-y-auto max-h-[218px] w-[206px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <SelectGroup className="w-[200px]">
                          <SelectLabel>Возраст авто</SelectLabel>
                          <SelectItem value="<3">Младше 3-х лет</SelectItem>
                          <SelectItem value="3-5">От 3 до 5 лет</SelectItem>
                          <SelectItem value=">5">Старше 5 лет</SelectItem>
                        </SelectGroup>
                        <ScrollBar orientation="vertical"/>
                      </ScrollArea>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

          {loading ? (
            <Button disabled className='block flex w-auto mx-auto mt-4 mb-8 text-white'>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Загрузка...
            </Button>
          ) : (
                <Button
                  type="submit"
                  className='block w-3/4 max-w-[250px] mx-auto mt-4 mb-8 text-white bg-slate-900 duration-500 hover:bg-slate-700'>
                      Рассчитать стоимость
                </Button>
          )}

      </form>
    </Form>
  )
}

export default CalculatorForm
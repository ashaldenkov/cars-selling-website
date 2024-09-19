import React from 'react'
import CarCard from "@/app/_components/catalogPage/car-card"
import { v4 as uuidv4 } from 'uuid';


interface CarList {
  data: any;
}

export default function CarList({data}: CarList) {

  return (
    <div className='w-full max-w-[720px] mx-auto'>
        {
            data.map((car:any) => {
                return <CarCard key={uuidv4()} carData={car}/>
            })
        }
    </div>
  )
}


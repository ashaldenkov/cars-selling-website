import React from 'react'
import CarCard from "@/app/_components/catalogPage/Car-card"


interface CarList {
  data: any;
}

export default async function CarList({data}: CarList) {

  return (
    <div>
        {
            data.map((car:any) => {
                return <CarCard key={car}/>
            })
        }
    </div>
  )
}


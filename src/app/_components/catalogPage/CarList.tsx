import React from 'react'
import CarCard from "@/app/_components/catalogPage/CarCard"


type CarList = {
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


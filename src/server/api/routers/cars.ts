import { z } from "zod";
import { db } from '@/server/db';

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";



export const carsRouter = createTRPCRouter({
  allCarList: publicProcedure
    .query(async () => {
      const cars = await db.car.findMany();
      return cars;
    }),

  getFiltered: publicProcedure
  .input(z.object({
    carBrand: z.string().optional(),
    carModel: z.string().optional(),
    yearFrom: z.string().optional(),
    yearTo:z.string().optional(),
    priceFrom: z.string().optional(),
    priceTo: z.string().optional(),
    engineCapacityFrom: z.string().optional(),
    engineCapacityTo: z.string().optional(),
    generation: z.string().optional(),
    enginePower:z.string().optional(),
    engineType: z.string().optional(),
    transmission: z.string().optional(),
    color: z.string().optional(),
    carNumber: z.string().optional(),
    mileageFrom: z.string().optional(),
    mileageTo: z.string().optional(),
    generationOptions: z.string().optional()
  }))
  .query(async (opts) => {
    const { input } = opts;
    
    const user = await db.car.findMany({
      // where: {
      //   brand_id: Number(input?.carBrand),
      //   model_id: Number(input.carModel),
      //   production_year: {gte: Number(input.yearFrom),
      //     lte: Number(input.yearTo)
      //   },
      //   price: {gte: Number(input.priceFrom),
      //     lte: Number(input.priceTo)
      //   },
      //   engine_capacity: {gte: Number(input.engineCapacityFrom),
      //     lte: Number(input.engineCapacityTo)
      //   },
      //   generation_id: Number(input.generation),
      //   engine_power: Number(input.enginePower),
      //   engine_type: input.engineType,
      //   car_drive: input.transmission,
      //   color: input.color,
      //   car_number: input.carNumber,
      //   car_mileage: {gte: Number(input.mileageFrom),
      //     lte: Number(input.mileageTo)
      //   },
      // }
    });
           
    return user;
  }),
});

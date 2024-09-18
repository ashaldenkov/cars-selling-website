import { z } from "zod";
import { db } from '@/server/db';

import { createTRPCRouter, publicProcedure } from "@/server/trpc";


export const carsRouter = createTRPCRouter({
  findCarById: publicProcedure
  .input(z.string())
  .query(async (opts) => {
    const { input } = opts;
    const car = await db.car.findUnique({
      where: {
        id: Number(input),
      },
    });
    return car;
  }),

  getFiltered: publicProcedure
  .input(z.object({
    page: z.string().optional(),
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
    fuelType: z.string().optional(),
    transmission: z.string().optional(),
    color: z.string().optional(),
    carNumber: z.string().optional(),
    mileageFrom: z.string().optional(),
    mileageTo: z.string().optional(),
    generationOptions: z.string().optional()
  }))
  .query(async (opts: any) => {
    const { input } = opts;
    
    const user = await db.car.findMany({
      where: {
        brand_id: {
          contains: input.carBrand ? input?.carBrand : undefined, 
          mode: 'insensitive'
        },
        model_id: {
          contains: input.carModel ? input?.carModel : undefined,
          mode: 'insensitive'
        },
        production_year: {gte: input.yearFrom ? Number(input.yearFrom) : undefined,
          lte: input.yearTo ? Number(input.yearTo) : undefined,
        },
        price: {gte: input.priceFrom ? Number(input.priceFrom)/1000 : undefined,
          lte: input.priceTo ? Number(input.priceTo)/1000 : undefined
        },
        engine_capacity: {gte: input.engineCapacityFrom ? parseFloat(input.engineCapacityFrom) : undefined,
          lte: input.engineCapacityTo ? parseFloat(input.engineCapacityTo) : undefined
        },
        generation_id: {
          contains: input.generation ? input.generation : undefined, 
          mode: 'insensitive'
        },
        
        engine_power: input.enginePower ? Number(input.enginePower) : undefined,
        fuel_type_ru: {
          contains: input.fuelType ? input.fuelType : undefined, 
          mode: 'insensitive'
        },
        car_drive: (input.transmission && input.transmission !== 'any') ? input.transmission : undefined,
        color_ru: {
          contains: input.color ? input.color : undefined, 
          mode: 'insensitive'
        },
        car_number: input.carNumber ? { contains: input.carNumber, } : undefined,
        distance: {gte: input.mileageFrom ? Number(input.mileageFrom) : undefined,
          lte: input.mileageTo ? Number(input.mileageTo) : undefined,
        },
      }
    });
           
    return user;
  }),

  getCars: publicProcedure
  .query(async () => {
    const user = await db.car.findMany({});
    return user;
  }),
  test: publicProcedure
  .query(async () => {
    return "Hello, world!";
  }),
});

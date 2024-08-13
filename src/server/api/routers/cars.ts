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
      where: {
        brand_id: input.carBrand ? Number(input?.carBrand) : undefined,
        model_id: input.carModel ? Number(input?.carModel) : undefined,
        production_year: {gte: input.yearFrom ? Number(input.yearFrom) : undefined,
          lte: input.yearTo ? Number(input.yearTo) : undefined,
        },
        price: {gte: input.priceFrom ? Number(input.priceFrom) : undefined,
          lte: input.priceTo ? Number(input.priceTo) : undefined
        },
        engine_capacity: {gte: input.engineCapacityFrom ? parseFloat(input.engineCapacityFrom) : undefined,
          lte: input.engineCapacityTo ? parseFloat(input.engineCapacityTo) : undefined
        },
        generation_id: input.generation ? Number(input.generation) : undefined,
        engine_power: input.enginePower ? Number(input.enginePower) : undefined,
        engine_type: input.engineType ? input.engineType : undefined,
        car_drive: (input.transmission && input.transmission !== 'any') ? input.transmission : undefined,
        color: input.color ? input.color : undefined,
        car_number: input.carNumber ? { contains: input.carNumber, } : undefined,
        car_mileage: {gte: input.mileageFrom ? Number(input.mileageFrom) : undefined,
          lte: input.mileageTo ? Number(input.mileageTo) : undefined,
        },
      }
    });
           
    return user;
  }),
});

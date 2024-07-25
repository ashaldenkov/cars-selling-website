import {  HydrateClient } from "@/trpc/server";
import Image from 'next/image'
import Link from 'next/link'

import carImg from './_images/car image.png'
export default async function Home() {

  return (
    <HydrateClient>
      <main className="min-h-[600px] justify-center lg:min-h-547px flex flex-col lg:flex-row items-center">
        <div className="max-lg:flex max-lg:flex-col max-lg:items-center mt-[14px] lg:mb-[151px] lg:mt-[89px] lg:ml-[130px]">
            <h1 className="text-slate-900 text-3xl font-semibold max-lg:text-center">Стартовая страница</h1>
            <p className="text-slate-500 text-sm mt-5">Веб-сайт</p>
          <Link href='/catalog' className='inline-block text-white w-[120px] h-11 bg-btn rounded-md text-center py-2.5 mt-7 lg:mt-11'>
          Каталог
          </Link>
        </div>

        <div className="max-lg:order-first flex justify-center">
          <Image
          className='h-auto w-auto max-lg:max-h-[250px]'
          //priority={true}
          src={carImg}
          alt="Car image"
          />
        </div>
      </main>
    </HydrateClient>
  );
}

import Image from 'next/image'
import Link from 'next/link'

import repairImg from '@/app/_images/repairIcon.png'
export default async function Home() {

  return (
      <main className="min-h-[600px] justify-center lg:min-h-547px flex flex-col lg:flex-row items-center">
        <div className="max-lg:flex max-lg:flex-col max-lg:items-center mt-[14px] lg:mb-[151px] lg:mt-[89px] lg:ml-[130px]">
            <h1 className="text-slate-900 text-3xl font-semibold max-lg:text-center">Страница находится на доработке</h1>
            <p className="text-slate-500 text-sm mt-5">В будущем этот функционал будет реализован</p>
          <Link href='/' className='inline-block text-white w-fit px-4 h-11 bg-btn rounded-md text-center py-2.5 mt-7 lg:mt-11'>
          Вернуться на главную
          </Link>
        </div>

        <div className="max-lg:order-first flex justify-center">
          <Image
          className='h-auto w-auto max-h-[80px] ml-10 mb-[150px]'
          src={repairImg}
          alt="Car image"
          />
        </div>
      </main>
  );
}

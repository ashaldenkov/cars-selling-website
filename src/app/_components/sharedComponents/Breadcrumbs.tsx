'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image'
import BreadcrumbIcon from '@/app/_images/breadbrumbIcon.svg'



interface BreadCrumbObject {
    breadcrumb: string;
    href: string;
  }

const Breadcrumbs = () => {
    const pathname = usePathname()
    const linkPath = pathname.split('/')
    linkPath.shift();
    let pathArray = linkPath.map((path, i) => {
        return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
    });
    //не добавляем в путь ID машин
    pathArray = pathArray.slice(0, 2)

const breadcrumbName = (engName: string): string => {
    if (engName == 'catalog') {
        return 'Каталог'
    }
    if (engName == 'details') {
        return 'Детали'
    }
    return engName
}

  return (
    <div className='flex my-[35px] lg:my-[50px] font-semibold text-slate-800 w-full max-w-[720px]'>
            <Link href='/' className='max-lg:ml-4'>Главная</Link>
    {
        pathArray.map((object: BreadCrumbObject) => {
            return (
            <div key={uuidv4()} className='flex items-center last:pointer-events-none last:aria-disabled last:aria-disabled last:text-slate-500'>
                <Image
                className='h-2.5 w-auto ml-4 mr-4'
                src={BreadcrumbIcon}
                alt="Path delimeter"
                />
                <Link href={object.href}>{breadcrumbName(object.breadcrumb)}</Link>
            </div>
        )
        })
    }
    </div>
  )
}

export default Breadcrumbs
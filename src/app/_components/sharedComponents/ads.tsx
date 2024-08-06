import Image from 'next/image'
import Logo from '@/app/_images/AdLogo.png'

const Ads = () => {
  return (
    <div className="mt-[25px] lg:mt-10 bg-yellowAd flex items-center max-lg:justify-center max-lg:px-[30px] max-lg:border-white max-lg:border-x-[16px] w-full max-w-[720px] h-[100px] lg:h-[140px]">
        <Image
            className='h-full w-auto lg:ml-[60px]'
            src={Logo}
            priority={true}
            alt="We can put your ads here!"
        />
        <div className='text-adText ml-5 lg:ml-[50px] max-[350px]:text-xs'>
        Тут могла бы быть ваша реклама
        </div>
    </div>
  )
}

export default Ads
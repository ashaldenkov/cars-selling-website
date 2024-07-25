import Image from 'next/image'
import Logo from '../_images/AdLogo.png'

const Ads = () => {
  return (
    <div className="w-[720px] h-[140px] bg-yellowAd flex items-center">
        <Image
            className='h-auto w-auto ml-[60px]'
            src={Logo}
            alt="We can put your ads here!"
        />
        <div className='text-adText ml-[50px]'>
        Тут могла бы быть ваша реклама
        </div>
    </div>
  )
}

export default Ads
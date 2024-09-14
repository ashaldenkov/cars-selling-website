import Image from 'next/image'
import SuccessIcon from '@/app/_images/modal-success.svg'
const ContactModal = () => {
  return (
    <div className='z-1 bg-white w-[210px] h-[148px] rounded-xl flex flex-col items-center justify-center mx-auto mt-[198px]'>
        <Image
            className='h-auto w-auto'
            src={SuccessIcon}
            alt="Success"
        />
        <div className='mt-4 text-center text-lg font-semibold'>Скоро мы<br/>свяжемся с вами</div>
    </div>
  )
}

export default ContactModal
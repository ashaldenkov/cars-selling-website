import ContactBanner from '../_images/contact-banner.png'
import Image from 'next/image'
import ContactForm from './ContactForm'

const ContacsUs = () => {

  return (
    <div className="h-[545px] w-[264px] bg-slate-50 sticky top-0 
      rounded-md border border-slate-300 px-[26px] pb-[30px] relative">
        <Image
            className='h-auto w-auto'
            src={ContactBanner}
            alt="Wegugin Logo"
        />
        <h2 className='text-lg text-slate-900 font-medium text-center'>Перезвоним<br/>в течение 30 минут</h2>
        <p className='mt-2.5 text-center text-slate-500 text-sm	font-normal'>Наши менеджеры проведут вам консультацию и помогут в выборе авто</p>
        <ContactForm/>
    </div>
  )
}

export default ContacsUs
'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import ContactModal from './ContactModal'
import { useState } from "react"

  interface ContactValues {
    name: string;
    tel: string;
    contactMethod: string;
  }

const ContactForm = () => {
    const { register, reset, watch, handleSubmit } = useForm<ContactValues>()
    const onSubmit: SubmitHandler<ContactValues> = (data) => {
      setFormSubmitted(true)
      console.log(data)
      reset()
      setTimeout( () => setFormSubmitted(false), 3000)
    }
    const [formSubmitted, setFormSubmitted] = useState(false)

  return (
      <div>
        {formSubmitted ? (
          <div className="w-full h-full absolute top-0 left-0 backdrop-brightness-50 duration-500 animate-slow-flash">
          <ContactModal/>
        </div>
        ) : null}

        <form className='mt-[30px]' onSubmit={handleSubmit(onSubmit)}>

          <input
          {...register("name", { required: true })} 
            id="name"
            type="text"
            placeholder='Имя'
            className='mt-[10px] h-10 w-full rounded-md border border-slate-200 py-2 px-3 text-sm'
          />

          <input
            {...register("tel", { required: true })} 
            id="tel"
            type="tel"
            placeholder='Номер телефона'
            className='mt-[10px] h-10 w-full rounded-md border border-slate-200 py-2 px-3 text-sm'
          />

          <select id="contact-method-select" {...register("contactMethod", {
    required: true
  })}
            className={`mt-[10px] h-10 w-full rounded-md border border-slate-200 py-2 px-3 text-sm ${!watch("contactMethod") ? 'text-slate-400' : ''}`}>
                <option value="" className='text-slate-900'>Способ связи</option>
                <option value="whatsapp" className='text-slate-900'>WhatsApp</option>
                <option value="telegram" className='text-slate-900'>Telegram</option>
                <option value="call" className='text-slate-900'>Звонок</option>
          </select>

          <button
          type="submit"
          className='block mt-[10px] h-10 w-full rounded-md text-sm text-white bg-slate-900'>
            Оставить заявку
          </button>
        </form>
      </div>
  )
}

export default ContactForm
import React, { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './Contact.module.css'
import contactimg from '../../../public/images/contact.jpeg'

export default function Contact() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [msg, setmsg] = useState('')

    const handleClick = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || msg === '') {
            window.alert('Please enter some text')
        } else {
            window.alert('Message is submitted')
        }
    }

    return (
        <>
            <div id='contact' className='flex flex-wrap md:flex-nowrap p-[12px] m-auto my-[19px] gap-6 mx-[12px]'>

              
                <div className='relative flex-1 min-w-[280px] rounded-2xl overflow-hidden'>
                    <img
                        src={contactimg}
                        className='w-full h-full object-fill'
                        alt='home back'
                    />

                    <div className='absolute top-0 right-0 bottom-0 w-[75%] sm:w-[75%]  flex flex-col justify-center p-6 '>
                        <h4 className='text-[#7c6e66] text-[12px]'>Let's work together</h4>
                        <h1 className='text-black font-[500] text-[10px] sm:text-[17px]'>Have a project in mind? I'd love to hear from you.</h1>
                        <p className='text-[#7c6e66]  text-[8px] md:text-[13px]'>
                            Open to frontend roles, internships, and collaborative projects. Drop a message and I'll get back to you soon.
                        </p>

                        <div className='flex flex-wrap pt-[16px] pb-[16px] gap-y-2 gap-x-[28px]'>

                            <div className={styles.common}>
                                <Mail className='w-[15px] h-[15px] mt-0.5 text-gray-700' />
                                <div className='flex flex-col justify-center'>
                                    <span className='font-semibold text-[7px] md:text-[13px]'>Email</span>
                                    <span className=' text-[7px] md:text-[13px] text-gray-600'>priti827800@gmail.com</span>
                                </div>
                            </div>

                            <div className={styles.common}>
                                <Phone className='w-[15px] h-[15px] mt-0.5 text-gray-700' />
                                <div className='flex flex-col'>
                                    <span className='font-semibold text-[7px] md:text-[13px]'>Phone</span>
                                    <span className='text-[7px] md:text-[13px] text-gray-600'>+91 8278003506</span>
                                </div>
                            </div>

                            <div className={styles.common}>
                                <MapPin className='w-[15px] h-[15px] mt-0.5 text-gray-700' />
                                <div className='flex flex-col'>
                                    <span className='font-semibold text-[7px] md:text-[13px]'>Location</span>
                                    <span className='text-[7px] md:text-[13px] text-gray-600'>Banwasa, Haryana</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

             
                <div className='flex-1 min-w-[280px] bg-white p-6 md:p-8 rounded-3xl shadow-xl'>
                    <form className='flex flex-col gap-6'>

                        <div className='flex flex-col sm:flex-row gap-4'>
                            <input
                                type="text"
                                value={name}
                                placeholder="Your Name"
                                className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#527138] bg-[#FAF9F6] text-gray-700 placeholder-gray-400'
                                onChange={(e) => setname(e.target.value)}
                            />
                            <input
                                type="email"
                                value={email}
                                placeholder="Email Address"
                                className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#527138] bg-[#FAF9F6] text-gray-700 placeholder-gray-400'
                                onChange={(e) => setemail(e.target.value)}
                            />
                        </div>

                        <div>
                            <textarea
                                rows="4"
                                value={msg}
                                placeholder="Tell me about your project..."
                                className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#527138] bg-[#FAF9F6] text-gray-700 placeholder-gray-400 resize-none'
                                onChange={(e) => setmsg(e.target.value)}
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className='bg-[#C86D44] hover:bg-[#b05d38] text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-md cursor-pointer'
                                onClick={handleClick}
                            >
                                Send Message
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
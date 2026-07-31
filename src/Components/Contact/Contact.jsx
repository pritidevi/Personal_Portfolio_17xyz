import React, { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './Contact.module.css'
import { useSearchParams } from 'react-router-dom';
export default function Contact() {
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[msg ,setmsg]=useState('')
const handleClick=()=>{
    if(name==='' || email==='' || msg==='' ){
        window.alert('Please enter some text')
    }
    else{
        window.alert('Message is submitted')
    }
}
    return (
        <>
            <div  id='contact' className=' flex flex-wrap  p-6 m-auto md:mx-[76px] my-[19px] gap-x-6 mx-[12px]'>
                <div className={`${styles.image} w-full md:flex-1 p-6 rounded-2xl `}>
                    <div className='flex flex-col flex-wrap  min-h-[292px]  w-[50%] ml-[50%]  my-[2%] md:w-[60%] md:ml-auto  '>
                        <h4 className='text-[#7c6e66] text-[13px]'>Let's work together</h4>
                        <h1 className='text-black text-[20px] '>Have a project in mind? I'd love to hear from you.</h1>
                        <p className='text-[#7c6e66] text-[13px]'>
                            Open to frontend roles, internships, and collaborative projects. Drop a message and I'll get back to you soon.
                        </p>

                        <div className='flex flex-wrap  p-6 text-primary pt-[16px] pb-[16px] gap-y-2 gap-x-[28px]'>

                           
                            <div className={styles.common}>
                                <Mail className={`w-[15px] h-[15px] mt-0.5 text-gray-700 ${styles.common}`} />
                                <div className='flex flex-col justify-center'>
                                    <span className='font-semibold text-sm'>Email</span>
                                    <span className='text-sm text-gray-600'>priti827800@gmail.com</span>
                                </div>
                            </div>

                         
                            <div className={styles.common}>
                                <Phone className={`w-[15px] h-[15px] mt-0.5 text-gray-700 ${styles.common}`} />
                                <div className={`flex flex-col `}>
                                    <span className='font-semibold text-sm'>Phone</span>
                                    <span className='text-sm text-gray-600'>+91 8278003506</span>
                                </div>
                            </div>

                     
                            <div className={styles.common}>
                                <MapPin className={`w-[15px] h-[15px] mt-0.5 text-gray-700 ${styles.common}`} />
                                <div className='flex flex-col'>
                                    <span className='font-semibold text-sm'>Location</span>
                                    <span className='text-sm text-gray-600'>Banwasa,Haryana</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className=' w-full md:flex-1 bg-white p-6 md:p-8 rounded-3xl shadow-xl  '>
                    <form className='flex flex-col gap-6'>

                        <div className='flex flex-col sm:flex-row gap-4'>
                            <input
                                type="text"
                                value={name}
                                placeholder="Your Name"
                                className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#527138] bg-[#FAF9F6] text-gray-700 placeholder-gray-400'onChange={(e)=>setname(e.target.value)}
                            />
                            <input
                                type="email"
                                value={email}
                                placeholder="Email Address"
                                className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#527138] bg-[#FAF9F6] text-gray-700 placeholder-gray-400'onChange={(e)=>setemal(e.target.value)}
                            />
                        </div>

                        
                        <div>
                            <textarea
                                rows="4"
                                value={msg}
                                placeholder="Tell me about your project..."
                                className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#527138] bg-[#FAF9F6] text-gray-700 placeholder-gray-400 resize-none'onChange={(e)=>setmsg(e.target.value)}
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className='bg-[#C86D44] hover:bg-[#b05d38] text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-md'x
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

import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function Footer() {
    return (
        <footer className='bg-[#2A2621] text-[#E5E0D8] py-8 px-[58px] md:px-16'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start'>


                <div className='flex flex-col gap-1'>
                    <h2 className='text-2xl font-serif font-medium tracking-wide'>Priti Devi</h2>
                    <p className='text-[11px] text-[#B3ADA5] max-w-sm leading-relaxed'>
                        Designing responsive, clean interfaces that help products grow — one component at a time.
                    </p>

                    <h5 className='text-[#B3ADA5] text-[13px] mt-1'>© 2026 Priti Devi All Rights Reserved</h5>
                </div>


              
                <div className='grid justify-start '> <p className='text-[11px] text-[#B3ADA5]'>
                    Follow Along
                </p>
                    <div className='flex items-center gap-3 mt-2 justify-start md:justify-end'>


                        <a
                            href='https://www.linkedin.com/in/priti-devi-6a97412ab?utm_source=share_via&utm_content=profile&utm_medium=member_android'
                            target='_blank'
                            rel='noreferrer'
                            className='w-6 h-6 rounded-full border border-[#524B43] flex items-center justify-center text-[10px] hover:border-[#E5E0D8] transition-colors'
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href='https://github.com/PritiDevi'
                            target='_blank'
                            rel='noreferrer'
                            className='w-6 h-6 rounded-full border border-[#524B43] flex items-center justify-center text-[10px] hover:border-[#E5E0D8] transition-colors'
                        >
                            <FaGithub />
                        </a>

                        <a
                            href='https://leetcode.com/u/5sYXhVMwjE/'
                            target='_blank'
                            rel='noreferrer'
                            className='w-6 h-6 rounded-full border border-[#524B43] flex items-center justify-center text-[10px] hover:border-[#E5E0D8] transition-colors'
                        >
                            <SiLeetcode />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
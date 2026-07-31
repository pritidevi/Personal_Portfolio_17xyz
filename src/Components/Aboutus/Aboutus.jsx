import React from 'react'
import styles from './Aboutus.module.css'
import aboutimg from '../../../public/images/about.jpeg'
export default function Aboutus() {
    return (
        <>
            <div id='about' className='flex mt-[35px] mb-[35px]  gap-x-[7%] flex-wrap w-[98%] overflow-x-hidden px-6 m-auto
             '>
                <div className={`w-full md:flex-1 rounded-2xl overflow-hidden`}>
                    <img
                        src={aboutimg} className={`${styles.aboutimg} w-[98%] h-[400px]  rounded-2xl m-auto`} />

                </div>

                <div className={styles.about}>
                    <h4 className='text-primary '>ABOUT ME</h4>
                    <h1 className='text-black text-[32px]'>
                        Clean code, thoughtful design, and a lot of curiosity.  </h1>
                    <p className='text-primary  mt-[16px] mb-[16px]'>
                        I'm a motivated MCA student at Maharshi Dayanand University, Rohtak, with a strong foundation in web development, data structures, and algorithms. My journey began with a BCA from Govt. College for Women, Rohtak, where I first started building for the web.

                        Today I focus on crafting responsive frontend applications with React.js and Tailwind CSS, while continuing to sharpen my problem-solving through DSA. I'm currently interning at Athenura, contributing to real production interfaces.  </p>
                    <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        <li class="flex items-start space-x-3">
                            <span class="text-orange-600 mt-1">✦</span>
                            <span class="text-primary">Strong analytical & problem-solving ability</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <span class="text-orange-600 mt-1">✦</span>
                            <span class="text-primary">Understanding of SDLC</span>
                        </li>
                        <li class="flex items-x-start space-x-3">
                            <span class="text-orange-600 mt-1">✦</span>
                            <span class="text-primary">Collaborative team player</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <span class="text-orange-600 mt-1">✦</span>
                            <span class="text-primary">Quick learner, always exploring new tech</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

import React from 'react'
import styles from './Work.module.css'
import img1 from '../../../public/images/funding.jpeg'
import img2 from '../../../public/images/music.jpeg'
import img3 from '../../../public/images/todo.jpeg'
export default function Work() {
    const projects = [{
        name: 'Music Web Application',
        summary: 'A fully responsive music web app with song browsing, playlist management, and a dynamic audio player interface, built mobile-first with reusable components.',
        skills: ['HTML', 'React.js', 'Tailwind CSS', 'Git'],
        img: img2
    }
        , {
        name: 'Athenura Internship Work',
        summary: 'Contributing to real-world web development projects — building and maintaining responsive UI components as part of the frontend team.',
        skills: ['React.js', 'Tailwind CSS', 'Git', 'Team collaboration'],
        img: img1
    },
    {
        name: 'To-do List Project',
        summary: 'A feature-rich and responsive Todo List web application built to help users manage their daily tasks, boost productivity, and stay organized.',
        skills: ['React.js', 'Tailwind CSS', 'Git'],
        img: img3
    }
    ]
    const alldata = [{
        count: '1+',
        name: 'Projects'
    },
    {
        count: '2',
        name: 'Certificates'
    },
    {
        count: '1',
        name: 'Internship'
    },
    {
        count: '95%',
        name: '12th Score'
    }
    ]
    return (
        <>
            <div id='work' className='grid m-auto p-6'>
                <h5 className='flex justify-center mt-[12px]'>Selected Work</h5>
                <h1 className='text-black text-[32px] flex justify-center text-center font-medium'>
                    Projects I'm proud of.
                </h1>
                <div className='flex flex-wrap gap-6 justify-center'>
                    {projects.map((item, index) => (
                        <div key={index} className='flex flex-col w-[276px] m-[12px] p-4 rounded-2xl  hover:shadow-2xl shadow-gray-400 text-primary bg-white'>

                        
                            <div className="w-full h-[150px] mb-3">
                                <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                            </div>

                            
                            <h2 className="font-bold text-lg mb-1">{item.name}</h2>
                            <p className="text-sm mb-4">{item.summary}</p>

                           
                            <div className='flex flex-wrap gap-1.5 mt-auto'>
                                {item.skills.map((skill, i) => (
                                    <span key={i} className='bg-gray-700 text-white text-xs px-2 py-1 rounded'>
                                        {skill}
                                    </span>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
               <div className='bg-[#556e41] flex flex-wrap justify-around items-center h-[78px] px-4 text-white overflow-hidden mt-[12px]'>
    {alldata.map((item, index) => (
        <div key={index} className='flex items-center gap-x-6'>
            
          
            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-xl font-bold leading-tight'>
                    {item.count}
                </h2>
                <p className='text-xs font-light tracking-wide'>
                    {item.name}
                </p>
            </div>

            {index < alldata.length - 1 && (
                <div className='hidden md:block h-8 w-[1px] bg-white/30 ml-6'></div>
            )}

        </div>
    ))}
</div>
            </div>
        </>
    )
}

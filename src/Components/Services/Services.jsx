import React from 'react'

export default function Services() {
    const services = [
        {
            name: 'UI Development',
            summary: 'Responsive, component-based interfaces built with React.js and Tailwind CSS.'
        },
        {
            name: 'Frontend Design',
            summary: 'Clean, mobile-first layouts that translate design ideas into working code.'
        },
        {
            name: 'Component Systems',
            summary: 'Reusable, scalable component architecture built for maintainable codebases.'
        },
        {
            name: 'Problem Solving',
            summary: 'Strong DSA fundamentals applied to writing efficient, logical code.'
        }

    ]
    return (
        <>
            <div id='services' className='grid px-6 py-6 m-auto bg-[#FBF9F5] items-center'>
                <div className='mb-2'> <h5 className='flex justify-center'>
                    Services
                </h5>
                <h1 className='font-medium text-2xl flex justify-center'>What I can help build.</h1></div>
               
                 <div className='flex flex-wrap m-auto justify-center '>
                {services.map((item) => (
                    
                   
                    <div className=' grid p-3.5 bg-white rounded-2xl border-[1px]  border-gray-300 my-2 mx-2 hover:shadow-2xl shadow-orange-300 max-w-[220px] h-[200px] m-auto 'key={item.name}>
                        <h3 className='text-black font-medium '>
                            {item.name}
                        </h3>
                        <p className='text-primary'>
                            {item.summary}
                        </p>
                        <p className='text-orange-500 text-[12px] '>Learn more →</p>
                    </div>
                    
                ))}</div>
            </div>
        </>
    )
}

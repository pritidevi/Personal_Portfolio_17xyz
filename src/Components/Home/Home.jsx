import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './Home.module.css'
import Aboutus from '../Aboutus/Aboutus'
import Services from '../Services/Services'
import Work from '../Work/Work'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Athnura from '../Athnura/Athnura'
import homeimg from '../../../public/images/home.jpeg'

export default function Home() {
    const tabs = [
        { name: 'HOME', id: 'home' },
        { name: 'ABOUT', id: 'about' },
        { name: 'SERVICES', id: 'services' },
        { name: 'WORK', id: 'work' },
        { name: 'CONTACT', id: 'contact' }
    ]

    const [activeTab, setActiveTab] = useState('home');

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleTabClick = (id) => {
        setActiveTab(id);
        scrollToSection(id);
    };

  return (
    <>
      <Navbar 
        tabs={tabs} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        handleTabClick={handleTabClick}
        scrollToSectio n={scrollToSection}
      />
      
      <div id="home" className={`relative w-full ${styles.background}`}>
        
       
        <img 
          src={homeimg} 
          className='hidden md:block w-full h-[400px] ' 
          alt='home back' 
        />

        <div className={`${styles.hero} absolute inset-0`}>
          <div className='text-[12px] space-x-[.12em] mb-[14px]'>
            <h3 >
              Hi, I'm Priti
            </h3>
            <h1 className='text-black font-medium space-y-[1.2] text-[32px]' >
              I build clean interfaces that help products
              <span className='text-[#376f17] font-script font-medium text-[32px] pl-1' >grow.</span>
            </h1>
            <p className='text-primary pt-1.5 max-w-[420px] mb-6 ' >
              I'm a frontend developer and MCA student passionate about crafting responsive, user-friendly web experiences that look great and work even better — built with React.js and Tailwind CSS.
            </p>
            <button className='btn hover:transition-transform duration-300 hover:-translate-y-1 cursor-pointer'  onClick={() => handleTabClick('work')}>
              View my work →
            </button>
            <div className='text-[17px] mt-[20px] text-[#d19875] font-medium font-script' >
              Currently interning as a Frontend Developer at Athenura
            </div>
          </div>
        </div>
      </div>
      
      <Aboutus/>
      <Services/>
      <Work/>
      <Athnura/>
      <Contact/>
      <Footer/>
    </>
  )
}
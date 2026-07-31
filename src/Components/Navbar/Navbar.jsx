import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Menu, X } from 'lucide-react'

export default function Navbar({ tabs, activeTab, handleTabClick, scrollToSection }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const onMobileTabClick = (id) => {
        handleTabClick(id);
        setMenuOpen(false);
    };

    return (
        <nav className='sticky top-0 z-50 bg-white shadow-md'>
            <div className='flex justify-between items-center w-full px-4 py-3 h-[70px]'>

                
                <div className={styles.brand}>
                    <h1 className={`${styles.name} font-bold text-lg text-gray-800`}>
                        Priti Devi
                    </h1>
                    <h4 className={`${styles.tag} text-xs text-gray-500`}>Frontend Developer</h4>
                </div>

               
                <div className='hidden lg:flex items-center gap-x-6'>
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => handleTabClick(tab.id)}
                            className={`whitespace-nowrap text-sm font-medium transition-colors py-1 cursor-pointer ${
                                activeTab === tab.id ? 'underline text-[#527138]' : 'text-gray-700 hover:text-[#527138]'
                            }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                <button 
                    onClick={() => handleTabClick('contact')}
                    className='hidden lg:block bg-[#527138] text-white px-6 py-2 rounded-full text-sm hover:bg-[#3d5629] transition-colors whitespace-nowrap cursor-pointer'
                >
                    LET'S WORK TOGETHER
                </button>

              
                <button
                    className='lg:hidden text-gray-800 cursor-pointer'
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {menuOpen && (
                <div className='lg:hidden flex flex-col items-center gap-y-4 bg-[#e7814312] backdrop-blur-sm py-6 shadow-md'>
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => onMobileTabClick(tab.id)}
                            className={`text-base font-medium transition-colors cursor-pointer ${
                                activeTab === tab.id ? 'underline text-[#527138]' : 'text-gray-700 hover:text-[#527138]'
                            }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                    
                   
                    <button
                        onClick={() => onMobileTabClick('contact')}
                        className='mt-2 bg-[#527138] text-white px-6 py-2 rounded-full text-sm hover:bg-[#3d5629] transition-colors cursor-pointer'
                    >
                        LET'S WORK TOGETHER
                    </button>
                </div>
            )}
        </nav>
    )
}
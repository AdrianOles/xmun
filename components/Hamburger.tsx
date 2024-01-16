import useNav from '@/hooks/useNav';
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";

const Hamburger = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const nav = useNav();

    const handleClick = () => {
        if (nav.open) {
            nav.onClose();
        } else {
            nav.onOpen()
        }
    }

    return (
        <div className="absolute cursor-pointer w-[50px] h-[50px] z-50 lg:hidden" onClick={() => handleClick()}>
            <div className="w-full h-full flex items-center justify-center">
                <div className={`${router.pathname === '/' || router.pathname === '/schedule' || router.pathname === '/resources' ? 'hidden' : 'block'}
                ${router.pathname === '/schedule' && 'hidden'} 
                ${router.pathname === '/invitation' && 'block'} 
                group z-50 relative w-5 h-3 flex-col justify-between items-center flex`}>
                    <svg className={`w-[20px] h-[1px] cursor-pointer transition duration-300 ease-in-out ${nav.open ? "transform rotate-45 translate-y-[5px]" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 1">
                        <line x1="0" y1="0.5" x2="20" y2="0.5" stroke="#1F1F1F" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                    <svg className={`w-[20px] h-[1px] cursor-pointer transition duration-300 ease-in-out ${nav.open ? "opacity-0" : "opacity-100"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 1">
                        <line x1="0" y1="0.5" x2="20" y2="0.5" stroke="#1F1F1F" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                    <svg className={`w-[20px] h-[1px] cursor-pointer transition duration-300 ease-in-out ${nav.open ? "transform -rotate-45 -translate-y-[6px]" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 1">
                        <line x1="0" y1="0.5" x2="20" y2="0.5" stroke="#1F1F1F" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                </div>
                <div className={`${router.pathname === '/' || router.pathname === '/schedule' || router.pathname === '/resources' ? 'block' : 'hidden'}
                ${router.pathname === '/schedule' && 'block'}  ${router.pathname === '/invitation' && 'hidden'}
                group z-50 relative w-5 h-3 flex-col justify-between items-center flex`}>
                    <svg className={`w-[20px] h-[1px] cursor-pointer transition duration-300 ease-in-out ${nav.open ? "transform rotate-45 translate-y-[5.4px]" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 1">
                        <line x1="0" y1="0.5" x2="20" y2="0.5" stroke="#F5F5F5" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                    <svg className={` h-[1px] cursor-pointer transition-width duration-300 ease-in-out ${nav.open ? "w-0" : "w-[20px]"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 1">
                        <line x1="0" y1="0.5" x2="20" y2="0.5" stroke="#F5F5F5" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                    <svg className={`w-[20px] h-[1px] cursor-pointer transition duration-300 ease-in-out ${nav.open ? "transform -rotate-45 -translate-y-[5px]" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 1">
                        <line x1="0" y1="0.5" x2="20" y2="0.5" stroke="#F5F5F5" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Hamburger;
import React from 'react'
import setShowMenu from './Navigation'
import { Link } from "react-router-dom"

function NavigationMenu(props){
    return (
        <div>
            <div className="py-4 text-center text-green font-semibold text-xl md:text-2xl lg:text-3xl bg-[white]">قنينتي</div>
            <ul className='m-auto w-[90%] text-center text-[white] md:text-xl lg:text-2xl font-normal'>
                <li>
                    <Link 
                        to="/" 
                        className="py-3 border-b border-gray block"
                        onClick={() => setShowMenu(false)}
                    >
                        الرئيسية
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/features" 
                        className="py-3 border-b border-gray block"
                        onClick={() => setShowMenu(false)}
                    >
                        مميزاتنا
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/services" 
                        className="py-3 border-b border-gray block"
                        onClick={() => setShowMenu(false)}
                    >
                        خدماتنا
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/market" 
                        className="py-3 border-b border-gray block"
                        onClick={() => setShowMenu(false)}
                    >
                        المتجر
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/contact" 
                        className="py-3 border-b border-gray block"
                        onClick={() => setShowMenu(false)}
                    >
                        تواصل معنا
                    </Link>
                </li>
            </ul>
            <div className='text-lg text-[#ffffff] bg-green p-2 rounded cursor-pointer font-normal text-center mt-5 w-fit m-auto'>تحميل التطبيق</div>
        </div>
    )
}

export default NavigationMenu;
import React from 'react'
import { HiOutlineClock, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineInbox } from "react-icons/hi";


function SmallCards() {
    return (
        <div className='text-white w-full font-bebas-neue '>
            <div className='container mx-auto grid-cols-4 gap-5 pt-4 sm:grid lg:grid-cols-4 md:grid-cols-2 px-20 font-sans'>
                <div className='relative bg-[#22201a] space-y-3 flex-col rounded-lg w-full pl-3 pr-3 pb-5 text-center pt-10'>
                    <div><HiOutlineLocationMarker className='text-[#ed4444] text-3xl w-full' /></div>
                    <br />
                    <span className='uppercase text-normal tracking-widest font-bebas-neue'>head office address</span><br />
                    <br />
                    <a href='https://maps.app.goo.gl/KBnT2UjPhwTfjmDQ7' className='text-xs tracking-widest font-thin hover:text-[#ed4444]'>TEI Center, 3536 Hilario Street, <br />Brgy. Palanan Makati City, 1235 PH</a>
                </div>
                <div className='relative bg-[#22201a] space-y-3 flex-col rounded-lg w-full pl-3 pr-3 pb-5 text-center pt-10'>
                    <div><HiOutlineClock className='text-[#ed4444] text-3xl w-full' /></div>
                    <br />
                    <span className='uppercase text-normal tracking-widest font-bebas-neue'>working hours</span>
                    <br /><br />
                    <p className='text-xs tracking-widest font-thin hover:text-[#ed4444] cursor-pointer'>Mon - Fri: 9AM - 6PM</p>
                </div>
                <div className='relative bg-[#22201a] space-y-3 flex-col rounded-lg w-full pl-3 pr-3 pb-5 text-center pt-10'>
                    <div><HiOutlinePhone className='text-[#ed4444] text-3xl w-full' /></div>
                    <br />
                    <span className='uppercase text-normal tracking-widest font-bebas-neue'>Phone Numbers</span>
                    <br /><br />
                    <a href="tel:(+63) 997-275-5595" className='text-xs tracking-widest font-thin hover:text-[#ed4444]'>Hotline: (+63) 997-275-5595</a>
                </div>
                <div className='relative bg-[#22201a] space-y-3 flex-col rounded-lg w-full pl-3 pr-3 pb-5 text-center pt-10'>
                    <div><HiOutlineInbox className='text-[#ed4444] text-3xl w-full' /></div>
                    <br />
                    <span className='uppercase text-normal tracking-widest font-bebas-neue'>Email Address</span>
                    <br /><br />
                    <a href='mailto: tei.csr@tatersgroup.com' className='text-xs tracking-widest font-thin hover:text-[#ed4444]'>contact: tei.csr@tatersgroup.com</a>
                </div>
            </div>
        </div>
    )
}

export default SmallCards
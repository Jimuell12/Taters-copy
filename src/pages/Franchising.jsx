import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import AccordionFranchising from '../components/AccordionFranchising'
import { Link } from 'react-router-dom'

function Franchising() {
    return (
        <div>
            <Navbar currentPage={"/franchising"} />
            <Banner currentPage={"/franchising"} />
            <div className='flex justify-center w-full content-center pt-10 pb-5 text-[#ffcd15] font-normal text-3xl font-bebas-neue'>
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
            </div>
            <AccordionFranchising />
            <div className='flex-col text-center w-full content-center pb-5 text-white font-bold text-3xl font-bebas-neue pl-20 pr-20'>
                <h1>Ready to invest in the best Snacks in Town?</h1>
                <p className='text-lg font-sans font-normal p-10'>Kindly fill up our franchise application form and submit a letter of intent specifying your intended space and franchise location. Send your applications thru <a className='font-bold' href="malito:franchising@tatersgroup.com">franchising@tatersgroup.com</a>.</p>
                <div className='flex gap-2 justify-center'>
                    <Link to="https://www.ilovetaters.com/static/media/FranchiseApplicationForm.112b37a7778be97ec130.pdf" download className='bg-white text-black text-sm font-sans p-2 pr-4 pl-4 rounded-2xl w-[150px]'>
                        Application Form
                    </Link>
                    <Link to="https://www.ilovetaters.com/static/media/TatersFranchiseKit.9d2f89c0fbd4f123c732.pdf" download className='bg-white text-black text-sm font-sans p-2 pr-4 pl-4 rounded-2xl w-[150px]'>
                        Franchise Kit
                    </Link>
                </div>

            </div>
            <span></span>
        </div>
    )
}

export default Franchising
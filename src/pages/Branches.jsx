import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import SmallCards from '../components/SmallCards'
import AccordionBranches from '../components/AccordionBranches'

function Branches() {

  const Page = "/branches"

  return (
    <div className='font-sans scroll-smooth'>
      <Navbar currentPage={Page} />
      <Banner currentPage={Page} />
      <h1 className='text-6xl justify-center align-middle flex p-7 font-bebas-neue text-white'>Contact Us</h1>
      <SmallCards />
      <h1 className='text-6xl justify-center align-middle flex p-7 font-bebas-neue text-white'>Our Branches</h1>
      <div className="w-full px-20 font-sans">
        <div className='px-8'>
          <div class="relative w-full min-w-[200px] h-10">
            <input
              className="peer text-white w-full h-full bg-transparent text-white-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white border focus:border-2 border-t-transparent focus:border-t-transparent text-lg px-3 py-7 rounded-md border-white focus:border-white"
              placeholder=" " /><label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-lg text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white-500 peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white">Search store branch
            </label>
          </div>
        </div>
      </div>
      <AccordionBranches/>
    </div>
  )
}

export default Branches
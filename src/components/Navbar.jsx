import React from 'react'
import { GoPerson } from "react-icons/go";
import { Link } from 'react-router-dom';


const Navbar = ({ currentPage }) => {

  var Navimg = ""
  if (currentPage === "/" || currentPage === "/branches"){
    Navimg = "https://www.ilovetaters.com/api/assets/images/shared/logo/taters-logo.png"
  }else if (currentPage === "/branches"){
    Navimg = "https://www.ilovetaters.com/api/assets/images/shared/logo/taters-catering-logo.png"
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: adds smooth scrolling behavior
    });
  };



  return (
    <header className='sticky bg-[#a21013] w-full top-0 z-20 drop-shadow-2xl px-9'>
      <div className='flex h-[64px] justify-between px-20 items-center'>
        <a href="/" >
          <img src={`${Navimg}`} alt="" className='w-[150px] lg:w-[120px]' />
        </a>
        <div className='hidden justify-center md:flex'>
          <ul className='flex pt-2 uppercase font-normal text-white font-bebas-neue text-lg tracking-[3px] h-full'>
            <li className={`p-5 ${currentPage === "/" ? 'text-[#f1b017]' : ''}`}><Link onClick={scrollToTop} to="/">Home</Link></li>
            <li className={`p-5 ${currentPage === "/branches" ? 'text-[#f1b017]' : 'text-white'}`}><Link onClick={scrollToTop}  to="/branches">Branches</Link></li>
            <li className={`p-5 ${currentPage === "/services" || currentPage === "/franchising" ? 'text-[#f1b017]' : 'text-white'}`}><Link onClick={scrollToTop} to="/services">Services</Link></li>
          </ul>
          <div className='flex justify-center items-center text-white pl-3'>
            <button className=' flex flex-col justify-center items-center rounded-xl gap-1'>
              <GoPerson className='text-xl'/>
              <Link className='text-sm font-extralight tracking-widest' to="/account">Sign In</Link>
            </button>
          </div>
        </div>
      </div>

    </header>
    
  )
}

export default Navbar
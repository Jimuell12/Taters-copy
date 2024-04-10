import React from 'react';
import { Link } from 'react-router-dom';

function HomeCards() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: adds smooth scrolling behavior
        });
    };

    return (
        <div className='container mx-auto pb-[100px] grid-cols-3 gap-5 pt-4 hidden sm:grid px-20 font-bebas-neue'>
            <div className="relative sm:h-[300px] lg:h-[500px]">
                <div className='w-full h-full items-end bg-cover bg-right rounded-xl overflow-hidden shadow-md shadow-[#ffcd17] bg-[url("https://www.ilovetaters.com/api/assets/images/home/cards/taters_snackshop.jpg")]'>
                    <div className='leading-3 rounded-b-xl text-white absolute pt-20 bottom-0 tracking-[0px] pb-3 p-5 w-full align-text-bottom bg-gradient-to-t from-[#1d1115] from-40%'>
                        <span className='uppercase font-normal tracking-wide text-xl leading-3'>snackshop</span>
                        <p className='text-xs font-sans'>Online delivery snacks</p>
                    </div>
                </div>
            </div>
            <Link to="/franchising">
                <div className="relative sm:h-[300px] lg:h-[500px]">
                    <div className='w-full h-full items-end bg-cover bg-right rounded-xl overflow-hidden shadow-md shadow-[#ffcd17] bg-[url("https://www.ilovetaters.com/api/assets/images/home/cards/taters_franchising.jpg")]'>
                        <div className='leading-3 rounded-b-xl text-white absolute pt-20 bottom-0 tracking-[0px] pb-3 p-5 w-full align-text-bottom bg-gradient-to-t from-[#1b1915] from-40%'>
                            <span className='uppercase font-normal tracking-wide text-xl leading-3'>Franchising</span>
                            <p className='text-xs font-sans'>Investment oppurtunities</p>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="relative sm:h-[300px] lg:h-[500px]">
                <div className='w-full h-full items-end bg-cover bg-center rounded-xl overflow-hidden shadow-md shadow-[#ffcd17] bg-[url("https://www.ilovetaters.com/api/assets/images/home/cards/POPCLUB.png")]'>
                    <div className='leading-3 rounded-b-xl text-white absolute pt-20 bottom-0 tracking-[0px] pb-3 p-5 w-full align-text-bottom bg-gradient-to-t from-[#22201a] from-40%'>
                        <span className='uppercase font-normal tracking-wide text-xl leading-3'>popclub</span>
                        <p className='text-xs font-sans'>Best deals in town</p>
                    </div>
                </div>
            </div>
            <div className="relative sm:h-[300px] lg:h-[500px]">
                <div className='w-full h-full items-end bg-cover bg-right rounded-xl overflow-hidden shadow-md shadow-[#ffcd17] bg-[url("https://www.ilovetaters.com/api/assets/images/home/cards/taters_catering.jpg")]'>
                    <div className='leading-3 rounded-b-xl text-black absolute pt-20 bottom-0 tracking-[0px] pb-3 p-5 w-full align-text-bottom bg-gradient-to-t from-40% from-[#858173] to-80%'>
                        <span className='uppercase font-normal tracking-wide text-xl leading-3'>taters caters</span>
                        <p className='text-xs font-sans'>Celebration Snacks</p>
                    </div>
                </div>
            </div>
            <a href='https://www.ilovetaters.com/reseller/' className="relative sm:h-[300px] lg:h-[500px]">
                <div className='w-full h-full items-end bg-cover bg-center rounded-xl overflow-hidden shadow-md shadow-[#ffcd17] bg-[url("https://www.ilovetaters.com/api/assets/images/home/cards/RESELLER.png")]'>
                    <div className='leading-3 rounded-b-xl text-black absolute pt-20 bottom-0 tracking-[0px] pb-3 p-5 w-full align-text-bottom bg-gradient-to-t from-40% from-[#c7b7ad] to-80%'>
                        <span className='uppercase font-normal tracking-wide text-xl leading-3'>reseller</span>
                        <p className='text-xs font-sans'>Community selling</p>
                    </div>
                </div>
            </a>
            <Link to="/branches" onClick={scrollToTop}>
                <div className="relative sm:h-[300px] lg:h-[500px]">
                    <div className='w-full h-full items-end bg-cover bg-right rounded-xl overflow-hidden shadow-md shadow-[#ffcd17] bg-[url("https://www.ilovetaters.com/api/assets/images/home/cards/taters_branches.jpg")]'>
                        <div className='leading-3 rounded-b-xl text-black absolute pt-20 bottom-0 tracking-[0px] pb-3 p-5 w-full align-text-bottom bg-gradient-to-t from-[#d7cdb7] from-40% to-80%'>
                            <span className='uppercase font-normal tracking-wide text-xl leading-3'>branches</span>
                            <p className='text-xs font-sans'>Nationwide Locations</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default HomeCards;

import React from 'react';

function Banner({ currentPage }) {
  var bannerimg = ''

  if (currentPage === '/'){
    bannerimg = "https://www.ilovetaters.com/api/assets/images/home/hero/desktop/taters_entertainment_snacks_black.jpg"
  }else if (currentPage === "/franchising"){
    bannerimg = "https://www.ilovetaters.com/api/assets/images/franchising/hero/desktop/franchising-black.jpg"
  }else if ( currentPage === "/branches"){
    bannerimg = "https://www.ilovetaters.com/api/assets/images/branches/hero/desktop/branches_nationwide_black.jpg"
  }else {

  }



  return (
    <div className='w-full relative p-10 flex flex-row-reverse'>
      <div className={`${currentPage === "/franchising" ? "visible" : "invisible"} relative z-10`}>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/dvAGdCU6TTY?si=CmySsJhHyWKFanpu" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen
        ></iframe>
      </div>
      <img className='absolute top-0 left-0 w-full h-full object-cover object-fill' src={bannerimg} alt="" />
    </div>
  );
}

export default Banner;

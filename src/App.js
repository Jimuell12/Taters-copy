import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import HomeCards from './components/HomeCards';
import Footer from './components/Footer';

function App() {
  return (
    <div className='font-sans'>
      <Navbar currentPage={"/"}/>
      <Banner currentPage={"/"}/>
      <HomeCards />
      <Footer/>
    </div>
  );
}

export default App;

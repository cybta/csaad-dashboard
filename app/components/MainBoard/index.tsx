import React from 'react';
import BigBoard from './components/BigBoard';
import Footer from './components/Footer';

const MainBoard = () => {
  return (
    <div className='self-stretch justify-self-stretch flex flex-col grow'>
      <div className='pb-[20px]'>
        <div className='text-neutral-50'>Welcome to the Dashboard</div>
        <h1 className='text-neutral-70 font-bold text-3xl'>Dashboard</h1>
      </div>
      <BigBoard />
      <Footer />
    </div>
  );
};

export default MainBoard;

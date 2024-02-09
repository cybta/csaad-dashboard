import React from 'react';
import Menu from './Menu';
import MainBoard from './MainBoard';

const Dashboard = () => {
  return (
    <div className='p-[50px] w-[80%] flex justify-stretch flex-wrap gap-[50px]'>
      <Menu />
      <MainBoard />
    </div>
  );
};

export default Dashboard;

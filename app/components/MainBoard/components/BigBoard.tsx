import React from 'react';
import LeftBoard from './LeftBoard';
import RightBoards from './RightBoards';

const BigBoard = () => {
  return (
    <div className='flex flex-wrap grow gap-[50px]'>
      <LeftBoard />
      <RightBoards />
    </div>
  );
};

export default BigBoard;

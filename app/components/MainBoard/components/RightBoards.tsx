import React from 'react';

const RightBoards = () => {
  return (
    <div className='w-[calc(33.333%-35px)] flex justify-between flex-col items-stretch gap-[50px]'>
      <div className='bg-primary-70 rounded-xl h-[200px] text-white p-[30px]'>
        Top
      </div>
      <div className='bg-[#c356ab] rounded-xl grow text-white p-[30px]'>
        Bottom
      </div>
    </div>
  );
};

export default RightBoards;

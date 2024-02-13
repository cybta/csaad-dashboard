'use client';
import React, { useEffect, useState } from 'react';
import { csGet } from '../utils/fetcher';

type Link = {
  name: string;
  url: string;
};

type Links = {
  title: string;
  category_list: Link[];
};

const SidePannel = () => {
  const [links, setLink] = useState<Links[]>([]);
  const [activeCategoryIndex, setAtiveCategoryIndex] = useState<number>(0);

  useEffect(() => {
    const baseUrl = `${window.location.protocol}//${window.location.host}/`;
    csGet(`${baseUrl}/api/links`, (data: Links[]) => setLink(data));
  }, []);

  const changeCategory = (index: number) => {
    setAtiveCategoryIndex(index);
  };

  return (
    <div className='bg-white dark:bg-[#222222] w-[20%] flex flex-col p-[30px]'>
      {links && links.length > 0 ? (
        <div className='max-h-[850px] overflow-y-auto'>
          <div className='flex gap-[10px]'>
            {links.map((categ, i) => (
              <button
                className='rounded-full bg-neutral-30 px-4 py-2  hover:text-secondary hover:bg-secondary-10 text-primary-20'
                key={i}
                onClick={() => changeCategory(i)}
              >
                {categ?.title}
              </button>
            ))}
          </div>

          <div className='flex gap-[10px] flex-col mt-8'>
            {links[activeCategoryIndex]?.category_list.map((categ, i) => (
              <a
                key={i}
                href={categ.url}
                target='_blank'
                rel='noopener noreferrer'
                className={`py-5 text-primary-50 dark:text-primary-10 hover:text-secondary dark:hover:text-secondary-10 ${
                  i === links[activeCategoryIndex].category_list.length - 1
                    ? ''
                    : 'border-b border-b-neutral-30 dark:border-b-neutral-90'
                } `}
              >
                {categ?.name}
              </a>
            ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SidePannel;

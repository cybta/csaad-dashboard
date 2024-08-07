import React from 'react';

const RightBoards = () => {
  return (
    <div className='w-[calc(33.333%-35px)] flex justify-between flex-col items-stretch gap-[50px]'>
      <div className='bg-[#c356ab] rounded-xl grow '>
        <table className='h-[200px] w-full'>
          <thead>
            <tr>
              <th className='px-4 py-2 text-left text-s font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200'>
                English
              </th>
              <th className='px-4 py-2 text-left text-s font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200'>
                Russian
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            <tr>
              <td className='px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>
                Rod
              </td>
              <td className='px-4 py-2 whitespace-nowrap text-sm text-gray-500'>
                Стержень
              </td>
            </tr>
            <tr>
              <td className='px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>
                Threaded Rod
              </td>
              <td className='px-4 py-2 whitespace-nowrap text-sm text-gray-500'>
                Резьбовой стержень
              </td>
            </tr>
            <tr>
              <td className='px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>
                Nut
              </td>
              <td className='px-4 py-2 whitespace-nowrap text-sm text-gray-500'>
                Гайка
              </td>
            </tr>
            <tr>
              <td className='px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>
                Screw
              </td>
              <td className='px-4 py-2 whitespace-nowrap text-sm text-gray-500'>
                Винт
              </td>
            </tr>
            <tr>
              <td className='px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>
                Screw for Wood
              </td>
              <td className='px-4 py-2 whitespace-nowrap text-sm text-gray-500'>
                Шуруп
              </td>
            </tr>
            <tr>
              <td className='px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>
                Universal Joint
              </td>
              <td className='px-4 py-2 whitespace-nowrap text-sm text-gray-500'>
                Карданное соединение
              </td>
            </tr>
            <tr>
              <td className='px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>
                Inserts
              </td>
              <td className='px-4 py-2 whitespace-nowrap text-sm text-gray-500'>
                Вставки
              </td>
            </tr>
            <tr>
              <td className='px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>
                3D Print Inserts
              </td>
              <td className='px-4 py-2 whitespace-nowrap text-sm text-gray-500'>
                Вставки для 3D печати
              </td>
            </tr>
            <tr>
              <td className='px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>
                Spacers
              </td>
              <td className='px-4 py-2 whitespace-nowrap text-sm text-gray-500'>
                Проставки
              </td>
            </tr>
            <tr>
              <td className='px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>
                Bearings
              </td>
              <td className='px-4 py-2 whitespace-nowrap text-sm text-gray-500'>
                Подшипники
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RightBoards;

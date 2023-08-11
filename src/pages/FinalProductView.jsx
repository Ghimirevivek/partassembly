import React from 'react';
import PartList from '../components/PartList';
import { useStateContext } from '../context/StateProvider';

export const FinalProductView = ({ setPage }) => {
  const { assembledParts } = useStateContext();
  return (
    <div className='w-[100%] min-h-screen bg-slate-100 border border-dotted border-gray-600 flex flex-col items-center justify-start gap-2'>
      <div className='mt-4 flex items-center justify-between w-[98%] px-6'>
        <div
          onClick={() => setPage(3)}
          className='px-2 py-1 font-semibold bg-blue-700 w-auto min-w-[5rem] h-12 rounded-md flex items-center justify-center hover:bg-blue-900 hover:scale-105 text-white'
        >
          Go Back
        </div>
        <button
          className='px-2 py-1 font-semibold bg-blue-700 w-auto min-w-[5rem] h-12 rounded-md flex items-center justify-center hover:bg-blue-900 hover:scale-105 text-white'
          onClick={() => setPage(1)}
        >
          HomePage
        </button>
      </div>

      <div className='  bg-white p-6 w-[50%] min-h-[50vh] h-auto  border-[3px] border-dotted border-indigo-400  flex flex-wrap gap-4 rounded-md'>
        {assembledParts.map((pictures) => {
          return <PartList key={pictures.id} pictures={pictures} />;
        })}
      </div>
    </div>
  );
};
